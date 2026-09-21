import {useState,useEffect} from "react";
import {Header} from './App'
import {CodeXml,TrendingUp,Users2} from "lucide-react";
import {NavLink} from "react-router-dom";

function Career(){
    const [career,setcareer] = useState([]);
    const [loading,setloading] = useState(true);

    useEffect(()=>{
        fetch(`https://remotive.com/api/remote-jobs`)
            .then((res)=>{
                if(!res) throw new Error ("Fetch Failed")
                return res.json();
            })
            .then((data)=>{
                console.log("Data fetched",data)
                 if (data.jobs && Array.isArray(data.jobs)) {
                const limitedJobs = data.jobs.slice(5, 7);
                setcareer(limitedJobs);
                }
                setloading(false);
            })
            .catch((err)=>{
                console.log("Failed to fetch data",err);
                setloading(false);
            })
    },[]);

    const stripHtml = (htmlString) => {
        if (!htmlString) return "";
        return htmlString.replace(/<[^>]*>/g, " "); // Removes all HTML tags cleanly
    };

    return(
        <div className="">
            <Header/>
            <section className="careerhero flex flex-col items-start py-[60px] px-[76px] bg-[url('/network-bg.png')] bg-no-repeat bg-cover bg-right">
                <div className="inline-flex font-inter items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-6 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)] ">
                    <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                    Join Our Team
                </div>
                <h1 className="font-archivo text-[51px] font-extrabold tracking-[-2px]
                    mb-5 leading-[55px] max-md:text-[30px] max-md:tracking-[-0.6px] mt-[-10px]">
                        Build  the Future <br/>
                        With <span className="text-[#ee4c1f]">BridgeNatix</span>
                </h1>
                <p className="text-muted text-[18px] leading-7 ">
                    We are looking for passionate innovators, engineers, and<br/>
                    problem solvers to help us deliver high-impact enterprise<br/>
                    solutions.
                </p>
                <a href="#openroles" className="font-inter font-bold items-center bg-brand text-white
                    font-[550] text-[14.5px] px-8 py-3 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2) mt-8 hover:bg-[#050523] hover:text-white
                     transition:[background,transform] duration-300 ease-in-out hover:scale-[1.05]">
                    View Open Roles
                </a>
            </section>
            <section className="Culture w-full flex-col items-center text-center py-[140px] px-[76px]">
                <h2 className="font-inter font-bold text-brand">
                    OUR CULTURE
                </h2>
                <h1 className="font-inter font-bold text-[30px] mb-[10px]">
                    Why Work With Us?
                </h1>
                <p className="text-muted text-[17px] mb-15">
                    Empowering our teams to learn, innovate, and thrive in an enterprise-focused<br/>
                    development environment.
                </p>
                <div className="flex gap-[30px] w-full items-center justify-center">
                    <div className="max-w-[320px] flex flex-col items-start text-start p-[25px] bg-off-white rounded-[25px]">
                        <div className="min-w-[46px] h-[46px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                        group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                            <span className="flex items-center justify-center w-full h-full">
                                <CodeXml size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                            </span>
                        </div>
                        <h1 className="font-bold font-inter text-ink text-[20px]">
                            Modern Tech Stack
                        </h1>
                        <p className="text-muted text-[14.5px] ">
                            Work on cutting-edge frameworks, high-scale
                            architectures, and modern cloud
                            infrastructure.
                        </p>
                    </div>
                    <div className="max-w-[320px] flex flex-col items-start text-start p-[25px]  bg-offwhite rounded-[25px]">
                        <div className="min-w-[46px] h-[46px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                        group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                            <span className="flex items-center justify-center w-full h-full">
                                <TrendingUp size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                            </span>
                        </div>
                        <h1 className="font-bold font-inter text-ink text-[20px]">
                            Career Growth
                        </h1>
                        <p className="text-muted text-[14.5px]">
                            Clear progression roadmaps, mentorship, and
                            opportunities to lead enterprise client
                            initiatives.
                        </p>
                    </div>
                    <div className="max-w-[320px] flex flex-col items-start text-start p-[25px] bg-offwhite rounded-[25px]">
                        <div className="min-w-[46px] h-[46px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                        group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                            <span className="flex items-center justify-center w-full h-full">
                                <Users2 size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                            </span>
                        </div>
                        <h1 className="font-bold font-inter text-ink text-[20px]">
                            Flexible & Comfortable
                        </h1>
                        <p className="text-muted text-[14.5px]">
                            A balanced culture focused on execution
                            quality, collaborative peer learning, and
                            autonomy.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center text-center py-0 px-[76px]">
                <h2 className="font-inter font-bold text-brand">
                    CURRENT OPENINGS
                </h2>
                <h1 className="font-inter font-extrabold text-[60px]">
                    Open Positions
                </h1>
                <p className="text-muted text-[17px] mb-20">
                    Explore current job opportunities and find where you fit best.
                </p>
                {loading ? (
                      <p className="text-[17px] text-[#565b66] max-md:text-[15.5px]">Loading...</p>
                ):(
                    <div className=" flex flex-wrap  items-stretch px-[40px] gap-8">
                        {career.map((item)=>(
                            <div key={item.id} className="group flex flex-col items-start text-start flex-grow p-[20px] rounded-[40px_40px_40px_5px]
                            translate-y-0 transition-all duration-[0.5s] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform
                            hover:shadow-[15px_10px_20px_-10px_rgba(0,0,0,0.07),15px_30px_60px_-15px_rgba(0,0,0,0.10)] border-transparent
                            hover:translate-y-[-30px] hover:border-t-2 hover:border-brand">
                                <div className="flex justify-between items-center w-full font-archivo mb-2 ">
                                    <p className="text-[16px] text-brand font-medium
                                    group-hover:text-ink transition-all duration-300s ease-in-out">
                                        {item.category}
                                    </p>
                                    <span className="font-archivo text-muted text-[20px]
                                    group-hover:text-brand transition-all duration-300s ease-in-out">
                                         {item.job_type}
                                    </span>
                                </div>
                                <h1 className="font-archivo text-[22px] font-bold mt-2 mb-2
                                 group-hover:text-brand transition-all duration-300s ease-in-out">
                                    {item.title}
                                </h1>
                                <div className="text-[15px] leading-[1.6] text-black line-clamp-2 overflow-hidden text-ellipsis [&_p]:inline [&_p]:text-[15px]"
                                dangerouslySetInnerHTML={{ __html: item.description }} />


                                <div className="flex flex-wrap gap-[8px] mb-4 w-full mt-[20px] pb-[30px] border-b-1 border-b-muted">
                                        {item.tags && item.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-[12px] font-semibold font-inter
                                                bg-[#fbe3de] text-muted px-2.5 py-1
                                                rounded-[6px] inline-block whitespace-nowrap "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                                <div className="w-full flex justify-between">
                                    <h1 className="font-archivo font-medium text-[17px] text-muted">
                                        Ready to Apply?
                                    </h1>
                                    <a href="#applynow"
                                        className="bg-brand text-white py-[12px] px-[26px] rounded-[30px]
                                        text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                                        mt-auto hover:bg-brand-dark hover:text-white no-underline"
                                    >
                                        Apply Now ➔
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
export default Career;