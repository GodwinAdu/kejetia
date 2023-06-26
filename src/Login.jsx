import { useState } from "react"
import video from '../src/assets/video.mp4'
import { client } from "./libs/client"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [isLoading, setIsLoading ]= useState(false)
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            if(!email || !password){
                toast.error("please enter valid credentials")
                return 
            };
          const load = toast.loading('logging in...');
          const data = await client.fetch(
            `*[_type == "user" && email == "${email}" && password == "${password}"]{email, password}`
          );
          toast.dismiss(load)
          if (data && data.length > 0) {
            const user = data[0];
      
            if (user.email === email && user.password === password) {
             
                navigate('/home', { replace: true });
                toast.success(`You've login successfully`)
            }
          } else {
            toast.error('User not found')
            console.log('User not found');
          }
        } catch (error) {
            toast.error('There was an error',error)
          console.error('Error retrieving user data:', error);
        }
      
        setEmail('');
        setPassword('');
      };
     
  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
            <video
                src={video} 
                type="video/mp4"
                loop
                muted
                controls={false}
                autoPlay
                className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-center top-0 left-0 right-0 bottom-0 bg-blackOverlay">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className=" sm:w-96 xs:w-80 p-6  m-auto rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="lg:text-3xl font-semibold text-center text-purple-700 uppercase sm:text-xl">
                   Login Here Please
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-white"
                        >
                            Email
                        </label>
                        <input
                            value = { email}
                            onChange= {(e) => setEmail(e.target.value)  }
                            type="email"
                            placeholder="Enter provided Email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {console.log(email)}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-white"
                        >
                            Password
                        </label>
                        <input
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter provided password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button 
                            onClick={handleSubmit}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
        

            </div>
        </div>
    </div>
  )
}

export default Login