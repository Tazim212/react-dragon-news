import { format } from 'date-fns';
import logo from "../../assets/logo.png"
import { Link } from 'react-router';
import Marquee from 'react-fast-marquee';

const Heading = () => {
    const formattedDate = format(new Date(), "EEEE, MMMM, dd, yyyy")
   
    // const text = <Marquee>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quam!</Marquee>
    return (
        <div>
            <section className='text-center'>
                <Link to="/"><img src={logo} className='mx-auto my-3' alt="" /></Link>
                <p>Journalism Without Fear or Favour</p>
                <p>{formattedDate}</p>
            </section>
            <section className='flex gap-3 items-center bg-base-200 p-4 my-3'>
                <button className='btn btn-secondary'>Latest</button>
                {/* <span>{text}</span> */}
            </section>
        </div>
    );
};

export default Heading;