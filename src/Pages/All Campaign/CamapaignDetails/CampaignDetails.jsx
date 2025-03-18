import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsBanner from './DetailsBanner/DetailsBanner';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CampaignDetails = () => {

    const campaign = useLoaderData();

    const {user}= useContext(AuthContext);

    

    const { title, image, description, deadline, minimum_donation } = campaign;

    const HandleSubmit = (e) =>{
        e.preventDefault();

        const amount = e.target.amount.value;
        const wishes = e.target.wishes.value;

        const donation = {

            donator_name : user?.displayName,
            donator_email :user?.email,
            amount,
            wishes
        }


        fetch('http://localhost:5000/donationAmount',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(donation)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Donated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

            form.reset();
        })
    }
    return (
        <div>
            <DetailsBanner></DetailsBanner>

            <div className='bg-[#F4EFE7] py-6 px-5'>
                <h2 className="font-bold  text-3xl">{title}</h2>
                <div className="divider"></div>

                <div className='md:flex justify-between'>
                    <div className='w-1/2 p-4'>
                        <p className='text-xl'>
                            {description}
                        </p>
                        <p className='mt-3 mb-3'>Deadline : {deadline}</p>
                        <p className='mb-3'>Minimum Amount : $ {minimum_donation}</p>

                        <div className="card bg-transparent w-full max-w-lg shrink-0 shadow-2xl">
                            <form onSubmit={HandleSubmit} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Amount</label>
                                    <input type="text" name='amount' className="input" placeholder="Please enter your donation amount" />
                                    <label className="fieldset-label">Message</label>
                                    <input name='wishes' type="text" className="input" placeholder="Well wishes" />
                                    
                                    <button className="btn bg-yellow-400 mt-4">Donate</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className='w-1/2 rounded-2xl'>
                        <img src={image} className='rounded-2xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;