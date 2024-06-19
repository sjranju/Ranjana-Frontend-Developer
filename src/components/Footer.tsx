import { AiOutlineLinkedin } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { LINKEDIN_PROFILE, EMAIL_ID } from '../utils/constants'

const Footer = () => {
    return (
        <div className='w-full flex flex-col space-y-4 bg-[#093247] text-white text-center p-12'>
            <div className="">Made with ❤️ by Ranjana Singanoodi</div>
            <div className="flex flex-row space-x-6 items-center justify-center">
                <a href={LINKEDIN_PROFILE} className=""><AiOutlineLinkedin size={24} /></a>
                <a href={`mailto:${EMAIL_ID}`}><MdOutlineEmail size={24} /></a>
            </div>
        </div>
    )
}

export default Footer
