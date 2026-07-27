const Home = () => {
    return (
        <div className="flex justify-center items-center p-32">

            <div className="flex flex-col gap-4 items-center justify-center max-w-2xl md:max-w-3xl sm:max-w-xl xs:max-w-lg mx-auto ">
                <p className="text-white text-6xl font-bold text-center">Unlimited movies, shows, and more</p>
                <p className="text-white/90 text-sm font-semibold text-center">Plans start at ₹149. Cancel anytime.</p>
                <p className="text-white/80 text-sm font-semibold text-center">Ready to watch? Enter your email to start your membership.</p>
                <div className="flex gap-4">
                    <input type="text" placeholder="Email address" className="bg-transparent border border-white/50 text-white px-4 py-2 rounded" />
                    <button className="bg-red-600 text-white text-lg font-bold px-4 py-4 rounded hover:bg-red-800 cursor-pointer">Try 30 days for free</button>
                </div>
                <p className="text-white/80 text-sm font-semibold text-center">New members only. Terms below</p>
            </div>
        </div>
    )
}

export default Home