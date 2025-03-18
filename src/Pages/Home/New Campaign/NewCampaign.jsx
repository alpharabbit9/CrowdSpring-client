import React from "react";
import teacher from '../../../assets/Logo/man-cunting-stack-coins.jpg'
import { Link } from "react-router-dom";

const NewCampaign = () => {
    return (
        <section className="relative  py-12 rounded-3xl transition-transform duration-300 hover:scale-105">
            {/* Overlay with opacity */}
            <div className="absolute inset-0 bg-amber-200 opacity-60 rounded-3xl "></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-200 rounded-lg -z-10 w-4/5 h-4/5 left-6 top-6"></div>
                        <img
                            src={teacher}
                            alt="Join as Teacher"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-black">
                        <h2 className="text-4xl font-bold">Launch Your Campaign!</h2>
                        <p className="mt-4 text-lg">
                            Empower your cause and inspire change—create a campaign and make an impact today!
                        </p>
                        <Link to={'/addNew'}>
                            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                                Start Today
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCampaign;
