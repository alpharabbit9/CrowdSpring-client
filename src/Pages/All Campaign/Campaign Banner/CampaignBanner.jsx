import { motion } from "framer-motion";
import "./CampaignBanner.css";

const CampaignBanner = () => {
    return (
        <div className="h-screen cm-banner flex flex-col justify-center items-center text-white text-center relative">
            <div className="overlay"></div>

            {/* Animated Title */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
               All Campaigns - Make an Impact Today
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
                className="text-lg md:text-2xl mt-4 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                Explore a variety of campaigns from personal causes to creative ventures. 
            </motion.p>
        </div>
    );
};

export default CampaignBanner;
