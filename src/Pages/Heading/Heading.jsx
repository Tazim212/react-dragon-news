import { format } from 'date-fns';
import logo from "../../assets/logo.png"

const Heading = () => {
    const formattedDate = format(new Date(), "EEEE, MMMM, dd, yyyy")
   
    return (
        <div>
            <section className='text-center'>
                <img src={logo} className='mx-auto my-3' alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{formattedDate}</p>
            </section>
            <section className='flex gap-3 items-center bg-base-200 p-4 my-3'>
                <button className='btn btn-secondary'>Latest</button>
            </section>
        </div>
    );
};

export default Heading;