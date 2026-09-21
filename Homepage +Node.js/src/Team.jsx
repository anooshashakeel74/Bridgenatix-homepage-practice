import {useState,useEffect} from "react";
import {Header} from './App';

function Team(){
    const [team,setteam]=useState([]);
    const [loading,setloading] =useState(true);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=4&nat=us,gb")
            .then((res)=>{
                if (!res.ok) throw new Error("Request failed");
                return res.json();
            })
            .then((data)=>{
                setteam(data.results);
                setloading(false);
            })
            .catch((err)=>{
                console.error("Failed",err);
                setloading(false);
                }
            );
    },[]);

    return(
        <div>
            <Header/>
            <section className="Team Home pt-17.5 px-15.5 pb-25 bg-[#fdfdfd]
            flex flex-col justify-center items-center bg-[url('/network-bg.png')] bg-no-repeat bg-right bg-size-[100%] max-md:w-full
            max-md:max-w-full max-md:pl-[20px] max-md:pr-[20px] max-md:box-border
            max-md:pt-[40px] max-md:pb-[60px] max-md:bg-cover">
                <div className="inline-flex items-center gap-2 bg-[#fbe3de] text-[#ee4c1f]
                    font-[550] text-[14.5px] px-5 py-2.5 rounded-[30px] mb-7 border-[0.1px] border-solid
                     border-[rgba(238,76,31,0.2)]">
                    <span className="w-1.75 h-1.75 rounded-[50%] bg-[#ee4c1f] inline-flex"></span>
                     Our People
                </div>
                <h1 className="font-['Archivo',sans-serif] text-[40px] font-extrabold tracking-[-1.2px]
                    mb-5 leading-none mb-5 leading-none max-md:text-[30px] max-md:tracking-[-0.6px]">
                     Meet The <span className="text-[#ee4c1f]">Team</span>
                </h1>
                {loading ? (
                    <p className="text-[17px] text-[#565b66] max-md:text-[15.5px]">Loading...</p>
                ):(
                    <div className="flex flex-wrap gap-[20px] max-md:flex-col max-md:px-[20px]">
                        {team.map((member)=>(
                            <div key={member.login.uuid} className="flex flex-col items-center w-[220px]  ">
                                <div className="w-50 h-50 rounded-[500px] overflow-hidden mt-20px ">
                                    <img
                                        src={member.picture.large}
                                        alt={`${member.name.first} ${member.name.last}`}
                                        loading="/lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                    <h1 className="text-[16px] font-bold">
                                        {member.name.first}{member.name.last}
                                    </h1>
                                    <p className="font-archivo text-ink">
                                        {member.login.username}
                                    </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
export default Team;
