// 'use client'
// import React, { useState } from 'react'
// import Login from '../Login';
// import Register from '../Register';
// import Link from 'next/link';

// type Props = {} & React.HTMLAttributes<HTMLElement>;

// const Nav = ({ className, children, ...props }: Props) => {
//   const [login, setLogin] = useState(true)
//   return (
//     <div>
//       <nav className='bg-red-300'>
//         <ul className='flex justify-end space-x-14 '>
//           <li className='flex text-2xl my-5'><Link href="/">Home</Link></li>
//           <li className='flex text-2xl my-5'><Link href="/profile">Login/Signup</Link></li>
//           <li className='flex text-2xl my-5'><Link href="/">Profile</Link></li>

//           {/* <button onClick={()=>setLogin(!login)}>{
//             login ? <li className='flex text-2xl my-5'><a href="/">Signup</a></li>:
//             <li className='flex text-2xl my-5'><Link href="/">Login</Link></li> 
//           }
//           </button> */}
          
//         {/* {
//             login? <Login/>:<Register/>
//         } */}
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Nav


'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

const Nav = (props: Props) => {
  const [details, setDetails]= useState();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(()=>{
    let data = localStorage.getItem("securityUser");
    if(!data && pathName=="/profile"){
      router.push("/profile");
    }else if(data && pathName=="/profile"){
      router.push("/profile/rgbs");
    }
    else{
      setDetails(JSON.parse(data))
    }
  },[])

  const logout=()=>{
    localStorage.removeItem("securityUser");
    router.push("/profile");
  }
  return (
    <>
    <div>
      <nav className='bg-blue-500 px-12'>
        <ul className='flex justify-end space-x-14'>
          <li className='flex text-2xl my-5 font-bold text-white'><Link href="/">Home</Link></li>
          {
            details && details.username?
            <>
            <li><button className='flex text-2xl my-5 font-bold text-white' onClick={logout}>Logout</button></li>
            {/* <li className='flex text-2xl my-5'><Link href="/">Profile</Link></li> */}
            </>
            :<li className='flex text-2xl my-5 font-bold text-white'><Link href="/profile">Login/Signup</Link></li>
          }
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Nav