import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">About SlateMindAI</h2>
          <p className="text-lg text-[#5f6368] mb-6">
            SlateMindAI is designed to revolutionize the way you learn by providing an intelligent, AI-driven flashcard system that adapts to your unique needs.
            Whether you’re a student or a professional, our platform helps you retain knowledge, collaborate with others, and achieve your learning goals.
          </p>
          {/* Add more rich content here */}
        </div>
      </section>
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold text-[#333333]">Rohan Mathew Alex</h3>
              <a href="https://www.linkedin.com/in/rohan-mathew-alex" target="_blank" rel="noopener noreferrer" className="text-lg text-[#50E3C2] hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold text-[#333333]">Nishand Gautam</h3>
              <a href="https://www.linkedin.com/in/nishand-gautam" target="_blank" rel="noopener noreferrer" className="text-lg text-[#50E3C2] hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
