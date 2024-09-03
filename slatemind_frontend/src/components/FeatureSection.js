import React from 'react';

const FeatureSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-lg shadow-lg">
                        <div className="p-4 bg-[#4A90E2] text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1-88-88A88.1,88.1,0,0,1,128,216ZM140,80v96a8,8,0,0,1-16,0V95l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,140,80Z"></path>
                            </svg>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-[#333333]">Create Flashcards</h3>
                        <p className="mt-2 text-lg text-[#5f6368]">
                            Easily generate customized flashcards tailored to your study needs. Whether from text or imported from other sources, SlateMindAI makes learning seamless.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-lg shadow-lg">
                        <div className="p-4 bg-[#50E3C2] text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                            </svg>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-[#333333]">Join Study Groups</h3>
                        <p className="mt-2 text-lg text-[#5f6368]">
                            Collaborate with classmates and peers in study groups. Share knowledge, challenge each other, and master topics together.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-[#F8F8F8] rounded-lg shadow-lg">
                        <div className="p-4 bg-[#F5A623] text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M205.66,125.66a8,8,0,0,1-11.32,0L128,59.31,61.66,125.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,125.66Z"></path>
                            </svg>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-[#333333]">Chat with Files</h3>
                        <p className="mt-2 text-lg text-[#5f6368]">
                            Upload documents, notes, or textbooks and get instant answers. Leverage AI to chat with your files and uncover the insights you need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
