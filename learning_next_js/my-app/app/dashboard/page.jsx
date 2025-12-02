"use client"
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const router = useRouter();

    async function onClickHandler(e){
        e.preventDefault();

        let res =  await fetch('/api/logout',{
            method:"post",
        })

        if(res.ok){
            router.push("/login");
        }else{
            alert("logout  not successful!")
        }
    }
    return (<div>
        <h1>This is the Dashboard</h1>
        <button onClick={onClickHandler}>Logout</button>
    </div>)
}