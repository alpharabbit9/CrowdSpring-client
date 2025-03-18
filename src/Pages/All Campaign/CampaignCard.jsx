
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {

    const { _id,title, image,  description } = campaign
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // start hidden and moved down
            whileInView={{ opacity: 1, y: 0 }} // animate to visible and normal position
            transition={{ duration: 0.6, ease: 'easeOut' }} // smooth animation
            viewport={{ once: true }} // animate only once when in view
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-12 p-4 gap-3'
        >
            <div className="card bg-[#F4EFE7] w-96 shadow-sm hover:scale-105 transition-transform duration-300">
                <figure>
                    <img className="w-full  object-cover h-72   border-b-amber-300 border-b-2"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-3 mt-3">{title}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/allCampaign/${_id}`}>
                       <button className="btn bg-[#FED857]">See More</button>
                       </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CampaignCard;