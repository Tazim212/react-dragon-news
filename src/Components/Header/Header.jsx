import React from 'react';
import logo from "../../assets/logo.png"
import { format } from "date-fns";

const Header = () => {
    const formattedDate = format(new Date(),"EEEE, MMMM, dd, yyyy")
    return (
        <div>
            <section className='text-center'>
                <img src={logo} className='mx-auto my-3' alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{formattedDate}</p>
            </section>
        </div>
    );
};

export default Header;