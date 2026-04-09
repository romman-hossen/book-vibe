import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div className='work-sans'>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;