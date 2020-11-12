import React from 'react';

import Head from '../header';
import TopNews from './topNews';
import SportsNews from './sports';
import TecNews from './tec';
import Games from './games';

const Home:React.FC = () => {
    return (
    <>
        <Head />
        <TopNews />
        <SportsNews />
        <TecNews />
        <Games />
    </>
    )
};

export default Home;