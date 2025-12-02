"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const [formValue, setFormValue] = useState({email:'', password:''});
    const router = useRouter();

    const validate=()=>{
        let err={};
        if(!formValue.email){
            err.email = "Value for email is required";
        }
        if(!formValue.password){
            err.password = "Value for password is required";
        }
        else if(formValue.password.length<6){
                err.password = "Password needs to be with min 6 characters"
            }
        
            return err;
    }

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
         
        let err = validate();
        if(Object.keys(err).length>0){
            return;
        }

        const res = await fetch('/api/login',{
            method:'POST',
            body: JSON.stringify({email:formValue.email, password: formValue.password}),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(res.ok){
            router.push("/dashboard");
        }else{
            alert("login failed");
        }
    }

    return <div>
        <h1>
            Login Page
        </h1>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email: </label>
            <input type="email"  value={formValue.email} onChange={(e)=>setFormValue({...formValue, "email":e.target.value})} />

            <label htmlFor="password">Password:</label>
            <input type="password" value={formValue.password} onChange={(e)=>setFormValue({...formValue, "password":e.target.value})}/>

            <button type="submit" >Submit</button>
        </form>
    </div>
}