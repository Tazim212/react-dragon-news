import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import RightSide from '../../Components/RightSide/RightSide';
import { Link, useParams } from 'react-router';
import Qzone from '../Qzone/Qzone';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => {
                const specific = data.find(d => d.id == id)
                // console.log(specific)
                setNews(specific)
            })
    }, [])

    return (
        <div className='mx-6 md:mx-24'>
            <header>
                <Heading></Heading>
            </header>
            <h1 className='font-bold text-2xl text-center md:text-left my-4'>Dragon News</h1>

            <main className='flex flex-col md:flex-row justify-between gap-9'>

                <div className="card bg-base-100 shadow-sm w-90 md:w-2/3 h-200">
                    <figure>
                        <img
                            src={news?.image_url}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{news.title}</h2>
                        <p>{news.details}</p>
                        <div className="card-actions justify-start mt-5">
                            <Link to={`/news/${news.id}`}> <button className="btn btn-secondary"><FaArrowLeft></FaArrowLeft> All news in this category</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/3 mt-3 md:mt-0'>
                    <RightSide></RightSide>
                    <Qzone></Qzone>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;