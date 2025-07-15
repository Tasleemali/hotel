"use client";

import { signIn } from "next-auth/react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobaleContext } from "@/context";

export default function SignInPage() {
  const {setIsAuth} = useContext(GlobaleContext)
  const router = useRouter();
  const [loading ,setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      setIsAuth(true)
      setLoading(false)
      router.push("/"); // redirect after login

      alert("login successful")
    } else {
      setError("Invalid credentials");
      setLoading(false)
    }
  };

  return (
    <div className="bg-[#fefae0] text-[rgb(107,15,26)] ">
      <div className="max-w-screen-2xl  px-6 md:px-10  py-10 grid place-items-center ">

   
     
      <form onSubmit={handleSubmit} className=" w-full max-w-96  px-5 py-10 grid grid-cols-1 gap-3  shadow-md shadow-[#4f383a] ">
      <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
      <div className="flex flex-col space-y-1.5">
        <label>Email</label>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className=" bg-white p-2  border focus:outline-amber-950" />
      </div>
        
       <div className="flex flex-col space-y-1.5">
        <label>Email</label>
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className=" bg-white p-2  border focus:outline-amber-950" />

      </div>
        
        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="bg-black text-white p-2">{loading?"Signing in...":"signIn"}</button>

        <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a
                href="/service/signup"
                className="text-blue-500 hover:underline"
              >
                SignUp
              </a>
            </p>

            
      <hr className="my-6" />

<button onClick={() => signIn("google")} className="w-full bg-blue-500 text-white p-2 mb-2">
  Sign in with Google
</button>

<button onClick={() => signIn("github")} className="w-full bg-gray-800 text-white p-2">
  Sign in with GitHub
</button>
      </form>

      </div>
    </div>
  );
}