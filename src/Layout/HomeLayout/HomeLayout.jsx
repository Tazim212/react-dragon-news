import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import About from '../../Pages/About/About';
import Categories from '../../Components/Categories/Categories';
import RightSide from '../../Components/RightSide/RightSide';
import Qzone from '../../Pages/Qzone/Qzone';

const HomeLayout = () => {
    return (
        <div className='mx-24'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12'>
                <aside className='col-span-3'>
                    <Categories></Categories>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                    <Qzone></Qzone>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;