import React, { useEffect, useState } from 'react';
import CampaignBanner from './Campaign Banner/CampaignBanner';
import CampaignCard from './CampaignCard';
import { motion } from "framer-motion";



const AllCampaign = () => {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
            .then(data => setCampaigns(data))


    }, [])
    return (
        <div className='bg-[#F4EFE7]'>
            <CampaignBanner></CampaignBanner>
            <motion.div
                initial={{ opacity: 0, y: 100 }} // start hidden and moved down
                whileInView={{ opacity: 1, y: 0 }} // animate to visible and normal position
                transition={{ duration: 0.6, ease: 'easeOut' }} // smooth animation
                viewport={{ once: true }} // animate only once when in view
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-12 p-4 gap-3'
            >
                {
                    campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </motion.div>
        </div>
    );
};

export default AllCampaign;