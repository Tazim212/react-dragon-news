import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';
import "./App.css"
const categorieList = fetch("/categories.json").then(res => res.json())
const Categories = () => {

    const categories = use(categorieList)
    return (
        <div>
            <h1 className='font-bold'>All categories</h1>
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className="flex flex-row md:flex-col my-3 btn bg-base-100 border-0 hover:bg-base-200"
                        to={`/news/${category.id}`}
                    >{category.name}
                    </NavLink>)
                }
            </Suspense>
        </div>
    );
};

export default Categories;