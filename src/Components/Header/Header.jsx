import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"
import { format } from "date-fns";
import icon from "../../assets/user.png"
import { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
    const formattedDate = format(new Date(), "EEEE, MMMM, dd, yyyy")

    const { user, signedOut } = use(AuthContext)

    console.log(user)
    const handleSignOut = () => {
        signedOut()
            .then(() => {
                Swal.fire({
                    title: "Signed Out Successfully",
                    icon: "success"
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    const list = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
    </>
    return (
        <div>
            <section className='text-center'>
                <img src={logo} className='mx-auto my-3' alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{formattedDate}</p>
            </section>
            <section className='flex gap-3 items-center bg-base-200 p-4 my-3'>
                <button className='btn btn-secondary'>Latest</button>
                <p className="marquee">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda commodi explicabo quidem quos.</p>
            </section>

            <section className="my-4">
                <div className="navbar shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-3">
                                {list}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-5">
                            {list}
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        {
                            user && <p>{user.email}</p>
                        }
                        <img src={icon} alt="" />
                        {
                            user ? <button onClick={handleSignOut} className="btn">Sign Out</button>
                                :
                                <Link to="/login"><button className="btn btn-outline btn-primary">Log In</button></Link>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;