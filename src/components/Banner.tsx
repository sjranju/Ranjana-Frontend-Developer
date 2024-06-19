import Header from "./Header"
import { PiCaretDoubleDownThin } from "react-icons/pi";

const Banner = () => {

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight, // Scrolls down by the height of the viewport
            behavior: "smooth" // Smooth scrolling
        });
    };

    return (
        <div className="relative before:absolute before:w-full before:h-full before:bg-black before:inset-0 before:opacity-10 before:z-10">
            {/* Background image of the banner */}
            <img src="./images/spacexbg.png" alt="SpaceX" className='absolute inset-0 h-full w-full object-cover' />
            <div className="min-h-screen pt-2 relative z-20 h-full font-semibold text-white">
                <Header bgColor="" textColor="" />
                {/* Banner text */}
                <div className={`mx-20 text-white text-sm sm:text-xl lg:text-2xl font-semibold mt-[450px] w-[200px] sm:w-[600px] animate-bannerText z-0`}>
                    Revolutionizing the aerospace industry and making affordable spaceflight a reality.
                </div>
                <div className="absolute bottom-4 animate-bounce left-1/2 cursor-pointer"
                    onClick={scrollToContent}>
                    <PiCaretDoubleDownThin color="white" size={48} />
                </div>
            </div>
        </div>
    )
}

export default Banner
