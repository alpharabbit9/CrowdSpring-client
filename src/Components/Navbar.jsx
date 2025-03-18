import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo/icons8-light-bulb-50.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const HandleLogout = () => {
        userLogOut()
            .then(result => {
                console.log('Successfully logged out')
            })
            .catch(error =>
                console.log("ERROR")
            )
    }

    const links = <>

        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/allCampaign'}><li><a>All Campaign</a></li></NavLink>
        <NavLink to={'/addNew'}><li><a>Add New Campaign</a></li></NavLink>
        <NavLink to={'/myCampaign'}><li><a>My Campaign</a></li></NavLink>
        <NavLink to={'/'}><li><a>My Donation</a></li></NavLink>
        {/* <NavLink to={'/about'}><li><a>About</a></li></NavLink>
        <NavLink to={'/contact'}><li><a>Contact</a></li></NavLink> */}



    </>
    return (
        <div className="navbar  shadow-sm py-8 px-6  fixed z-100 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold  "> <img src={logo} alt="" />Crowdspring</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>

                            <img className='w-10 rounded-full mr-3' src={user?.photoURL} alt="" />
                            <button onClick={HandleLogout} className='btn rounded-3xl p-5'>Logout</button>

                        </> :

                        <Link to={'/login'}>
                            <a className="btn rounded-3xl p-5">Log in</a>
                        </Link>
                }
            </div>

            <div className="divider bg-yellow-400"></div>
        </div>
    );
};

export default Navbar;