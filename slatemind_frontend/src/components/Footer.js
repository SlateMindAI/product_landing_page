import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 bg-[#1F2937] text-white">
      <p>© 2024 SlateMindAI. All rights reserved.</p>
      <div className="flex gap-4 mt-4">
        <a href="https://discord.gg/your-invite-link" target="_blank" rel="noopener noreferrer" className="hover:text-[#50E3C2]">Join our Discord</a>
        <a href="https://www.reddit.com/r/YourSubreddit" target="_blank" rel="noopener noreferrer" className="hover:text-[#50E3C2]">Join our Reddit</a>
      </div>
    </footer>
  );
};

export default Footer;
