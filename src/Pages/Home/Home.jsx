import React from 'react';
import Banner from './Banner/Banner';
import RunningCampaign from './Running Campaign/RunningCampaign';
import Newsletter from './Newsletter/Newsletter';
import NewCampaign from './New Campaign/NewCampaign';

const Home = () => {
    return (
        <div className='bg-[#F4EFE7] text-center'>
            <Banner></Banner>
            <RunningCampaign></RunningCampaign>
            <NewCampaign></NewCampaign>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;