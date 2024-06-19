import Footer from '../Footer';
import Header from '../Header';

const About = () => {
    return (
        <div className="min-h-screen w-full flex flex-col bg-[#BFB6A0]">
            <Header bgColor='[#093247]' textColor='white' />
            <div className="flex-grow container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6 text-center">About SpaceX Capsules</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About SpaceX</h2>
                    <p className="text-lg leading-7">
                        SpaceX designs, manufactures and launches advanced rockets and spacecraft.
                        The company was founded in 2002 by Elon Musk with the goal of reducing space
                        transportation costs to enable the colonization of Mars. SpaceX has developed
                        several launch vehicles, the Starlink satellite constellation, the Dragon cargo
                        spacecraft, and the Crew Dragon spacecraft.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About This Application</h2>
                    <p className="text-lg leading-7">
                        This application is designed to provide users with detailed information about SpaceX capsules.
                        Users can search for capsules based on their status, type, and original launch date. The application
                        also offers data about past and upcoming capsules. This tool is useful for space enthusiasts, researchers,
                        and anyone interested in the achievements and missions of SpaceX.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Interesting Facts</h2>
                    <ul className="list-disc pl-5 text-lg leading-7">
                        <li><strong>Reusable Rockets:</strong> SpaceX's Falcon 9 rocket is the first orbital class rocket capable of reflight.</li>
                        <li><strong>First Private Company:</strong> In 2012, SpaceX's Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station.</li>
                        <li><strong>Starship Development:</strong> SpaceX is developing the Starship, a fully reusable spacecraft designed for missions to Mars and beyond.</li>
                        <li><strong>Global Internet Coverage:</strong> The Starlink project aims to provide high-speed internet globally through a constellation of satellites in low Earth orbit.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;
