import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';

const LogIn = () => {

    const { signedUser } = use(AuthContext)

    const [error, setError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = e =>{
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password)
        setError("")

        signedUser(email, password)
        .then(res =>{
            console.log(res.user)
            navigate(location?.state || "/")
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <form onSubmit={handleSignIn}>
            <div className="card bg-gray-400 w-90 mx-auto mt-15 shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center pt-3 font-bold">Login now!</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
                <p className='px-3 py-3 text-center'>Don't have an account? <Link to="/register" className='underline hover:text-amber-700'>Register Now</Link></p>
            </div>
            {
                error && <p className='text-red-600 text-center py-3'>{error.message}</p>
            }
        </form>
    );
};

export default LogIn;