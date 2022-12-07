import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {useSignup} from '../hooks/useSignup'

const Signup = () => {
    const navigate = useNavigate();
    const { signup, error } = useSignup();
    // // signUp
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [alert, setAlert] = useState(null);
    

  const handleSignUp = async(e) => {
    e.preventDefault();
    
    if(phone === "" || name === "" || password === ""){
        setAlert('Fill all input field')
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }else if( password !== cpassword ) {
        setAlert("password and confirm password do not match")
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }else {
      const user = {name, phone, password, email}
      await signup(user)
      await setAlert(error)
      setTimeout(() => {
          setAlert(null)
        }, 2000);
    }
  };
  return (
    <section className='md:h-screen  w-full bg-gray-200 py-10'>
        <div className='w-full flex place-items-center p-5 md:p-10'>
            <form onSubmit={handleSignUp} className="w-full md:max-w-[450px] mx-auto mt-16 shadow-lg bg-gray-100 rounded-md flex flex-col p-4">
                <h1 className="text-center text-2xl md:text-4xl font-bold py-3">Create Account</h1>
                <div className="my-2">
                     <label htmlFor="name" className='text-xl font-bold'>Name:</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        value={name}
                        placeholder="Adekunle Bala Chukwueze"
                        id="name"
                        name="name"
                        autoComplete="text"
                    />
                </div>
                <div className="my-2">
                     <label htmlFor="phone" className='text-xl font-bold'>Phone Number:</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="phone"
                        id="phone"
                        name="phone"
                        placeholder="123 456 7890"
                        autoComplete="phone"
                    />
                </div>
                <div className="my-2">
                     <label htmlFor="email" className='text-xl font-bold'>Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="abcd@gmail.com"
                        autoComplete="email"
                    />
                </div>
                <div className="my-2">
                     <label htmlFor="password" className='text-xl font-bold'>Password:</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                        placeholder="Uni9ue&$tr0ng"
                        id="password"
                        name="password"
                    />
                </div>
                <div className="my-2">
                     <label htmlFor="cpswd" className='text-xl font-bold'>Confirm Password:</label>
                    <input
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                        className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                        name="cpswd"
                        id="cpswd"
                        placeholder="Uni9ue&$tr0ng"
                    />
                </div>
                <div className="relative mb-2">
                    <p className={`${alert ? `top-0` : '-top-5'} w-full p-2 mb-2 absolute font-bold text-center text-lg text-red-500 duration-500`}>{alert}</p>
                </div>
                <div>
                    <button type="submit" className="bg-[#228e01] w-full text-white py-3 my-6 rounded font-bold">
                    Sign in
                    </button>
                    <p className="py-4 text-gray-600">
                        Already have an Account?
                        <span onClick={() => navigate('/login')} className="text-green-700 cursor-pointer"> Login</span>
                    </p>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Signup