import { useState, useEffect } from "react";
import { Header } from "./App";
import { Trash2, LogOut } from "lucide-react";
import { InteractiveTechBackground } from './Techbg';

const ADMIN_USER = "admin";
const ADMIN_PASS = "bridgenatix123";

function Admin() {
    const [loggedIn, setloggedIn] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loginerror, setloginerror] = useState("");

    const [qoutes, setqoutes] = useState([]);
    const [loading, setloading] = useState(true);

    const [register, setregister] = useState([]);
    const [rloading, setrloading] = useState(true);

    const [token,settoken] = useState("");

    function handlelogin(e) {
        e.preventDefault();
        fetch(`http://localhost:5000/api/auth/login`,{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username,password})
        })
            .then((res)=>{
                if(!res.ok) throw new Error("Invalid Credentials");
                return res.json();
            })
            .then((data)=>{
                settoken(data.token);
                setloggedIn(true);
                setloginerror("");
            })
            .catch((err)=>{
                setloginerror("Enter Correct Username and Password");
            });
    }
    function fetchqoutes() {
        setloading(true);
        fetch(`http://localhost:5000/api/quotes`,
            {
                headers :{Authorization:`Bearer ${token}`}
            })
            .then((res) => res.json())
            .then((data) => {
                setqoutes(data.reverse());
                setloading(false);
            })
            .catch((err) => {
                console.log("Failed to Fetch Qoutes", err);
                setloading(false);
            });
    }

    function deleteqoute(id) {
        fetch(`http://localhost:5000/api/quotes/${id}`, {
            method: "DELETE",
            headers:{Authorization:`Bearer ${token}`}
        })
            .then(() => setqoutes((prev) => prev.filter((q) => q.id !== id)))
            .catch((err) => console.log("Failed to Delete Data", err));
    }

    function fetchregister() {
        setrloading(true);
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then((data) => {
                setregister(data.reverse());
                setrloading(false);
            })
            .catch((err) => {
                console.log("Failed to Fetch Data", err);
                setrloading(false);
            });
    }

    function deleteregister(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then(() => setregister((prev) => prev.filter((r) => r.id !== id)))
            .catch((err) => console.log("Failed to Delete User", err));
    }

    useEffect(() => {
        if (loggedIn) {
            fetchqoutes();
            fetchregister();
        }
    }, [loggedIn]);

    if (!loggedIn) {
        return (
            <div className="flex w-full min-h-screen relative text-slate-50 items-center justify-center">
                <InteractiveTechBackground />
                <form onSubmit={handlelogin} className="group flex flex-col items-center justify-center max-w-[400px] max-h[300px]
                bg-slate-900/10 backdrop-blur-md border border-slate-800/85 p-8 rounded-2xl shadow-2xl box-border mx-4 gap-3">
                    <h1 className="font-bold font-archivo text-[30px] text-whitegray mb-[5px] group-hover:text-brand">
                        ADMIN LOGIN
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter UserName"
                        value={username}
                        required
                        onChange={(e) => setusername(e.target.value)}
                        className="w-[300px] bg-whitegray p-[20px] text-ink text-[14px] rounded-[10px] h-[40px]"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        required
                        onChange={(e) => setpassword(e.target.value)}
                        className="w-[300px] bg-whitegray p-[20px] text-ink text-[14px] rounded-[10px] h-[40px]"
                    />
                    {loginerror && <p className="text-[#ff5c5c] text-[13px] -mt-2">{loginerror}</p>}
                    <button type="submit" className=" w-[100px] h-[40px] bg-brand p-[10px] rounded-[10px] text-center
                    font-medium font-archivo text-[14px] mt-[20px] hover:bg-orange-700/90 hover:backdrop-blur-md">
                        LOGIN ➔
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#fdfdfd]">
            <Header />
            <div className="px-[62px] py-[60px] max-md:px-5">
               <div className="flex items-center justify-between mb-[38px] pr-2">
                   <h1 className="fonr-archivo font-bold text-[50px] tracking-tight">
                       Qoute Requests
                   </h1>
                   <button onClick={()=>setloggedIn(false)} className="flex py-3 px-6 gap-[5px] bg-[#1f1f24] text-white
                    rounded-[10px] hover:bg-[#ee4c1f] transition-colors duration-300 ease-in-out">
                       <LogOut  size={20}/>Log Out
                   </button>
               </div>
                {loading?(
                    <p className="text-muted text-center">loading...</p>
                ):qoutes.length === 0 ?(
                    <p className="text-muted text-center">No Qoute Requests Yet</p>
                ):(
                    <div className="w-full overflow-x-auto rounded-[20px] border border-[rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                            <tr className="bg-[#1f1f24] text-white text-left">
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Name</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Email</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Phone</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Description</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {qoutes.map((q,i)=>(
                                <tr key={q.id}
                                className={`${i % 2 === 0 ? "bg-white":"bg-whitegray"} border-t border-[rgba(0,0,0,0.05)]`}>
                                    <td className="p-4 text-[14px] text-[#1f1f24] font-[550]">
                                        {q.clientFirstName} {q.clientLastName}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#1f1f24]">
                                        {q.clientEmail}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#1f1f24]">
                                        {q.clientPhone}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#565b66] max-w-[300px]">
                                        {q.clientDescription}
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => deleteqoute(q.id)}
                                            className="text-[#ee4c1f] hover:text-[#c53e18] transition-colors"
                                            aria-label="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className="px-[62px] py-[60px] max-md:px-5">
               <div className="flex items-center justify-between mb-[38px] pr-2">
                   <h1 className="fonr-archivo font-bold text-[50px] tracking-tight">
                       Registered Users
                   </h1>
               </div>
                {loading?(
                    <p className="text-muted text-center">loading...</p>
                ):register.length === 0 ?(
                    <p className="text-muted text-center">No Registered Users Yet</p>
                ):(
                    <div className="w-full overflow-x-auto rounded-[20px] border border-[rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                            <tr className="bg-[#1f1f24] text-white text-left">
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Name</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">UserName</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Email</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]">Company</th>
                                    <th className="p-4 text-[13px] tracking-[0.5px] font-[600]"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {register.map((u,i)=>(
                                <tr key={u.id}
                                className={`${i % 2 === 0 ? "bg-white":"bg-whitegray"} border-t border-[rgba(0,0,0,0.05)]`}>
                                    <td className="p-4 text-[14px] text-[#1f1f24] font-[550]">
                                        {u.name}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#1f1f24]">
                                        {u.username}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#1f1f24]">
                                        {u.email}
                                    </td>
                                    <td className="p-4 text-[14px] text-[#565b66] max-w-[300px]">
                                        {u.company?.name}
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => deleteqoute(q.id)}
                                            className="text-[#ee4c1f] hover:text-[#c53e18] transition-colors"
                                            aria-label="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;