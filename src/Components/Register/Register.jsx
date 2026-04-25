import React, { use, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Heading from '../../Pages/Heading/Heading';


const Register = () => {

    const { createUser, updateUser } = use(AuthContext)
    const [error, setError] = useState("")

    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        setError("")

        createUser(email, password)
            .then(() => {
                // console.log(res.user)
                updateUser(name, photo)
                    .then(() => {
                        Swal.fire("profile created")
                    })
                    .catch(err => {
                        console.log(err)
                    })
                navigate(location?.state || "/")
                e.target.reset()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }

    return (
        <div>
            <Heading></Heading>
            <div className="card bg-gray-400 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <h1 className="text-3xl pt-4 text-center font-bold">Register now!</h1>
                        <label className="label">Your Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />
                        <label className="label">Your photo</label>
                        <input type="text" name="photo" className="input" placeholder="Photo" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type={show ? "text" : "password"}
                            name="password"
                            className="input"
                            placeholder="Password" />
                        {
                            show ? <button onClick={() => setShow(false)} type='button' className='relative left-72 -top-8'><FaEyeSlash className='text-lg'></FaEyeSlash></button>
                                :
                                <button onClick={() => setShow(true)} type='button'
                                    className='relative left-72 -top-8'><FaEye className='text-lg'></FaEye></button>
                        }
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Already have an account? <Link to="/login" className='underline hover:text-amber-700'>Click here</Link></p>
                    {
                        error && <p className='text-red-600 text-center py-3'>{error.message}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;