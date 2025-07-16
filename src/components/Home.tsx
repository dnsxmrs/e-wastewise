export default function Home() {
    return (
        <section id="home" className="relative min-h-screen flex justify-center items-center">
            {/* Content */}
            <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-6xl font-bold text-white">Be E-WasteWise</h1>
                <h2 className="text-6xl font-bold text-[#4ADE80]">Think Before You Throw!</h2>
                <p className="text-2xl text-white my-10">Join our mission to educate, inspire, and take action against electronic waste pollution.</p>
                <div>
                    <a href="#about" className="inline-block px-7 py-3 bg-[#05cc4e] text-white text-sm font-semibold rounded-3xl shadow-md hover:bg-[#3B82F6] transition duration-300 animate-bounce">Learn More</a>
                </div>
            </div>
        </section>
    );
}
