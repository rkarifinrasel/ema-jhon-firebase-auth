import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
const SignUp = () => {
    const [show,setShow]=useState(false)
    const [error,setError]=useState('')
    const {createSignUp}=useContext(AuthContext)


    const handleSignOut=event=>{
        event.preventDefault()

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email,password,confirm)
        setError('')
        if(password!==confirm){
            setError('password did not match')
            return
        }
        else if(password.length<6){
            setError('At least 6 character password')
            return
        }
        createSignUp(email,password)
        .then(result=>{
            const signUser=result.user;
            console.log(signUser)
            form.reset()
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='form-containeer'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignOut}>
<div className="form-control">
    <label htmlFor="email">Email:</label>
    <input type="email"name='email'required />
</div>
<div className="form-control">
    <label htmlFor="password">Password:</label>
    <input type={show ?'text':'password'}name='password'required />

{/* <p onClick={()=>setShow(!show)}><span>
    {
        show ?<span>Hide password</span>:<span>Show password</span>
    }
    </span></p> */}


</div>
<div className="form-control">
    <label htmlFor="password">Confirm Password:</label>
    <input type={show ?'text':'password'}name='confirm'required />
    
<p onClick={()=>setShow(!show)}><span>
    {
        show ?<span>Hide password</span>:<span>Show password</span>
    }
    </span></p>
</div>
<input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>
                <small>Already have an account? 
                    <Link to='/login'> Login</Link>
                </small>
            </p>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default SignUp;