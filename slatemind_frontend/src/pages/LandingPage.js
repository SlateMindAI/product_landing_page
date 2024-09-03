import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ScreensSection from '../components/ScreensSection';
import JoinWaitingListSection from '../components/JoinWaitingListSection';


const LandingPage = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[#F8F8F8] overflow-x-hidden font-sans">
            <Header />
            <HeroSection />
            <FeatureSection />
            <ScreensSection />
            <JoinWaitingListSection />
            <FAQSection openFAQ={openFAQ} toggleFAQ={toggleFAQ} />
            <Footer />
        </div>
    );
};

export default LandingPage;
