import React from 'react';
import dashImage from "../assets/dash.jpg";
import quizImage from "../assets/quiz.jpg";

const ScreensSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F5A623] to-[#50E3C2] text-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Experience SlateMindAI in Action</h2>
      <p className="text-lg text-center mb-10">
        Dive into the intuitive interface of SlateMindAI, designed to make your learning journey seamless and effective. From creating flashcards to tracking your progress, everything is just a tap away.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-square w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dashImage} alt="Dashboard Feature" className="object-contain w-full h-full" />
        </div>
        <div className="relative aspect-square w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={quizImage} alt="Quiz Feature" className="object-contain w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="#join-waitlist" className="px-6 py-3 bg-[#1F2937] text-white text-lg font-bold rounded-full hover:bg-[#333333]">
          Join the Waiting List
        </a>
      </div>
    </div>
  </section>
  

  );
};

export default ScreensSection;
