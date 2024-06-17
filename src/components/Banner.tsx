import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="relative before:absolute before:w-full before:h-full before:bg-black before:inset-0 before:opacity-10 before:z-10">
            {/* Background image of the banner */}
            <img src="./images/spacexbg.png" alt="SpaceX" className='absolute inset-0 h-full w-full object-cover' />
            <div className="min-h-screen pt-2 mx-20 relative z-20 h-full font-semibold text-white">
                <div className="flex flex-row items-center justify-center sm:justify-between">
                    {/* Logo container with link to homepage */}
                    <div className="flex">
                        <Link to={'/'} className="hover:skew-x-1 transition-all duration-200 ease-in-out"><img src="./images/logo3.png" alt="Logo" className="hidden sm:flex sm:h-auto sm:w-52" /></Link>
                    </div>
                    {/* Navbar */}
                    <div className="flex space-x-6 text-xs sm:text-base">
                        <Link to={'/'} className="underline-navbar">Home</Link>
                        <Link to={'/'} className="underline-navbar">About</Link>
                        <Link to={'/'} className="underline-navbar">Upcoming</Link>
                        <Link to={'/'} className="underline-navbar">Past</Link>
                    </div>
                </div>
                {/* Banner text */}
                <div className={`text-white text-sm sm:text-xl lg:text-2xl font-semibold mt-[450px] w-[200px] sm:w-[600px] animate-bannerText z-0`}>
                    Revolutionizing the aerospace industry and making affordable spaceflight a reality.
                </div>
            </div>
        </div>
    )
}

export default Banner
