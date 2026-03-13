import React from 'react';

const Home = () => {
    return (
        <main className="relative pt-32 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bridging Biological Complexity <br />
                <span className="text-blue-500">with Enterprise Software</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg mb-8">
                I am Fernando Gómez. Biotechnology Engineer & Senior Backend Developer.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold">
                    Explore Solutions
                </button>
                <button className="border border-white/20 px-6 py-2 rounded-full font-bold">
                    Contact Me
                </button>
            </div>
        </main>
    );
};

export default Home;