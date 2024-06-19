import CapsuleList from '../CapsuleList'
import Footer from '../Footer'
import Header from '../Header'

const PastCapsules = () => {

    return (
        <div className='min-h-screen relative'>
            <Header bgColor='[#093247]' textColor='white' />
            {/* Reusable CapsuleList component */}
            <CapsuleList pageTitle='Past Capsules' apiEndpoint='https://api.spacexdata.com/v3/capsules/past' capsuleState='Past Capsules' />
            <Footer />
        </div>
    )
}

export default PastCapsules
