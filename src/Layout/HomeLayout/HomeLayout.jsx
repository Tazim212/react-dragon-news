import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import About from '../../Pages/About/About';

const HomeLayout = () => {
    return (
        <div className='mx-24'>
            <header>
                <Header></Header>
            </header>
            <main>
                <aside>
                    <button className='btn btn-primary'>btn</button>
                </aside>
                <Outlet></Outlet>
                <aside>right side</aside>
            </main>
        </div>
    );
};

export default HomeLayout;