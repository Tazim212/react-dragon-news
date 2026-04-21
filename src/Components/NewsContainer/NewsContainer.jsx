import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';
import Swal from 'sweetalert2';

const NewsContainer = () => {
    const { id } = useParams();
    const newsData = useLoaderData();
    const [newses, setNewses] = useState([])

    const handleSaved = (id) =>{
        // console.log(id)
            const newsList = JSON.parse(localStorage.getItem("Saved")) || [];
            const existed = newsList.find(news => news.id == id)
            // console.log(existed)
            if(!existed){
                const selectedNews = newsData.find(item =>item.id == id)
                newsList.push(selectedNews)
                // console.log(newsList)
                localStorage.setItem("Saved",JSON.stringify(selectedNews))
            }
            else{
                Swal.fire("News already existed")
            } 

    }

    useEffect(() => {
        // console.log(filteredNews)
        if (id == "0") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setNewses(newsData)
            return
        }
        else if (id == "1") {
            const filteredNews = newsData.filter(news => news.others.is_today_pick == true)
            setNewses(filteredNews)
            return

        }
        else {
            const filteredNews = newsData.filter(news => news.category_id == id)
            setNewses(filteredNews)
        }
    }, [newsData, id])

    return (
        <div>
            <h1>({newses.length}) news found</h1>
            {
                newses.map(news => <NewsCard key={news.id} news={news} handleSaved={handleSaved}></NewsCard>)
            }
        </div>
    );
};

export default NewsContainer;