import { motion } from "framer-motion";

import { useContext } from 'react';
import './AddNew.css'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from "sweetalert2";

const AddNewCampaign = () => {

    const { user } = useContext(AuthContext);

    const  HandleSubmit =(e)=>{
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.photo.value;
        const type = form.type.value;
        const description = form.description.value;
        const minimum_donation = form.minimumDonation.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;


        console.log(title,image,type,description,minimum_donation,deadline,email,name)

        const item = {
            title,
            image,
            type,
            description,
            minimum_donation,
            deadline,
            email,
            name
        } ;

        fetch('https://crowd-funding-server-beryl.vercel.app/campaigns',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Campaign added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

            form.reset();
        })




    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // start hidden and moved down
            whileInView={{ opacity: 1, y: 0 }} // animate to visible and normal position
            transition={{ duration: 0.6, ease: 'easeOut' }} // smooth animation
            viewport={{ once: true }} // animate only once when in view
            
        >
            <div className='band min-h-screen md:p-36 text-white'>

                <h2 className='text-3xl md:text-4xl font-bold text-white mt-3 mb-3 text-center'> Launch Your Campaign, Inspire Change</h2>
                <p className='font-light text-center text-white mb-8'>Turn your vision into reality! Create a new campaign and start making an impact today</p>
                <div className=' flex justify-center items-center'>

                    <div className="card bg-transparent text-white w-full max-w-lg  shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={HandleSubmit}>
                                <fieldset className="fieldset text-white">
                                    {/* Title */}
                                    <label className="fieldset-label  text-white">Campaign Title</label>
                                    <input name='title' type="Text" className="input w-full bg-transparent border border-white  rounded-3xl" placeholder="Title" />
                                    {/* Photo */}
                                    <label className="fieldset-label  text-white">Campaign Image URL</label>
                                    <input type="Text" name='photo' className="input w-full bg-transparent border border-white  rounded-3xl" placeholder="image" />
                                    {/* Type */}
                                    <label className="fieldset-label  text-white">Campaign Type</label>
                                    <select defaultValue="Pick a color" name='type' className="select text-white  bg-transparent w-full border border-white rounded-3xl  mb-3">
                                        <option disabled={true}></option>
                                        <option className="bg-transparent">Campaign Type</option>
                                        <option>StartUp</option>
                                        <option>Business</option>
                                        <option>Creative Idea</option>
                                        <option>Environment</option>
                                        <option>Charity</option>
                                    </select>
                                    {/* Description */}
                                    <label className="fieldset-label  text-white">Description</label>
                                    <input name='description' type="Text" className="input w-full bg-transparent border border-white  rounded-3xl" placeholder="Description" />
                                    <div className='flex gap-3 items-center mt-2 mb-2'>
                                        {/* Minimum Donatiion */}
                                        <label className="fieldset-label  text-white">Min Amount</label>
                                        <input name='minimumDonation' type="Text" className="input bg-transparent border border-white  rounded-3xl" placeholder="Amount" />
                                        {/* Deadline */}
                                        <label className="fieldset-label  text-white">Deadline</label>
                                        <input name='deadline' type="Text" className="input  bg-transparent border border-white  rounded-3xl" placeholder="Deadline" />
                                    </div>
                                    {/* User Email */}
                                    <label className="fieldset-label  text-white">User Email</label>
                                    <input name='email' type="Email" defaultValue={user?.email} className="input w-full bg-transparent border border-white  rounded-3xl" placeholder="Email" />
                                    {/* Name */}
                                    <label className="fieldset-label  text-white">User Name</label>
                                    <input name='name' type="Text" defaultValue={user?.displayName} className="input w-full bg-transparent border border-white  rounded-3xl" placeholder="Name" />

                                    <button className="btn btn-neutral mt-4">Add</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    );
};

export default AddNewCampaign;