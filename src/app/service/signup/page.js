     "use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
const IntialSIgnupData ={
    username:'',
    email:"",
    password:''
  }
export default function SignUpPage() {
  const router = useRouter();
  const [signUpData ,seetSignUpData] = useState(IntialSIgnupData)
  const [loading ,setLoading] = useState(false)
  const [error, setError] = useState("");
 

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( signUpData ),
    });

    if (res.ok) {
      setLoading(false)
      router.push("/service/login");
      alert("signup successful")

    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  };
 console.log(signUpData)
  return (
    <div className="bg-[#fefae0] text-[rgb(107,15,26)] ">
      <div className=" max-w-screen-2xl  px-6 md:px-10  py-10 grid place-items-center  ">

     
    
      <form onSubmit={handleSubmit} className="  w-full max-w-96  px-5 py-10 grid grid-cols-1 gap-3  shadow-md shadow-[#4f383a]">
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
      <div className="flex flex-col space-y-1.5">
        <label>
          username
        </label>
        <input type="text" placeholder="Username" value={signUpData.username}
          onChange={(e) => seetSignUpData({...signUpData , username:e.target.value})} className=" bg-white p-2  border focus:outline-amber-950" />

      </div>
        <div className="flex flex-col space-y-1.5">
        <label>
          email
        </label>
        <input type="email" placeholder="Email" value={signUpData.email}
          onChange={(e) => seetSignUpData({...signUpData , email:e.target.value})} className=" bg-white p-2 border focus:outline-amber-950" />

        </div>
        <div className="flex flex-col space-y-1.5">
          <label>
            Password
          </label>
          <input type="password" placeholder="Password" value={signUpData.password}
          onChange={(e) => seetSignUpData({...signUpData , password:e.target.value})} className=" bg-white  p-2 border focus:outline-amber-950" />

        </div>
        
        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="bg-black text-white p-2 max-w-2xl">{loading ? 'Signing up...' : 'Sign Up'}</button>
        <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a
                href="/service/login"
                className="text-blue-500 hover:underline"
              >
                SignIn
              </a>
            </p>
      </form>
      
      </div>
    </div>
  );
}
