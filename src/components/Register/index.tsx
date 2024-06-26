
// export default function Register() {
//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center ">
//                 <div className="mb-8">
//                     <label className="flex font-bold text-xl">Username: </label>
//                     <input
//                         type="text"
//                         // value={email}
//                         className="flex border-2 w-96 p-1"
//                         placeholder="Enter Username"
//                     />
//                 </div>
//                 <div className="mb-8">
//                     <label className="flex font-bold text-xl">Email: </label>
//                     <input
//                         type="email"
//                         // value={email}
//                         className="flex border-2 w-96 p-1"
//                         placeholder="Enter Email"
//                     />
//                 </div>
//                 <div className="mb-8">
//                     <label className="flex font-bold text-xl">Password: </label>
//                     <input
//                         type="password"
//                         className="flex border-2 w-96 p-1"
//                         placeholder="Enter Password"
//                     />
//                 </div>
//                 <div className="mb-8">
//                     <label className="flex font-bold text-xl">Confirm Password: </label>
//                     <input
//                         type="password"
//                         className="flex border-2 w-96 p-1"
//                         placeholder="Enter Confirm Password"
//                     />
//                 </div>
//                 <div className="mb-8">
//                     <label className="flex font-bold text-xl">Phone Number: </label>
//                     <input
//                         type="number"
//                         // value={email}
//                         className="flex border-2 w-96 p-1"
//                         placeholder="Enter Phone Number"
//                     />
//                 </div>
//                 <div className="">
//                     {/* <Create_Account text={'Sign in'} /> */}
//                     <button className="p-1 w-96 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " >
//                         <div className="inline-block">Sign up</div>
//                     </ button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

const Register = (props: Props) => {
  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [c_password, setC_password]=useState('');
  const [phone, setPhone]=useState('');
  const [city, setCity]=useState('');
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError]=useState(false);

  const handleSignup=async()=>{
    if(password!==c_password){
      setPasswordError(true)
      return false
    }
    else{
      setPasswordError(false)
    }

    if(!username || !email || !password || !c_password || !phone){
      setError(true)
      return false
    }
    else{
      setError(false)
    }
  
    console.log(username, email, password, c_password, phone);
    let response = await fetch('http://localhost:3000/api/security',{
      method: "POST",
      body: JSON.stringify({username, email, password, phone})
    })
    response = await response.json();
    console.log(response);
    if(response.success){
      console.log(response);
      const {result} = response
      delete result.password;
      localStorage.setItem("securityUser",JSON.stringify(result));
      router.push("/profile/rgbs");
      alert("security Registered Successfully")
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-24">
        <div className="mb-8">
          <label className="flex font-bold text-xl">Username: </label>
          <input
            type="text"
            className="flex border-2 w-96 p-1"
            placeholder="Enter Username"
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
          />
          {
            error && !username && <div className='text-red-500'>Please Enter valid Username</div>
          }
        </div>
        <div className="mb-8">
          <label className="flex font-bold text-xl">Email: </label>
          <input
            type="email"
            // value={email}
            className="flex border-2 w-96 p-1"
            placeholder="Enter Email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />
          {
            error && !email && <div className='text-red-500'>Please Enter valid email</div>
          }
        </div>
        <div className="mb-8">
          <label className="flex font-bold text-xl">Password: </label>
          <input
            type="password"
            className="flex border-2 w-96 p-1"
            placeholder="Enter Password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
          {
            passwordError && <div className='text-red-500'>Password and Confirm Password not matched</div>
          }
          {
            error && !password && <div className='text-red-500'>Please Enter valid Password</div>
          }
        </div>
        <div className="mb-8">
          <label className="flex font-bold text-xl">Confirm Password: </label>
          <input
            type="password"
            className="flex border-2 w-96 p-1"
            placeholder="Enter Confirm Password"
            value={c_password}
            onChange={(event)=>setC_password(event.target.value)}
          />
          {
            passwordError && <div className='text-red-500'>Password and Confirm Password not matched</div>
          }
          {
            error && !c_password && <div className='text-red-500'>Please Enter valid Confirm Password</div>
          }
        </div>
        <div className="mb-8">
          <label className="flex font-bold text-xl">Phone Number: </label>
          <input
            type="number"
            // value={email}
            className="flex border-2 w-96 p-1"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(event)=>setPhone(event.target.value)}
          />
          {
            error && !phone && <div className='text-red-500'>Please Enter valid Phone number</div>
          }
        </div>
        
        <div className="">
          {/* <Create_Account text={'Sign in'} /> */}
          <button className="p-1 w-96 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " onClick={handleSignup} >
            <div className="inline-block">Sign up</div>
          </ button>
        </div>
      </div>
    </div>
  )
}

export default Register