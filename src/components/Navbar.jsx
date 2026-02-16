import React from 'react';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch(err => toast.error(err.message));
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>Home</NavLink></li>
            {user && <li><NavLink to="/my-profile" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>My Profile</NavLink></li>}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold text-primary">SkillSwap</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Hover triggers Display Name */}
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://i.ibb.co/mR79Y6v/user.png"} alt="User Profile" />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                        <Link to="/register" className="btn btn-outline btn-sm">Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;