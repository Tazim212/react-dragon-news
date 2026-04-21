import React from 'react';
import img1 from "../../assets/swimming.png"
import img2 from "../../assets/playground.png"
import img3 from "../../assets/class.png"
import img4 from "../../assets/bg.png"

const Qzone = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-xl mt-4'>Q-Zone</h1>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} className='mt-3' alt="" />
        </div>
    );
};

export default Qzone;