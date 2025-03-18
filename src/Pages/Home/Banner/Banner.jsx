import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="h-screen bg-banner flex flex-col justify-center items-center text-white text-center relative">
            <div className="overlay"></div>

            {/* Animated Title */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Empower Dreams, Fund the Future
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
                className="text-lg md:text-2xl mt-4 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                Join our community to support meaningful causes and innovative projects.
            </motion.p>
        </div>
    );
};

export default Banner;
