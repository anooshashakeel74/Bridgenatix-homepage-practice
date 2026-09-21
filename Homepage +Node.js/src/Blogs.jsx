import {useState,useEffect} from "react";
import {Header} from "./App"
import {NavLink,useParams,useNavigate,useLocation} from "react-router-dom";
import {LucideMail, LucidePhone, MapPinIcon} from "lucide-react";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa6";

function Blogpost(){
    const {id} = useParams();
    const location = useLocation();
    const [post,setpost]=useState(location.state?.post || null);
    const [loading,setloading] = useState(!location.state?.post);

    useEffect(()=>{
        if (post) return;

        fetch(`https://dev.to/api/articles/${id}`)
            .then((res)=>{
                if(!res.ok) throw new Error("Blog Fetching Failed")
                return res.json()
            })
            .then((data)=>{
                setpost(data);
                setloading(false);
            })
            .catch((err)=>{
                console.log("Failed to fetch Blogs",err);
                setloading(false);
            })
    },[id])

    if (loading) {
        return (
            <div className="w-full min-h-screen relative overflow-x-hidden">
                <Header/>
                <p className="text-center py-20 text-[17px] text-[#565b66]">Loading...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="w-full min-h-screen relative overflow-x-hidden">
                <Header/>
                <p className="text-center py-20 text-[17px] text-[#565b66]">Post not found</p>
            </div>
        );
    }

    return(
        <div className="w-full min-h-screen relative overflow-x-hidden">
            <Header/>
            <section className="py-[100px] px-[76px] max-w-[800px] mx-auto">
                <h1 className="font-archivo text-[40px] font-bold mb-6">{post.title}</h1>
                <img src={post.cover_image} alt={post.title} className="w-full rounded-[20px] mb-8"/>
                <div
                    className="text-[16px] leading-[1.8]"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                />
            </section>
        </div>
    );
}
function Blogs(){
    const navigate = useNavigate();

    function goToRandomArticle() {
        fetch("https://dev.to/api/articles?per_page=3")
            .then((res) => res.json())
            .then((data) => {
                const article = data[Math.floor(Math.random() * data.length)];
                navigate(`/blogs/${article.id}`, { state: { post: article } });
            })
            .catch((err) => console.log("Failed to fetch article", err));
    }

    return(
        <div className="w-full min-h-screen relative overflow-x-hidden">
            <Header/>
            <section className="Blog flex flex-col w-full py-[130px] px-[64px] items-center
            max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border max-md:py-[60px]">
                <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                    <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                    Latest News
                </div>
                <h1 className="font-['Archivo',sans-serif] text-[clamp(2.2rem,4.6vw,3.8rem)] font-[800]
                    tracking-[-0.04em] leading-[1.05] text-[#1f1f24] mb-[38px] mt-[-12px]">
                    Our Blog
                </h1>
                <p className="max-w-[700px] text-[15.5px] leading-[1.75] text-[#565b66] mb-[40px] mt-[-25px] tracking-[0.4px] text-center">
                    Insights, engineering deep-dives and playbooks from the teams shipping enterprise<br/>
                    transformation every day.
                </p>
                <div className="flex w-full justify-center items-start gap-[10px] m-[30px_auto_0_auto]
                max-md:flex-col max-md:gap-[24px] max-md:ml-[-25px]">
                    <div className="group flex flex-1 max-w-[400px] bg-[#f1f1ef] rounded-[32px] p-[45px_35px_35px_35px] box-border
                    flex-col items-start relative translate-y-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.25,1,0.5,1)]
                    will-change-transform hover:shadow-[15px_10px_20px_-10px_rgba(0,0,0,0.07),15px_30px_60px_-15px_rgba(0,0,0,0.10)]
                    hover:translate-y-[-30px] max-md:max-w-full max-md:w-full max-md:hover:translate-y-[-12px]">
                        <p className="text-[12px] font-[700] text-brand tracking-[1.5px] m-[0_0_12px_0] w-full">
                            STRATEGY
                            <span className="absolute top-[20px] right-[21px] font-archivo text-[70px] font-[900] leading-[1.1] text-transparent
                            [text-stroke-color:2px_#d1d1d0] [-webkit-text-stroke:2px_#d1d1d0] will-change-transform transition-trasnform duration-500 ease_in_out
                            ,text_stroke_color_0.5s_cubic-bezier(0.25,1,0.5,1) group-hover:[text-stroke-color:#ec4b1f] group-hover:[-webkit-text-stroke-color:#ec4b1f] ">01</span>
                        </p>
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]">
                            Modernizing Payments<br/>at Enterprise Scale
                        </h3>
                        <div className="flex justify-center items-center w-[300px] h-[180px] overflow-hidden box-border rounded-[10%] mt-[-10px] mb-[10px]">
                            <img src="blog-img1.jpg" alt="Blog No 1" loading="lazy"  className="w-full h-full object-cover scale-[1] will-change-transform
                            transition-transform duration-[0.7s] [transition-timing-function:cubic-bezier(0.25,1,0.7,1)]
                            group-hover:scale-[1.08]"/>
                        </div>
                        <p className="max-w-130 text-[15px] p-[5px] leading-[1.9] text-[#565b66] mb-10">
                            How a Fortune 500 provider re-platformed
                            its settlement pipeline without a single day
                            of downtime.
                        </p>
                        <NavLink to="#" onClick={(e) => { e.preventDefault(); goToRandomArticle(); }} className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
                            Read Article ➔
                        </NavLink>
                    </div>
                    <div className="group flex flex-1 max-w-[400px] bg-[#f1f1ef] rounded-[32px] p-[45px_35px_35px_35px] box-border
                    flex-col items-start relative translate-y-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.25,1,0.5,1)]
                    will-change-transform hover:shadow-[15px_10px_20px_-10px_rgba(0,0,0,0.07),15px_30px_60px_-15px_rgba(0,0,0,0.10)]
                    hover:translate-y-[-30px] max-md:max-w-full max-md:w-full max-md:hover:translate-y-[-12px]">
                        <p className="text-[12px] font-[700] text-brand tracking-[1.5px] m-[0_0_12px_0] w-full">
                            AI & AUTOMATION
                            <span className="absolute top-[20px] right-[21px] font-archivo text-[70px] font-[900] leading-[1.1] text-transparent
                            [text-stroke-color:2px_#d1d1d0] [-webkit-text-stroke:2px_#d1d1d0] will-change-transform transition-trasnform duration-500 ease_in_out
                            ,text_stroke_color_0.5s_cubic-bezier(0.25,1,0.5,1) group-hover:[text-stroke-color:#ec4b1f] group-hover:[-webkit-text-stroke-color:#ec4b1f] ">02</span>
                        </p>
                        <h2 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]">
                            Generative AI in<br/> Regulated Industries
                        </h2>
                        <div className="flex justify-center items-center w-[300px] h-[180px] overflow-hidden box-border rounded-[10%] mt-[-10px] mb-[10px]">
                            <img src="blog-img2.jpg"  alt="Blog No 2" loading="lazy" className="w-full h-full object-cover scale-[1] will-change-transform
                            transition-transform duration-[0.7s] [transition-timing-function:cubic-bezier(0.25,1,0.7,1)]
                            group-hover:scale-[1.08]"/>
                        </div>
                        <p className="max-w-130 text-[15px] p-[5px] leading-[1.9] text-[#565b66] mb-10">
                            A practical framework for shipping LLM-
                            powered features while keeping compliance teams
                            happy.
                        </p>
                        <NavLink to="#" onClick={(e) => { e.preventDefault(); goToRandomArticle(); }} className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
                            Read Article ➔
                        </NavLink>
                    </div>
                    <div className="group flex flex-1 max-w-[400px] bg-[#f1f1ef] rounded-[32px] p-[45px_35px_35px_35px] box-border
                    flex-col items-start relative translate-y-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.25,1,0.5,1)]
                    will-change-transform hover:shadow-[15px_10px_20px_-10px_rgba(0,0,0,0.07),15px_30px_60px_-15px_rgba(0,0,0,0.10)]
                    hover:translate-y-[-30px] max-md:max-w-full max-md:w-full max-md:hover:translate-y-[-12px]">
                        <p className="text-[12px] font-[700] text-brand tracking-[1.5px] m-[0_0_12px_0] w-full">
                            CLOUD & DEVOPS
                            <span className="absolute top-[20px] right-[21px] font-archivo text-[70px] font-[900] leading-[1.1] text-transparent
                            [text-stroke-color:2px_#d1d1d0] [-webkit-text-stroke:2px_#d1d1d0] will-change-transform transition-trasnform duration-500 ease_in_out
                            ,text_stroke_color_0.5s_cubic-bezier(0.25,1,0.5,1) group-hover:[text-stroke-color:#ec4b1f] group-hover:[-webkit-text-stroke-color:#ec4b1f] ">03</span>
                        </p>
                        <h2 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]">
                            Cutting Cloud Spend<br/> Without Cutting Speed
                        </h2>
                        <div className="flex justify-center items-center w-[300px] h-[180px] overflow-hidden box-border rounded-[10%] mt-[-10px] mb-[10px]">
                            <img src="blog-img3.jpg" alt="Blog No 3" loading="lazy" className="w-full h-full object-cover scale-[1] will-change-transform
                            transition-transform duration-[0.7s] [transition-timing-function:cubic-bezier(0.25,1,0.7,1)]
                            group-hover:scale-[1.08]"/>
                        </div>
                        <p className="max-w-130 text-[15px] p-[5px] leading-[1.9] text-[#565b66] mb-10">
                            The FinOps playbook we use to reclaim
                            six-figure budgets while accelerating
                            release cadence.
                        </p>
                        <NavLink to="#" onClick={(e) => { e.preventDefault(); goToRandomArticle(); }} className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
                            Read Article ➔
                        </NavLink>
                    </div>
                </div>
            </section>
            <footer className="footer flex flex-col w-full bg-[#0e0f12] box-border rounded-t-[50px] pt-[130px]
            max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border">
                <div className="bg-[#0e0f12] flex w-full gap-[112px] p-16 max-md:flex-col max-md:gap-10
                max-md:px-5 max-md:py-[60px] max-md:mb-0">
                    <div className="flex flex-col w-[370px] max-md:w-full max-md:max-w-full max-md:ml-0">
                        <div className="flex items-center">
                            <img src="logo2.jpg" alt="BridgeNatix Logo" loading="lazy" className="h-[55px] w-auto" />
                        </div>
                        <p className="max-w-[520px] text-[15.04px] leading-[1.8] text-[#8d9199] mb-10 mt-[10px] tracking-[0.4px]">
                            Transformation enterprise technology solutions that
                            convert strategy into measurable outcomes for
                            modern businesses.
                        </p>
                        <div className="grid grid-cols-2 bg-[rgb(28_29_34_/_0)] border border-[rgba(255,255,255,0.12)] rounded-[15px] overflow-hidden max-w-[360px] max-md:max-w-full max-h-[240px]">
                            <div className="box-border px-[30px] py-[25px] bg-[#0e0f12] border border-[rgba(255,255,255,0.12)] -mb-[45px]">
                                <h2 className="text-[31px] font-[850] text-[#fcfcfb] tracking-[1.5px] mb-[7px] mt-0 w-full">
                                    100
                                    <span className="text-[#f15221] ml-[2px]">
                                        +
                                    </span>
                                </h2>
                                <p className="max-w-[520px] text-[13.5px] leading-[1.9] text-[#7d8087] mb-10">
                                    Projects
                                </p>
                            </div>
                            <div className="box-border px-[30px] py-[25px] bg-[#0e0f12] border border-[rgba(255,255,255,0.12)] -mb-[45px]">
                                <h2 className="text-[31px] font-[850] text-[#fcfcfb] tracking-[1.5px] mb-[7px] mt-0 w-full">
                                    25
                                    <span className="text-[#f15221] ml-[2px]">
                                        +
                                    </span>
                                </h2>
                                <p className="max-w-[520px] text-[13.5px] leading-[1.9] text-[#7d8087] mb-10">
                                    Countries
                                </p>
                            </div>
                            <div className="box-border px-[30px] py-[25px] bg-[#0e0f12] border border-[rgba(255,255,255,0.12)] -mb-[45px]">
                                <h2 className="text-[31px] font-[850] text-[#fcfcfb] tracking-[1.5px] mb-[7px] mt-0 w-full">
                                    100
                                    <span className="text-[#f15221] ml-[2px]">
                                        +
                                    </span>
                                </h2>
                                <p className="max-w-[520px] text-[13.5px] leading-[1.9] text-[#7d8087] mb-10">
                                    Clients
                                </p>
                            </div>
                            <div className="box-border px-[30px] py-[25px] bg-[#0e0f12] border border-[rgba(255,255,255,0.12)] -mb-[45px]">
                                <h2 className="text-[31px] font-[850] text-[#fcfcfb] tracking-[1.5px] mb-[7px] mt-0 w-full">
                                    95
                                    <span className="text-[#f15221] ml-[2px]">
                                        +
                                    </span>
                                </h2>
                                <p className="max-w-[520px] text-[13.5px] leading-[1.9] text-[#7d8087] mb-10">
                                    NPS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 max-w-[325px]">
                        <h3  className="text-base text-[#f15221] mb-[27px]">
                            Recent Post
                        </h3>
                        <div className="flex flex-col gap-[10px] box-border border-b-[0.1px] border-[rgb(125_128_135_/_0.21)] pb-[17px] ml-[39px] -mt-[30px] max-md:ml-0 max-md:mt-0">
                            <NavLink to="blog/cutting-cloud-spend-without-cutting-speed" className="no-underline text-[#d9dbdd] text-[0.92rem] font-[550] leading-[1.5] tracking-[0.1px] font-['Inter',sans-serif] -mb-[5px] transition-transform duration-500
                            ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform hover:text-[#f15221] hover:scale-[1.03]">
                                Cutting Cloud Spend Without Cutting Speed
                            </NavLink>
                            <p className="text-[#7d8087] text-sm font-['Inter',sans-serif]">
                                08/07/2026
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] box-border border-b-[0.1px] border-[rgb(125_128_135_/_0.21)] pb-[17px] ml-[39px] -mt-[30px] max-md:ml-0 max-md:mt-0">
                            <NavLink to="blog/generative-ai-in-regulated-industries" className="no-underline text-[#d9dbdd] text-[0.92rem] font-[550] leading-[1.5] tracking-[0.1px] font-['Inter',sans-serif] -mb-[5px] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                            will-change-transform hover:text-[#f15221] hover:scale-[1.03]">
                                Generative AI in Regulated Industries
                            </NavLink>
                            <p className="text-[#7d8087] text-sm font-['Inter',sans-serif]">
                                24/06/2026
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] box-border border-b-[0.1px] border-[rgb(125_128_135_/_0.21)] pb-[17px] ml-[39px] -mt-[30px] max-md:ml-0 max-md:mt-0">
                            <NavLink to="blog/modernizing-payments-at-enterprise-scale" className="no-underline text-[#d9dbdd] text-[0.92rem] font-[550] leading-[1.5] tracking-[0.1px] font-['Inter',sans-serif] -mb-[5px] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                            will-change-transform hover:text-[#f15221] hover:scale-[1.03]">
                                Modernizing Payments at Enterprise Scale
                            </NavLink>
                            <p className="text-[#7d8087] text-sm font-['Inter',sans-serif]">
                                10/06/2026
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-full min-w-0 gap-5 -ml-5 max-md:w-full max-md:ml-0">
                        <h3 className="text-[#f15221] text-base mb-[10px]">
                            Get in Touch
                        </h3>
                        <div className="w-full flex p-0 mt-0 -mb-10 ml-[25px] max-md:ml-0">
                            <LucideMail  size={17} className="fill-none [stroke-width:2px] text-[#f15221]"/>
                            <span className="text-[0.92rem] text-[#e4e7e9] pl-[10px] -mt-[5px]
                            font-['Inter',sans-serif] mb-[44px] tracking-[0.1px] leading-[1.9] max-w-[520px]">
                                info@bridgenatix.com
                            </span>
                        </div>
                        <div className="w-full flex p-0 mt-0 -mb-10 ml-[25px] max-md:ml-0">
                            <LucidePhone size={19} className="fill-[#f15221] [stroke-width:2px] text-[#0e0f12]"/>
                            <span className="text-[0.92rem] text-[#e4e7e9] pl-[10px] -mt-[5px]
                            font-['Inter',sans-serif] mb-[44px] tracking-[0.1px] leading-[1.9] max-w-[520px]">
                                +92-42-32190581
                            </span>
                        </div>
                        <div className="w-full flex p-0 mt-0 -mb-10 ml-[25px] max-md:ml-0">
                            <MapPinIcon size={19} className="fill-[#f15221] [stroke-width:2px] text-[#0e0f12]"/>
                            <span className="text-[0.92rem] text-[#e4e7e9] pl-[10px] -mt-[5px]
                            font-['Inter',sans-serif] mb-[44px] tracking-[0.1px] leading-[1.9] max-w-[520px]">
                                Main LDA Avenue 1, Lahore
                            </span>
                        </div>
                        <div className="flex w-full gap-[10px]">
                            <a href="https://www.linkedin.com/company/https-www.linkedin.com-company-bridgenatix-/"
                               className="flex w-10 h-10 box-border rounded-full border border-[rgb(125_128_135_/_0.21)]
                               justify-center items-center translate-y-[1%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                               will-change-transform hover:bg-[#e94f21] hover:shadow-[0_8px_24px_rgba(238,78,29,0.4)] hover:-translate-y-[20%]">
                                <FaLinkedin size={18} className="text-white fill-white [stroke-width:0px]"/>
                            </a>
                            <a href="https://www.facebook.com/BridgeNatix/"
                               className="flex w-10 h-10 box-border rounded-full border border-[rgb(125_128_135_/_0.21)]
                                justify-center items-center translate-y-[1%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                                will-change-transform hover:bg-[#e94f21] hover:shadow-[0_8px_24px_rgba(238,78,29,0.4)] hover:-translate-y-[20%]">
                                <FaFacebook size={20} className="text-white fill-white [stroke-width:0px]"/>
                            </a>
                            <a href="https://www.youtube.com/@bridgenatix"
                               className="flex w-10 h-10 box-border rounded-full border border-[rgb(125_128_135_/_0.21)]
                               justify-center items-center translate-y-[1%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                               will-change-transform hover:bg-[#e94f21] hover:shadow-[0_8px_24px_rgba(238,78,29,0.4)] hover:-translate-y-[20%]">
                                <FaYoutube size={20} className="text-white fill-white [stroke-width:0px]"/>
                            </a>
                            <a href="https://www.instagram.com/bridgenatix"
                               className="flex w-10 h-10 box-border rounded-full border border-[rgb(125_128_135_/_0.21)]
                               justify-center items-center translate-y-[1%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                               will-change-transform hover:bg-[#e94f21] hover:shadow-[0_8px_24px_rgba(238,78,29,0.4)] hover:-translate-y-[20%]">
                                <FaInstagram size={20} className="text-white fill-white [stroke-width:0px]"/>
                            </a>
                            <a href="https://www.google.com/maps/place/BridgeNatix/@31.4187483,74.2052379,561m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3918ff00062162d7:0x3116a090b5927b98!8m2!3d31.4187483!4d74.2052379!16s%2Fg%2F11nbqcnzk7?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                               className="flex w-10 h-10 box-border rounded-full border border-[rgb(125_128_135_/_0.21)]
                               justify-center items-center translate-y-[1%] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                               will-change-transform hover:bg-[#e94f21] hover:shadow-[0_8px_24px_rgba(238,78,29,0.4)] hover:-translate-y-[20%]
                               ">
                                <MapPinIcon size={20} className="fill-[#fdfdfd] [stroke-width:2px] text-[#0e0f12]"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex box-border border-t border-[rgb(125_128_135_/_0.21)] justify-center pt-[20px] pb-[20px]
                bg-[#0e0f12] max-h-[50px] max-md:p-5 max-md:h-auto max-md:max-h-none">
                    <p className="text-sm text-[#7d8087] font-['Inter',sans-serif] max-md:text-center max-md:mb-0">
                        © Copyright 2026. All Rights Reserved. Bridgenatix.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Blogs;
export {Blogpost};
