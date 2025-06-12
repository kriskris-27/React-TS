import React, { useEffect, useState } from 'react'

const RegistrationForm = () => {
    const [email,setEmail]=useState<string>('');
    const [erroremail,setErroremail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [errorpassword,setErrorpassword] = useState<string>('')
    const [indi,setIndi] = useState<boolean>(false)

useEffect((
)=>{
    if(email.length > 0 && !email.includes('@')){
        setErroremail('Invalid email')
    }
    else{
        setErroremail('')
    }
    if(password.length>0 && password.length <= 6){
        setErrorpassword('Password too short')
    }
    else{
        setErrorpassword('')
        
    }
    
    if(email.includes('@') && password.length >= 6){
        setIndi(true)
        setErrorpassword('Ready to login')
    }

},[email,password])


const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    console.log('email: ',email,'password: ',password)
}

  return (
    <>
    <div className='m-4'>
        <form onSubmit={handleSubmit}>    
    <label >Email:</label>
    <input className='border-gray-400 border m-4' type='text' placeholder='email...' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    {erroremail && (<p>{erroremail}</p>)}
    <label>Password:</label>
    <input className='border-gray-400 border m-4' type='text' placeholder='password...' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    {<p>{errorpassword}</p>}
    {indi && (<button className='border px-3 py-1 border-sky-400' type='submit' >Login</button>)}
    </form>

    </div>
    </>
  )
}

export default RegistrationForm
