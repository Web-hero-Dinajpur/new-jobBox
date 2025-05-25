import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import logoImg from '../../assets/logo-job.png'

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successful sign out')
            })
            .catch(() => {
                console.log('failed to sign out . stay dont leave ne alone')
            })
    }


    const Links = <>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
       
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>

                <a className='btn btn-ghost text-xl' href="">
                    <img className='' src={logoImg} alt="" />
                    <h3 className='text-3xl'>Job portal</h3>
                    </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className='btn'>Log Out</button>
                    </> : <> <Link to='/register'>Register Now</Link>
                        <button className='btn'> <Link to='/signin'>Sign In</Link></button></>
                }

            </div>
        </div>
    );
};

export default Navbar;