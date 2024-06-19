import CapsuleList from '../CapsuleList'
import Footer from '../Footer'
import Header from '../Header'

const UpcomingCapsules = () => {

    return (
        <div className='relative'>
            <Header bgColor='[#093247]' textColor='white' />
            {/* Reusable CapsuleList component */}
            <CapsuleList pageTitle='Upcoming Capsules' apiEndpoint='https://api.spacexdata.com/v3/capsules/upcoming' capsuleState='Upcoming Capsules' />
            <Footer />
        </div>
    )
}

export default UpcomingCapsules
