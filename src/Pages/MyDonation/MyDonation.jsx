import React, { useContext, useEffect, useState } from 'react';
import CampaignBanner from '../All Campaign/Campaign Banner/CampaignBanner';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const MyDonation = () => {

    const [campaigns, setCampaigns] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {

        fetch(`https://crowd-funding-server-beryl.vercel.app/myDonation?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [user?.email])


    return (
        <div>
            <CampaignBanner></CampaignBanner>
            <div className='text-center bg-[#F4EFE7] p-8'>
                <h2 className="font-bold text-4xl mb-3">MyDonation</h2>
                <p>Empowering Dreams, One Contribution at a Time</p>
                <div>
                    {
                        campaigns.map((campaign, index) =>

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                               #
                                            </th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Deadline</th>
                                            <th>Action</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                {index+1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={campaign.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{campaign.title}</div>
                                                  
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='p-2'>
                                               {campaign.description}
                                            </td>
                                            <td>{campaign.deadline}</td>
                                            <th >
                                                <button className="btn btn-ghost btn-xs"><FaTrashAlt  className='text-red-700'></FaTrashAlt></button>
                                                <button><FaEdit></FaEdit></button>
                                            </th>
                                        </tr>
                                       
                                    </tbody>
                                    {/* foot */}
                                    
                                </table>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyDonation;