import React, { useEffect, useState } from 'react';
import CampaignBanner from './Campaign Banner/CampaignBanner';
import CampaignCard from './CampaignCard';
import { motion } from "framer-motion";
import { useLoaderData } from 'react-router-dom';



const AllCampaign = () => {

    const [campaigns, setCampaigns] = useState([]);
    const [itemsPerPage, setItemPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()]
    console.log(pages);

    const HandleChange = (e) => {

        const val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0);
    }

    const HandlePrev = () => {

        if(currentPage > 0)
        {
            setCurrentPage(currentPage -1);
        }
    }


    const HandleNext = () =>{
        if(currentPage < pages.length -1)
        {
            setCurrentPage(currentPage + 1) ;
        }
    }

    useEffect(() => {

        fetch(`http://localhost:5000/campaigns?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setCampaigns(data))


    }, [currentPage,itemsPerPage])
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
            <div className='pagination w-10/12 mx-auto mt-6 mb-6'>
                <p>Current Page : {currentPage}</p>
                <button onClick={HandlePrev} className='btn'>Previous</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={`btn ${currentPage === page ? 'btn-primary' : 'btn-outline'}`}>{page}</button>)
                }
                <button onClick={HandleNext} className='btn'>Next</button>


                <select value={itemsPerPage} onChange={HandleChange} className='btn ml-3' name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

            </div>
        </div>
    );
};

export default AllCampaign;