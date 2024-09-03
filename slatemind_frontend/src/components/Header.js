import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close the dropdown if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.relative')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="flex items-center justify-between bg-[#4A90E2] px-8 py-4 relative z-20">
            <div className="flex items-center gap-4">
                {/* Enhanced Logo Styling */}
                <Link to="/" className="text-3xl font-extrabold text-white hover:text-[#F5A623] transition-colors duration-300">
                    <span className="text-[#50E3C2]">Slate</span><span className="text-white">Mind</span><span className="text-[#F5A623]">AI</span>
                </Link>
            </div>
            <nav className="flex gap-8">
                <Link className="text-lg font-medium text-white hover:text-[#50E3C2]" to="/about">About</Link>
                <div className="relative">
                    <button
                        className="text-lg font-medium text-white hover:text-[#50E3C2]"
                        onClick={toggleDropdown}
                    >
                        Join Community
                    </button>
                    {showDropdown && (
                        <div className="absolute mt-2 bg-white text-[#333333] rounded-lg shadow-lg z-30">
                            <a href="https://www.linkedin.com/in/rohan-mathew-alex" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                LinkedIn
                            </a>
                            <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                Discord
                            </a>
                            <a href="https://www.reddit.com/r/YourSubreddit" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F5A623]">
                                Reddit
                            </a>
                        </div>
                    )}
                </div>
                <a className="text-lg font-medium text-white bg-[#50E3C2] hover:bg-[#F5A623] px-4 py-2 rounded-full" href="#join-waitlist">Join Waiting List</a>
            </nav>
        </header>
    );
};

export default Header;
