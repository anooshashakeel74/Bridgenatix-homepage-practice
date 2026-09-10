import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import {LucideMonitor, Headphones, NotebookText, AtomIcon, Cloud,LucideRectangleHorizontal,Quote,LucidePhone,MapPinIcon,LucideMail,Sun} from "lucide-react";
import {FaLinkedin,FaInstagram,FaFacebook,FaYoutube} from 'react-icons/fa6';
import {Routes,Route} from "react-router-dom";
import Team from './Team';
import CountUp from "react-countup";
import "./style.css";


function Header()
{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className=" flex items-center justify-between
                        py-[18px] px-[65px] bg-[#f3efed]
                        border-b border-[#f3efed] sticky
                        top-0 z-[1000] backdrop-blur-[8px]
                        shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                         after:content-[''] after:absolute
                         after:top-0 after:right-0 after:w-[4px]
                         after:h-full after:bg-[#ee4c1f] max-md:py-[14px]
                         max-md:px-[20px] max-md:sticky">
             <div className="flex items-center">
                 <NavLink to="/" className="flex items-center">
                   <img src="logo.png" alt="BridgeNatix" className="h-[36px] w-auto max-md:h-[28px]"></img>
                 </NavLink>
             </div>

             <nav className={`flex items-center gap-8.5 -mr-0 max-md:mr-0 max-md:absolute max-md:top-full max-md:left-0 max-md:w-full
                max-md:bg-[#f3efed] max-md:shadow-[0_10px_20px_rgba(0,0,0,0.08)]
                max-md:pt-[10px] max-md:px-[20px] max-md:pb-[20px] max-md:z-[1000]
                max-md:flex-col max-md:items-stretch max-md:gap-0 
                 ${menuOpen ?"max-md:flex":"max-md:hidden"}` }>
                 <NavLink to="/" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                     `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                     max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                     max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                     after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                     after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                     after:origin-left 
                     ${
                      isActive
                       ? '!text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                       : '!text-[#1f1f24] after:scale-x-0'
                     }`
                 }
                 >Home</NavLink>
                 <NavLink to="/services" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left 
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >Services</NavLink>
                 <NavLink to="/about-team" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left 
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >About</NavLink>
                 <NavLink to="/whychooseus" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left 
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >Why Choose Us</NavLink>
                 <NavLink to="/careers" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left 
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >Careers</NavLink>
                 <NavLink to="/blog" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left 
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >Blog</NavLink>
                 <NavLink to="/Contact" onClick={()=>setMenuOpen(false)}
                 className={({isActive})=>
                 `relative w-max no-underline text-[14px] font-[530] pb-2 max-md:block max-md:w-full max-md:py-[14px]
                 max-md:border-b max-md:border-[rgba(0,0,0,0.06)] max-md:font-['Inter',sans-serif]
                 max-md:font-semibold max-md:box-border max-md:text-left last:max-md:border-b-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0  md:border-b-0
                 after:h-[2px] after:bg-[#ee4c1f] after:w-full after:rounded-[500px]
                 after:origin-left
                 ${
                   isActive 
                    ? 'text-[#ee4c1f] border-b-2 border-[#ee4c1f] after:scale-x-100 after:transition-transform after:duration-500 after:ease'
                    : 'text-[#1f1f24] after:scale-x-0'
                    }`
                 }
                 >Contact</NavLink>
             </nav>
            <button
                aria-label="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer z-[1001]"
            >
                <span className="w-6 h-[2.5px] bg-[#1f1f24] rounded-[2px]"></span>
                <span className="w-6 h-[2.5px] bg-[#1f1f24] rounded-[2px]"></span>
                <span className="w-6 h-[2.5px] bg-[#1f1f24] rounded-[2px]"></span>
            </button>
        </div>

    );
}
function Homepage(){
    const tickeritems = [
        {text: "Digital Marketing & Growth Strategy Services",path:"/services/marketingservices"},
        {text:"Customer Support Solutions",path:"/services/customersupport"},
        {text:"Cloud & DevOps Solutions",path:"/services/clouddevops"},
        {text:"AI & Data Solutions",path:"/services/aianddata"},
        {text:"Enterprise Software Development Services",path:"/services/enterprisesolutions"},
        {text:"CyberSecurity & Compliance",path:"/services/cybersecurity"},
        {text:"UI/UX Design & Product Strategy",path:"/services/uianduxdeisgns"},
        {text:"Mobile App Development",path:"/services/mobileappdevelopment"},
        {text:"QA & Testing Services",path:"/services/qaandtesting"}
    ];
    const combinedtickerdata = [...tickeritems, ...tickeritems];

    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[description,setdescription]=useState("");

    const [showPopup, setShowPopup] = useState(false);
    const [submitteddata,setsubmitteddata]=useState(null);
    const [isEditing, setIsEditing] = useState(false);

    function openEditForm() {
        setfirstname(submitteddata.clientFirstName);
        setlastname(submitteddata.clientLastName);
        setemail(submitteddata.clientEmail);
        setphone(submitteddata.clientPhone);
        setdescription(submitteddata.clientDescription);
        setIsEditing(true);
        setShowPopup(false);
    }

    function addclient(e){
        e.preventDefault();

        if (firstname === "" || lastname === "" || email === "" || phone === "") {
        console.log("Validation Failed: Empty required fields detected.");
        return;
        }

        const finalizedQuoteData = {
            clientFirstName: firstname,
            clientLastName: lastname,
            clientEmail: email,
            clientPhone: phone,
            clientDescription: description
        };

        fetch("https://6aa28227ccb3db9689a68f3c.mockapi.io/qoutes",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(finalizedQuoteData)
        })
            .then((res)=>
            {
                if(!res.ok)throw new Error("Submission Failed");
                return res.json();
            })
            .then((data)=>
            {
                console.log("Submitted Data",data);
                setsubmitteddata(data);
                setShowPopup(true);

                setfirstname("");
                setlastname("");
                setemail("");
                setphone("");
                setdescription("");
            })
            .catch((err)=>
            {
                console.log("Failed to Submit Data",err);
            });
    }

    function updateclient(e) {
        e.preventDefault();

        const updatedQuoteData = {
            clientFirstName: firstname,
            clientLastName: lastname,
            clientEmail: email,
            clientPhone: phone,
            clientDescription: description
        };
        fetch(`https://6aa28227ccb3db9689a68f3c.mockapi.io/qoutes/${submitteddata.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedQuoteData)
    })
        .then((res) => {
            if (!res.ok) throw new Error("Update failed");
            return res.json();
        })
        .then((data) => {
            console.log("Data Updated", data);
            setsubmitteddata(data);
            setShowPopup(true);
            setIsEditing(false);

            setfirstname("");
            setlastname("");
            setemail("");
            setphone("");
            setdescription("");
        })
        .catch((err) => {
            console.log("Failed to Update Data:", err);
        });
    }

    function deleteclient(){
        fetch(`https://6aa28227ccb3db9689a68f3c.mockapi.io/qoutes/${submitteddata.id}`,{
            method:"DELETE"
        })
            .then((res)=>{
                if(!res) throw new Error("Data Not Deleted:Failed!");
                console.log("Data Deleted",submitteddata.id);
                setShowPopup(false);
                setsubmitteddata(null);
            })
            .catch((err)=>{
                console.log("Failed to Delete Data",err);
            });
    }


    return(
        <div className="w-full overflow-visible max-md:max-w-full">
            <Header/>
            <main className="Home pt-17.5 px-15.5 pb-25 bg-[#fdfdfd]
            bg-[url('/network-bg.png')] bg-no-repeat bg-right bg-size-[100%] max-md:w-full
            max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:pt-[40px] max-md:pb-[60px] max-md:bg-cover">
                <div className="max-w-200 max-md:max-w-full">
                    <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                        <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                         Full-Service Digital Agency
                    </div>

                    <h1 className="font-['Archivo',sans-serif] text-[40px] font-extrabold tracking-[-1.2px]
                    mb-5 leading-none mb-5 leading-none max-md:text-[30px] max-md:tracking-[-0.6px]">
                        Digital Transformation<br/>
                        Partner for <span className="text-[#ee4c1f]">Growing Businesses</span>
                        </h1>
                    <p className="max-w-130 text-[17px] leading-[1.9] text-[#565b66] mb-10 max-md:max-w-full max-md:text-[15.5px]">
                        BridgeNatix builds, launches, and grows technology<br/>
                        products for businesses at every stage. We combine<br/>
                        software development, AI automation, data analytics, and<br/>
                        digital marketing into a single working partnership.
                    </p>

                    <div className="flex items-center gap-4.5 max-md:flex-wrap max-md:gap-3">
                        <NavLink to="/services" className="no-underline py-3.75 px-7.5 rounded-[30px] font-[550] text-[15px]
                        inline-flex items-center gap-3 cursor-pointer bg-transparent border-[1.5px] border-solid border-[#75757e]
                        hover:bg-[#050523] hover:text-white transition-[background,transform] duration-300 ease-in-out hover:scale-[1.05]
                        max-md:py-[13px] max-md:px-[22px] max-md:text-[14px]">
                            Our Services
                        </NavLink>
                        <NavLink to="/customersupport" className="no-underline py-3.75 px-7.5 rounded-[30px] font-[550] text-[15px]
                        inline-flex items-center gap-3 cursor-pointer border-none bg-[#ee4c1f] text-white after:content-['→']
                        after:w-6 after:h-6 after:rounded-[50%] after:inline-flex after:items-center after:justify-center
                        after:text-[14px] after:border-[1.5px] after:border-solid after:border-white hover:bg-[#050523]
                        hover:text-white transition:[background,transform] duration-300 ease-in-out hover:scale-[1.05]
                        max-md:py-[13px] max-md:px-[22px] max-md:text-[14px]">
                            Get Free Consultation
                        </NavLink>
                    </div>
                </div>
            </main>
            <div className="w-full overflow-hidden bg-[#ede9e9] py-[22px] px-0  rounded-full
            shadow-[inset_0_2px_8px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.04)] relative z-20 -mt-10 mb-15" >
                <div className="flex w-max animate-[scrollTicker_40s_linear_infinite] hover:[animation-play-state:paused]">
                    {
                        combinedtickerdata.map((item,index)=>(
                            <NavLink key={index} to={item.path} className="font-['Playfair_Display','Georgia',serif] text-[21px]
                            font-bold text-[#565b66] py-0 px-10 whitespace-nowrap no-underline inline-block transition-[color]
                            duration-200 ease-in-out hover:text-[#ee4c1f] max-md:text-[13px] max-md:px-[20px]">
                                {item.text}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <section className="About flex w-full py-[130px] px-[62px] justify-between items-center gap-[60px]
            bg-[#fbfbfb] rounded-[50px] max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:flex-col max-md:py-[40px] max-md:rounded-[30px] max-md:gap-[40px]">
                <div className="flex-1 max-w-[580px] max-md:w-full max-md:max-w-full">
                    <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                        <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                            About Us
                    </div>
                    <h1 className="font-['Archivo',sans-serif] text-[clamp(2.2rem,4.6vw,3.8rem)] font-[800]
                    tracking-[-0.04em] leading-[1.05] text-[#1f1f24] mb-[38px] max-md:text-[2rem] max-md:mb-[24px]">
                        BridgeNatix <br/> Build <span className="text-[#ee4c1f]">Future</span>
                    </h1>
                    <div className=" group flex items-center gap-[20px] cursor-pointer perspective-[1000px]">
                        <div className="w-12 h-12 bg-[#ffffff] rounded-[13px] flex items-center justify-center shrink-0 transform-3d
                         [transition:transform_0.5s_cubic-bezier(0.34,1.56,0.64,1),background_0.3s_ease,box-shadow_0.3s_ease]
                         group-hover:h-[50px] group-hover:w-[48px] group-hover:bg-[#ff5722]
                         group-hover:transform-[translateY(-6px)_scale(1.05)_rotateX(15deg)_rotateY(15deg)_rotate(12deg)]
                         group-hover:shadow-[0_12px_24px_rgba(255,87,34,0.45)]">
                            <AtomIcon className="text-[32px] font-[500] text-[#ec4b1f] transition-[color] duration-300 ease-in-out
                            group-hover:text-[#ffffff]"/>
                        </div>
                        <div className="py-0 px-[11px]">
                            <h3 className="text-xl font-bold text-[#1f1f24]">
                                Embedded Extension of Your Team
                            </h3>
                            <p className="max-w-[520px] text-[15.04px] leading-[1.75] text-[#565b66] mb-10 mt-[10px] tracking-[0.4px]">
                                We operate from Lahore, Pakistan, serving clients internationally<br/>
                                (with depth in the UK). We work as an embedded extension of your<br/>
                                operations — not an outsourced supplier who disappears after <br/>
                                delivery.
                            </p>
                        </div>
                    </div>
                    <div className="group flex items-center gap-5 cursor-pointer perspective-[1000px]">
                        <div className="w-12 h-12 bg-[#ffffff] rounded-[13px] flex items-center justify-center shrink-0 transform-3d
                         [transition:transform_0.5s_cubic-bezier(0.34,1.56,0.64,1),background_0.3s_ease,box-shadow_0.3s_ease]
                         group-hover:h-[50px] group-hover:w-[48px] group-hover:bg-[#ff5722]
                         group-hover:transform-[translateY(-6px)_scale(1.05)_rotateX(15deg)_rotateY(15deg)_rotate(12deg)]
                         group-hover:shadow-[0_12px_24px_rgba(255,87,34,0.45)]">
                            <Sun className="text-[32px] font-[500] text-[#ec4b1f] transition-[color] duration-300 ease-in-out
                            group-hover:text-[#ffffff]"/>
                        </div>
                        <div className="py-0 px-[11px]">
                            <h3 className="text-xl font-bold text-[#1f1f24]">
                                Outcome-Driven Model
                            </h3>
                            <p className="max-w-130 text-[15.04px] leading-[1.75] text-[#565b66] mb-10 mt-2.5 tracking-[0.4px]">
                                Our engagement model is designed around measurable business<br/>
                                outcomes: leads generated, systems shipped, and revenue<br/>
                                increased. Work with one team instead of four vendors.
                            </p>
                        </div>
                    </div>
                    <NavLink to ="/about-team" className="no-underline py-4.5 px-8 rounded-[30px] font-[550] text-[16px]
                    inline-flex items-center gap-3 cursor-pointer bg-[#ee4c1f] border-none text-white hover:bg-[#050523]
                        hover:text-white transition:[background,transform] duration-500 ease-in-out hover:scale-[1.05]
                        max-md:py-[14px] max-md:px-[24px] max-md:text-[14px]">
                        Learn More About Us  ➔
                    </NavLink>
                </div>
                <div className="flex-1 flex items-center pl-[10px] relative w-[50%] max-w-[520px] h-[500px] gap-[20px] justify-center
                max-md:flex-row max-md:h-auto max-md:pl-0 max-md:mt-[20px] max-md:w-full max-md:max-w-full">
                    <div className="group overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.06)] w-[240px] h-[390px]
                    rounded-[160px] mt-[110px] transition:[margin-top] duration-500 ease-in-out hover:mt-[99px]
                    max-md:w-[45%] max-md:max-w-[180px] max-md:h-[260px] max-md:mt-[50px] max-md:hover:mt-[50px]
                    max-md:hover:translate-y-[-12px]">
                        <img src="about-img1.jpg"
                             alt="laptop"
                             loading={"lazy"}
                             className="w-full h-full object-cover transition:transform duration-500 ease-in-out
                             group-hover:scale-[1.08]"
                        />
                    </div>
                    <div className="group overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.06)] w-[240px] h-[380px]
                    rounded-[160px] mb-[-5px] transition:[margin-top] duration-500 ease-in-out hover:mt-[-16px]
                    max-md:w-[45%] max-md:max-w-[180px] max-md:h-[260px] max-md:mt-0 max-md:hover:mt-0
                    max-md:hover:translate-y-[-12px]">
                        <img src="about-img2.jpg"
                             alt="team"
                             loading={"lazy"}
                             className="w-full h-full object-cover transition:transform duration-500 ease-in-out
                             group-hover:scale-[1.08]"
                        />
                    </div>
                    <div className="absolute font-['Archivo',serif] top-[-16px] right-[-18px] bg-[#ee4c1f] text-[#ffffff] py-[20px]
                    px-[30px] rounded-[30px_30px_30px_7px] text-center shadow-[0_15px_30px_rgba(71,34,24,0.4)] z-10
                    animate-[floatBadge_5s_ease-in-out_infinite] max-md:py-[14px] max-md:px-[20px] max-md:text-[16px]
                    max-md:top-[-15px] max-md:right-[-10px]">
                        <h2 className="text-[32px] font-[800]">21+</h2>
                        <span className="text-[12px]">Years of experience</span>
                    </div>
                </div>
            </section>
            <section className="Services w-full py-[130px] px-[62px] box-border rounded-[50px]
            flex flex-col items-start bg-[url('/tech-img3.jpg')] bg-no-repeat bg-right
            bg-size-[100%_100%] max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:py-[60px] max-md:rounded-[30px] max-md:bg-cover">
                <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                    <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                        What We Build
                </div>
                <h1 className="font-['Archivo',sans-serif] text-[clamp(2.2rem,4.6vw,3.8rem)] font-[800]
                    tracking-[-0.04em] leading-[1.05] text-[#1f1f24] mb-[38px]">
                    Services
                </h1>
                <div className="flex flex-wrap justify-center items-start gap-[40px] w-full box-border max-md:gap-[24px]">
                <div className="group h-[460px] w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(20px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(5px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] stroke-[1.2px] stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]">
                                   <path d="M3 21h18M3 21V10l5 3 5-8 3 3 5-4v17H3" strokeLinecap="round" strokeLinejoin="round"></path>
                                   <path d="M7 17.5v.01M12 15v.01M17 13.5v.01" strokeLinecap="round"></path>
                               </svg>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white ">
                            Digital Marketing & Growth Strategy Services
                        </h3>
                        <p className="service-description">
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white"
                                >
                                    SEO & Content Strategy
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white"
                                >
                                    PPC & Paid Media Campaigns
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white
                                "
                                >
                                    Email Marketing & CRM Automation
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white"
                                >
                                    Conversion Rate Optimisation
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/marketingservices"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>
                <div className="group w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(-100px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(-115px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <LucideMonitor size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white">
                            Enterprise Software Development Services
                        </h3>
                        <p className="service-description">
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Custom ERP & CRM Architecture
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    SaaS Platform Development
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Phased Discovery & Spec Mapping
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Legacy System Migration & Refactoring
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/enterprisesolutions"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>

                <div className="group h-[560px] w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(10px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(-5px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <NotebookText size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white">
                            Finance & Accounting Solutions and Services
                        </h3>
                        <p className="service-description">
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Bookkeeping & General Ledger Management
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Accounts Payable & Accounts Receivable
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Bank Reconciliation & Financial Reporting
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Budgeting, Forecasting & Compliance Support
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/financeandaccounting"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>
                <div className="group w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(-75px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(-90px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <AtomIcon size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white">
                            AI and Data Solutions Services
                        </h3>
                        <p className="service-description">
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Automated Document Processing
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Machine Learning Models in Production
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Data Warehousing & ETL Pipelines
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Business Intelligence Dashboards
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/aianddata"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>
                <div className="group w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(-160px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(-175px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <Headphones size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white">
                            Customer Support Solutions
                        </h3>
                        <p className="service-description">
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Omnichannel Ticketing Systems
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Ticket Routing & Escalation Logic
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Trained External Agent Teams
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    CSAT & Resolution Analytics
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/customersupport"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>
                <div className="group h-[435px] w-[calc(33.33%-27px)] min-w-[320px] max-w-[390px] bg-[#fff5f2] border
                border-solid border-brand border-t-[5px] border-t-brand-1 py-[40px] px-[30px]
                box-border rounded-[5px_30px_30px_30px] flex flex-col items-start [transform:translateY(10px)]
                [transition:transform_0.4s_ease,box-shadow_0.4s_ease,background-color_0.4s_ease] hover:bg-brand
                hover:shadow-[0_20px_40px_rgba(238,76,31,0.06)] hover:[transform:translateY(-5px)]
                max-md:w-full max-md:min-w-0 max-md:max-w-full max-md:h-auto max-md:[transform:none] max-md:hover:[transform:none]
                max-md:px-[24px] max-md:py-[30px]">
                    <div className="min-w-[56px] h-[56px] bg-[#fbe3d8] rounded-[14px] flex items-center overflow-visible mb-[28px]
                    group-hover:bg-[coral] group-hover:transition-bg duration-400 ease-in-out">
                        <span className="flex items-center justify-center w-full h-full">
                               <Cloud size={"26"} className="stroke-brand fill-none transition-[stroke]
                                duration-300 ease-in-out group-hover:stroke-[#ffffff] group-hover:[transition:stroke_0.4s_ease]"/>
                        </span>
                    </div>
                    <div className="font-archivo">
                        <h3 className="text-[22px] font-[700] leading-[1.3] text-[#1f1f24] mb-[24px]
                        group-hover:text-white">
                            Cloud & DevOps Solutions
                        </h3>
                        <p >
                            <ul className="list-none p-0 m-[0_0_40px_0]">
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    AWS & Azure Cloud Migration
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Automated CI/CD Pipelines
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    Infrastructure as Code (IaC)
                                </li>
                                <li className="text-[15px] text-muted leading-[1.5] mb-[12px] relative pl-[35px]
                                before:content-['.'] before:text-brand before:absolute before:left-0
                                before:font-extrabold before:text-[20px] before:top-[-8px] before:py-0
                                before:px-[15px] group-hover:before:text-white group-hover:text-white">
                                    24/7 Server Monitoring
                                </li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/clouddevops"
                             className="bg-[#1f1f24] text-white py-[12px] px-[26px] rounded-[30px]
                             text-[14px] font-archivo font-[500] inline-block transition-bg duration-200 ease-in-out
                             mt-auto group-hover:bg-white group-hover:text-[#ec4b1f] no-underline"
                    >
                        View All ➔
                    </NavLink>
                </div>
                </div>
                <NavLink to="customersupport" className="no-underline py-[20px] px-[49px] rounded-[50px] font-[550] text-[18px]
                inline-flex items-center gap-3 cursor-pointer bg-[#ee4c1f] border-none text-white hover:bg-[#050523]
                hover:text-white transition:[background,transform] duration-500 ease-in-out hover:scale-[1.05] ml-[40%]
                max-md:ml-0 max-md:w-full max-md:justify-center max-md:mt-5">
                    Get Consultation
                </NavLink>
            </section>
            <section className="Work max-w-full bg-[#f6e2d8] pt-[130px] px-[62px] box-border rounded-[50px] flex flex-wrap
            justify-between items-center gap-[40px] max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:pt-[60px] max-md:rounded-[30px] max-md:flex-col">
                <div className="flex-1 min-w-[350px] max-w-[580px] max-md:max-w-full max-md:min-w-0">
                    <div className="inline-flex items-center gap-2 bg-[#f9d2c1] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                        <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                        How We Work
                    </div>
                    <h1 className="font-['Archivo',sans-serif] text-[clamp(2.2rem,4.6vw,3.8rem)] font-[800]
                    tracking-[-0.04em] leading-[1.05] text-[#1f1f24] mb-[38px] mt-[-10px]">
                        Who We Work With
                    </h1>
                    <p className="max-w-130 text-[16px] leading-[1.9] text-[#565b66] mb-10 mt-[-18px]">
                        From early startups to established SMEs, we partner with
                        businesses looking to scale, automate, and dominate their
                        digital presence.
                    </p>
                    <NavLink href="#contact" className="no-underline py-[15px] px-[30px] rounded-[30px] mt-[-5px] mb-[50px] font-[550] text-[15px]
                    inline-flex items-center gap-3 cursor-pointer bg-[#ee4c1f] border-none text-white hover:bg-[#050523]
                    hover:text-white transition:[background,transform] duration-500 ease-in-out hover:scale-[1.05]">
                        Start a Conversation
                    </NavLink>
                    <div className="flex items-start gap-[20px] cursor-pointer perspective-[1000px] ">
                        <div className="min-w-[56px] h-[56px] bg-[#fbd4c3] rounded-[14px]
                         flex items-center justify-center overflow-visible mb-[28px]">
                                <LucideRectangleHorizontal size={"24"} className="stroke-[#ee4c1f]"/>
                        </div>
                        <div className="font-inter">
                        <h3 className="text-[19px] font-bold text-[#1f1f24] tracking-tight leading-snug">
                            Tailored Solutions for Every Stage
                        </h3>
                        <p className="max-w-[520px] text-[15px] leading-[1.3] text-[#565b66] mb-[12px] mt-[10px] tracking-[0.4px] ">
                            We build outcome-driven partnerships with shared timelines and accountability.
                            <ul className="mt-[20px] tracking-[-0.01px]" >
                                <li className="pl-[35px] text-[14.5px] tracking-[-0.01] leading-[1.5] mb-[8px] text-[#555a65]
                                before:content-['.'] before:text-[#ee4c1f] before:absolute before:font-extrabold before:text-[32px]
                                before:mt-[-23px] before:left-[90px]"><b style={{color:"#1f1f24"}}>Startups:</b> Moving fast from initial prototype to successful launch.</li>
                                <li className="pl-[35px] text-[14.5px] tracking-[-0.01] leading-[1.5] mb-[8px] text-[#555a65]
                                before:content-['.'] before:text-[#ee4c1f] before:absolute before:font-extrabold before:text-[32px]
                                before:mt-[-23px] before:left-[90px]"><b style={{color:"#1f1f24"}}>SMEs:</b> Replacing outgrown systems with custom software & marketing.</li>
                                <li className="pl-[35px] text-[14.5px] tracking-[-0.01] leading-[1.5] mb-[8px] text-[#555a65]
                                before:content-['.'] before:text-[#ee4c1f] before:absolute before:font-extrabold before:text-[32px]
                                before:mt-[-23px] before:left-[90px]"><b style={{color:"#1f1f24"}}>Established Brands:</b> Automating workflows without in-house tech bloat.</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-w-[320px] flex justify-center items-center relative max-md:max-w-full max-md:min-w-0">
                    <div className="group w-full h-auto max-w-[440px] aspect-square relative mt-[30px] overflow-visible z-[2]
                    shadow-[0_30px_60px_-15px_rgba(233,76,31,0.2),0_20px_40px_-20px_rgba(0,0,0,0.05)] rounded-[50%] before:content-['']
                    before:absolute before:top-[-14px] before:left-[-14px] before:right-[-14px] before:bottom-[-14px] before:rounded-[50%] before:border-2 before:border-dashed
                    before:border-[rgba(238,76,31,0.5)] before:pointer-events-none before:z-[1] before:animate-[workCircularOrbit_28s_linear_infinite]
                    hover:shadow-[0_35px_70px_-12px_rgba(238,76,31,0.18),0_25px_45px_-15px_rgba(0,0,0,0.11)] max-md:max-w-[280px] ">
                        <div className="w-full h-full rounded-full overflow-hidden relative z-[3] [transform:translateZ(0px)]">
                        <img src="team-work.jpg" alt="Team-work" loading={"lazy"} className="w-full h-full object-cover relative z-[4] rounded-full
                        will-change-transform transition-[transform] duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:[transform:scale(1.08)]"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1.5px] bg-[#ddc7be] mt-[10px] "></div>
                <div className="w-full max-w-[1200px] flex justify-around items-start m-[80px_auto_70px_auto] gap-[80px]
                max-md:flex-wrap max-md:justify-between max-md:gap-[30px_20px] max-md:m-[20px_auto_40px_auto]">
                    <div className="flex flex-col items-center text-center max-md:w-[45%]">
                        <h2 className="w-[180px] text-[50px] font-[800] font-archivo leading-[1.1] mb-[12px] inline-flex items-center justify-center max-md:text-[34px] max-md:w-full">
                            <CountUp start={19} end={48} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span ref={countUpRef} className="count-up-number"></span>
                                        <span className="text-[#f15221] ml-[2px]" >%</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="text-[15px] font-[500] text-[#565b66] m-0 whitespace-nowrap max-md:whitespace-normal max-md:text-[13.5px]">Faster Processing</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-md:w-[45%]">
                        <h2 className="w-[180px] text-[50px] font-[800] font-archivo leading-[1.1] mb-[12px] inline-flex items-center justify-center max-md:text-[34px] max-md:w-full">
                            <CountUp start={0} end={12} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span ref={countUpRef} className="count-up-number"></span>
                                        <span className="text-[#f15221] ml-[2px]">%</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="text-[15px] font-[500] text-[#565b66] m-0 whitespace-nowrap max-md:whitespace-normal max-md:text-[13.5px]">Operational Cost Drop</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-md:w-[45%]">
                        <h2 className="w-[180px] text-[50px] font-[800] font-archivo leading-[1.1] mb-[12px] inline-flex items-center justify-center max-md:text-[34px] max-md:w-full">
                            <CountUp start={0} end={6} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span className="count-up-symbol">$</span>
                                        <span ref={countUpRef} className="count-up-number" ></span>
                                        <span className="text-[#f15221] ml-[2px]">M</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="text-[15px] font-[500] text-[#565b66] m-0 whitespace-nowrap max-md:whitespace-normal max-md:text-[13.5px]">Yearly Savings</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-md:w-[45%]">
                        <h2 className="w-[180px] text-[50px] font-[800] font-archivo leading-[1.1] mb-[12px] inline-flex items-center justify-center max-md:text-[34px] max-md:w-full ">
                            {}
                            <CountUp start={70.00} end={99.99} duration={1.5} decimals={2} seperator=""
                                     enableScrollSpy ScrollSpyOnce suffix='</span><span class="text-[#f15221] ml-[2px]">%</span>'/>
                        </h2>
                        <p className="text-[15px] font-[500] text-[#565b66] m-0 whitespace-nowrap max-md:whitespace-normal max-md:text-[13.5px]">System Uptime</p>
                    </div>
                </div>
            </section>
            <section className="testimonial flex box-border rounded-[5%] flex-col items-center w-full py-[130px]
            px-[64px] mt-[-5px] bg-[url('/testimonial-img2.jpg')] bg-no-repeat bg-right max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:py-[60px] max-md:rounded-[30px] max-md:bg-cover">
                <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                    <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                    Our Clients
                </div>
                <h1 className="font-['Archivo',sans-serif] text-[clamp(2.2rem,4.6vw,3.8rem)] font-[800]
                    tracking-[-0.04em] leading-[1.05] text-[#1f1f24] mb-[38px]">
                    Testimonial
                </h1>
                <p className="font-inter max-w-[700px] text-center text-[15.5px] leading-[2.0] text-[#565b66] mb-[40px] mt-[-25px] tracking-[0.1px] ">
                    See how we helped a Fortune 500 financial services company modernize their payment<br/>
                    infrastructure and streamline operations.
                </p>
                <div className="flex justify-center items-start w-full m-[80px_auto_0_auto] gap-[30px]
                max-md:flex-col max-md:gap-[60px] max-md:mt-[60px]">
                    <div className="group flex-1 flex flex-col items-center box-border">
                        <div className="box-border rounded-[40px_40px_40px_5px] bg-[#ee4e1d] pl-[45px] pr-[40px] pb-[20px] relative mt-[-40px] text-left
                        origin-bottom-left transition-[transform,box-shadow] duration-[0.40s] ease-in-out will-change-transform
                        shadow-[0_15px_35px_-5px_rgba(238,78,29,0.35),0_30px_100px_5px_rgba(238,78,29,0.22)] group-hover:[transform:translateY(-6px)_rotate(-1deg)]
                        group-hover:shadow-[0_25px_45px_-5px_rgba(238,78,29,0.45),0_40px_120px_15px_rgba(238,78,29,0.20)]
                        max-md:pl-[30px] max-md:pr-[25px]">
                            <Quote className="fill-[#f6a78e] stroke-none rotate-180 mt-[30px]" size={"24"}/>
                            <p className="font-inter mt-[35px] text-white text-[15px] italic leading-[2.0] mbe-[2em]">
                                Bridgenatix transformed our payment
                                infrastructure with measurable precision
                                and execution. The results exceeded our
                                expectations and their team became a
                                true extension of our digital
                                transformation journey.
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[70px]
                            h-[70px] box-border overflow-hidden rounded-[25%] border-[5px]
                            border-[#efefed] border-solid shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            [transform:translateX(210%)_scale(1)] bg-[#f2f1ee] mt-[-26px] z-5
                            transition-[transform,box-shadow] duration-[0.40s] ease-in-out
                            will-change-transform ml-[-285px] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            group-hover:[transform:translateX(210%)_scale(1.1)]
                            max-md:[transform:translateX(0)_scale(1)] max-md:m-[-25px_auto_0_auto] max-md:ml-0
                            max-md:group-hover:[transform:translateX(0)_scale(1.1)]">
                            <img src="person-1.jpg" alt="Michael Chen" loading="lazy" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-[15px] mt-[10px]">
                            Michael Chen
                        </h3>
                        <p className="text-[13px] font-inter p-[6px] text-[#6f7078]">
                            Chief Operations Officer
                        </p>
                        <div className="text-brand text-[13px] tracking-[1.1px]">
                            ★★★★★
                        </div>
                    </div>
                    <div className="group flex-1 flex flex-col items-center box-border">
                        <div className="box-border rounded-[40px_40px_40px_5px] bg-[#ee4e1d] pl-[45px] pr-[40px] pb-[20px] relative mt-[-75px] text-left
                        origin-bottom-left transition-[transform,box-shadow] duration-[0.40s] ease-in-out will-change-transform
                        shadow-[0_15px_35px_-5px_rgba(238,78,29,0.35),0_30px_100px_5px_rgba(238,78,29,0.22)] group-hover:[transform:translateY(-6px)_rotate(-1deg)]
                        group-hover:shadow-[0_25px_45px_-5px_rgba(238,78,29,0.45),0_40px_120px_15px_rgba(238,78,29,0.20)]
                        max-md:pl-[30px] max-md:pr-[25px] max-md:mt-[-40px]">
                            <Quote className="fill-[#f6a78e] stroke-none rotate-180 mt-[30px]" size={"24"}/>
                            <p className="font-inter mt-[35px] text-white text-[15px] italic leading-[2.0] mbe-[2em]">
                                From discovery to delivery, everything
                                was transparent and on schedule. Our
                                cloud costs dropped while reliability went
                                up — the engineering quality speaks for
                                itself.
                            </p>
                        </div>
                        <div className=" flex justify-center items-center w-[70px]
                            h-[70px] box-border overflow-hidden rounded-[25%] border-[5px]
                            border-[#efefed] border-solid shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            [transform:translateX(210%)_scale(1)] bg-[#f2f1ee] mt-[-30px] z-5
                            transition-[transform,box-shadow] duration-[0.40s] ease-in-out
                            will-change-transform ml-[-290px] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            group-hover:[transform:translateX(210%)_scale(1.1)]
                            max-md:[transform:translateX(0)_scale(1)] max-md:m-[-25px_auto_0_auto] max-md:ml-0
                            max-md:group-hover:[transform:translateX(0)_scale(1.1)]">
                            <img src="person-2.jpg" alt="Sarah Mitchell" loading="lazy" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-[15px] mt-[10px]">
                            Sarah Mitchell
                        </h3>
                        <p className="text-[13px] font-inter p-[6px] text-[#6f7078]">
                            VP of Engineering
                        </p>
                        <div className="text-brand text-[13px] tracking-[1.1px]">
                            ★★★★★
                        </div>
                    </div>
                    <div className="group flex-1 flex flex-col items-center box-border">
                        <div className="box-border rounded-[40px_40px_40px_5px] bg-[#ee4e1d] pl-[45px] pr-[40px] pb-[20px] relative mt-[-40px] text-left
                        origin-bottom-left transition-[transform,box-shadow] duration-[0.40s] ease-in-out will-change-transform
                        shadow-[0_15px_35px_-5px_rgba(238,78,29,0.35),0_30px_100px_5px_rgba(238,78,29,0.22)] group-hover:[transform:translateY(-6px)_rotate(-1deg)]
                        group-hover:shadow-[0_25px_45px_-5px_rgba(238,78,29,0.45),0_40px_120px_15px_rgba(238,78,29,0.20)]
                        max-md:pl-[30px] max-md:pr-[25px]">
                            <Quote className="fill-[#f6a78e] stroke-none rotate-180 mt-[30px]" size={"24"}/>
                            <p className="font-inter mt-[35px] text-white text-[15px] italic leading-[2.0] mbe-[2em]">
                                They didn't just build software — they
                                helped us rethink our entire operating
                                model. The automation suite they
                                shipped now saves our teams hundreds
                                of hours monthly.
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[70px]
                            h-[70px] box-border overflow-hidden rounded-[25%] border-[5px]
                            border-[#efefed] border-solid shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            [transform:translateX(210%)_scale(1)] bg-[#f2f1ee] mt-[-26px] z-5
                            transition-[transform,box-shadow] duration-[0.40s] ease-in-out
                            will-change-transform ml-[-290px] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.20)]
                            group-hover:[transform:translateX(210%)_scale(1.1)]
                             max-md:[transform:translateX(0)_scale(1)] max-md:m-[-25px_auto_0_auto] max-md:ml-0
                            max-md:group-hover:[transform:translateX(0)_scale(1.1)]">
                            <img src="person-3.jpg" alt="David Osei" loading="lazy" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-[15px] mt-[10px]">
                            David Osei
                        </h3>
                        <p className="text-[13px] font-inter p-[6px] text-[#6f7078]">
                            Chief Technology Officer
                        </p>
                        <div className="text-brand text-[13px] tracking-[1.1px]">
                            ★★★★★
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full py-[130px] px-[64px] items-center
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
                        <NavLink to="/blog/modernizing-payments-at-enterprise-scale" className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
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
                        <NavLink to="/blog/generative-ai-in-regulated-industries" className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
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
                        <NavLink to="/blogs/cutting-cloud-spend-without-cutting-speed" className="no-underline p-[5px] text-[15px] text-[#121316] font-[600] mt-[-20px]">
                            Read Article ➔
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="qoute flex w-full px-16 pt-[130px] pb-[120px] box-border gap-[29px] bg-[linear-gradient(135deg,#f15221_5%,#f15221_70%,#ff6a3d_10%,#F4511E_50%,#d63c0e_80%)]
            max-md:flex-col max-md:px-5 max-md:py-[60px] max-md:pb-[60px] max-md:gap-10 max-md:w-full max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border">
                <div className="flex-[1.1] flex flex-col items-start justify-center">
                    <div className="inline-flex items-center gap-2 bg-[#f36a3f] text-[#fce8e2] font-[550]
                    text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-[#f59679]">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#fcfbfc] inline-block"></span>
                        Get Started
                    </div>
                    <h1 className="font-archivo text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold tracking-[-0.04em]
                    leading-[1.05] text-[#fcfdfc] mb-[38px] -mt-[10px] max-md:text-[2rem] max-md:mb-6">
                        Your Next Starts Right Here
                    </h1>
                    <p className="max-w-[520px] text-[16.5px] leading-[1.75] text-[#fcefeb] mb-10 -mt-5
                    tracking-[0.4px] pr-[100px] font-['Inter',sans-serif] max-md:pr-0">
                        Ready to accelerate your digital transformation?let's
                        discuss how we can help you achieve measurable
                        outcomes.
                    </p>
                    <div className="mt-5 ml-[5px] flex gap-4 px-[25px] py-4 bg-[#fbfcfc] w-[270px] h-20 box-border rounded-[20px]">
                        <div className="h-14 max-h-[45px] min-w-[45px] bg-[#161619] rounded-[14px] flex items-center justify-center overflow-visible mb-7">
                            <LucidePhone size={22} className="text-white fill-white [stroke-width:0px]"/>
                        </div>
                        <span>
                            <p className="text-[15px] leading-[1.9] text-[#565b66] -mt-[5px] mb-10 max-w-[520px]">
                                <span className="font-extrabold text-[#141619]">Service Available</span><br/>
                                Mon - Sat, 9:00 - 18:00
                            </p>
                        </span>
                    </div>
                    <div className="flex w-auto max-md:w-full mt-[50px] box-border border-[0.1px] border-[#f59679] rounded-[15px]
                    p-[15px] bg-[#f2663b] text-[15px] text-white gap-3 items-center">
                        <span >
                            <MapPinIcon size={18}/>
                        </span>
                             Main LDA Avenue 1, Lahore — visit us or drop a line anytime.
                    </div>
                </div>
                <div className="flex-[0.85] bg-[#111215] px-10 flex flex-col justify-center box-border rounded-[25px] h-auto min-h-[550px] shadow-[0_12px_24px_rgba(0,0,0,0.40)]
                 max-md:px-5 max-md:py-[30px] max-md:min-h-0 max-md:w-full">
                    <form className="flex flex-col gap-5 p-[5px] items-center" onSubmit={isEditing ? updateclient : addclient}>
                        <h2 className="text-[28px] text-white text-center">Request a Qoute</h2>
                        <div className="flex gap-[5px] h-[60px] w-full box-border max-md:flex-col max-md:h-auto max-md:gap-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e)=>setfirstname(e.target.value)}
                                className="h-full w-full box-border rounded-[10px] border-[0.1px]
                                border-[#050523] p-5 text-[15px] bg-white max-md:h-[55px]"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e)=>setlastname(e.target.value)}
                                className="h-full w-full box-border rounded-[10px] border-[0.1px]
                                border-[#050523] p-5 text-[15px] bg-white max-md:h-[55px]"
                                required
                            />
                        </div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                                className="w-full h-[60px] box-border rounded-[10px] border-[0.1px] border-[#050523] bg-white
                                p-5 text-[15px]"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone no."
                                value={phone}
                                onChange={(e)=>setphone(e.target.value)}
                                className="w-full h-[60px] box-border rounded-[10px] border-[0.1px] bg-white
                                border-[#050523] p-5 text-[15px]"
                                required
                            />
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={(e)=>setdescription(e.target.value)}
                                className="w-full h-[120px] box-border rounded-[15px] p-5 bg-white
                                text-base font-['Archivo',sans-serif]"
                                rows="4"
                            />
                            <button type={"submit"} className="inline-flex items-center justify-center gap-3 w-[280px] max-md:w-full rounded-[30px] font-[550] text-[15px]
                            no-underline cursor-pointer bg-[#ee4c1f] border-none text-white p-3 hover:bg-[#050523] hover:scale-105 transition-[background-color,transform]
                            duration-300 ease-in-out after:content-['→'] after:w-6 after:h-6 after:border-[1.5px] after:border-white after:rounded-full after:inline-flex
                            after:items-center after:justify-center after:text-sm">
                                SEND US A MESSAGE
                            </button>
                    </form>
                </div>
                 {showPopup && (
                  <div className="fixed inset-0 w-screen h-screen bg-[rgba(17,18,21,0.7)] backdrop-blur-[8px] flex justify-center items-center z-[9999]">
                      <div className="bg-[#1c1d22] px-[45px] py-10 max-md:px-6 max-md:py-[30px] rounded-[28px] max-w-[400px] w-[90%] flex flex-col items-center text-center shadow-[0_30px_70px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]
                      animate-[popupScaleEntrance_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
                          <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-5 left-5 w-8 h-8 rounded-full bg-transparent border border-[rgba(255,255,255,0.2)]
                                flex items-center justify-center text-white cursor-pointer hover:bg-[rgba(255,255,255,0.1)]
                                transition-colors duration-200"
                                aria-label="Close"
                          >
                                ←
                            </button>
                          <div className="w-[54px] h-[54px] bg-[#ee4e1d] text-white text-2xl font-bold rounded-full flex justify-center items-center mb-5 shadow-[0_8px_24px_rgba(238,78,29,0.4)]">✓</div>
                          <h3 className="font-archivo text-[26px] font-extrabold text-white !mb-[10px] !mt-0 !mx-0">Message Sent!</h3>
                          <p className="font-['Inter',sans-serif] text-[14.5px] leading-[1.6] text-[#a2a4ab] !mb-6 !mt-0 !mx-0">
                              Thank you.
                          </p>
                          <div className="flex flex-col w-full gap-[10px]">
                              <button className="bg-transparent border-2 border-[#ee4e1d] text-white px-8 py-3 rounded-[24px] font-['Archivo',sans-serif] text-[13.5px] font-bold tracking-[0.5px]
                              cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#ee4e1d]" onClick={deleteclient}>
                                  Delete Request
                              </button>
                              <button className="bg-transparent border-2 border-brand text-white px-8 py-3 rounded-[24px] font-archivo text-[13.5px] font-bold tracking-[0.5px]
                              ciursor-pointre transition-colors duration-300 ease-in-out hover:bg-brand " onClick={openEditForm}>
                                  Update Request
                              </button>
                          </div>
                      </div>
                  </div>
                 )}
            </section>
            <div className="w-full h-[150px]"></div>
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
function App()
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about-team" element={<Team/>}/>
            </Routes>
        </div>
    );
}

export default App;
export {Header};