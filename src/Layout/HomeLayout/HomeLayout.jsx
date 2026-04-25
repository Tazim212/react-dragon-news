import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import About from '../../Pages/About/About';
import Categories from '../../Components/Categories/Categories';
import RightSide from '../../Components/RightSide/RightSide';
import Qzone from '../../Pages/Qzone/Qzone';

const HomeLayout = () => {
    return (
        <div className='mx-6 md:mx-22'>
            <header>
                <Header></Header>
            </header>
            <main className='flex flex-col md:flex-row justify-around gap-10 flex-1'>
                <aside>
                    <Categories></Categories>
                </aside>

                <section>
                    <Outlet></Outlet>
                </section>
                <aside className='mx-6 md:mx-0'>
                    <RightSide></RightSide>
                    <Qzone></Qzone>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;