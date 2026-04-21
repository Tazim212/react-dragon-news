import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const NewsContainer = () => {
    const { id } = useParams();
    const newsData = useLoaderData();
    const [newses, setNewses] = useState([])

    // console.log(id)
    // console.log(newsData)

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
                newses.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default NewsContainer;