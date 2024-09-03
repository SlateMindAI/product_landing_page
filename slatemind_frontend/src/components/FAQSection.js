import React, { useState } from 'react';

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
                        <button
                            className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
                            onClick={() => toggleFAQ(1)}
                        >
                            What is SlateMindAI?
                            <svg className={`w-6 h-6 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openFAQ === 1 && (
                            <div className="mt-4 text-base text-[#5f6368]">
                                SlateMindAI is a flashcard-based learning platform designed to help you master any subject with ease.
                            </div>
                        )}
                    </div>
                    <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
                        <button
                            className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
                            onClick={() => toggleFAQ(2)}
                        >
                            Is SlateMindAI free?
                            <svg className={`w-6 h-6 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openFAQ === 2 && (
                            <div className="mt-4 text-base text-[#5f6368]">
                                Yes! SlateMindAI offers a free plan with the option to upgrade for more advanced features.
                            </div>
                        )}
                    </div>
                    <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-lg">
                        <button
                            className="w-full text-left text-lg font-bold text-[#333333] flex justify-between items-center"
                            onClick={() => toggleFAQ(3)}
                        >
                            Can I collaborate with others?
                            <svg className={`w-6 h-6 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openFAQ === 3 && (
                            <div className="mt-4 text-base text-[#5f6368]">
                                Absolutely. Join study groups and collaborate with classmates and friends.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
