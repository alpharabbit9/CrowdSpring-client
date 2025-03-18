import React, { useEffect, useState } from 'react';
import CampaignCard from '../../All Campaign/CampaignCard';

const RunningCampaign = () => {

    const [campaigns , setCampaigns] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
            .then(data => setCampaigns(data))




    } , [])
    return (
        <div  className='mt-6'>

            <h2 className="text-3xl font-bold mb-6">Our Running Campaign</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
                {
                    campaigns.slice(0,6).map((campaign , index)=> <CampaignCard key={index} campaign={campaign}></CampaignCard>) 
                }
            </div>

            
        </div>
    );
};

export default RunningCampaign;