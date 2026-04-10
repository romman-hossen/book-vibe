import React from 'react';
import Banner from './banner/Banner';
import AllBooks from './AllBooks/AllBooks';

const Homepage = () => {
    return (
        <div className='space-y-25'>
            <Banner />
            <AllBooks />
        </div>
    );
};

export default Homepage;