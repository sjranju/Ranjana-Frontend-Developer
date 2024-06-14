import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-10 before:z-10">
            {/* <div className="h-[730px] w-full"> */}
            <img src="./images/spacexbg.png" alt="SpaceX" className='absolute inset-0 h-full w-full object-cover' />
            {/* </div> */}
            <div className="min-h-[600px] justify-end space-x-6 pt-6 mr-20 relative z-50 h-full flex flex-row font-semibold text-xl text-white">
                <Link to={'/'} className="hover:skew-x-1 transition-all duration-200 ease-in-out">Home</Link>
                <Link to={'/'} className="hover:after:underline hover:after:left-0 hover:after:right-auto hover:after:width-full transition-all duration-200 ease-in-out">About</Link>
                <Link to={'/'}>Upcoming</Link>
                <Link to={'/'}>Past</Link>
            </div>
        </div>
    )
}

export default Banner
