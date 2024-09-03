import React, { useState } from 'react';
import axios from 'axios';

const JoinWaitingListSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/join-waiting-list', { name, email });
            if (response.data.success) {
                setSuccess(true);
                setError(null);
            } else {
                setError('There was an error joining the waiting list. Please try again.');
            }
        } catch (err) {
            setError('There was an error joining the waiting list. Please try again.');
        }
    };

    return (
        <section id="join-waitlist" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-[#333333] text-center mb-10">Join the Waiting List</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#F8F8F8] p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-[#333333] mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50E3C2]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-[#333333] mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50E3C2]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#50E3C2] text-white text-lg font-bold rounded-lg hover:bg-[#4A90E2] transition-colors duration-300"
                    >
                        Join Now
                    </button>
                    {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                    {success && <p className="mt-4 text-green-500 text-center">Thank you for joining the waiting list!</p>}
                </form>
            </div>
        </section>
    );
};

export default JoinWaitingListSection;
