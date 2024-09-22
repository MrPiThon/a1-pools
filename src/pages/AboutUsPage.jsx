import "../stylesheets/pages/AboutUsPage.css"

const AboutUsPage = () => {
    return (
        <div className="container" id="about-us-top">
            <div className="content">
                <h1>About Us</h1>
                <p>Welcome to A1 Pools! We are a dedicated team of professionals specializing in pool maintenance and
                    safety. Our mission is to ensure your pool is clean, safe, and ready for use all year round.</p>
                <h2>Our History</h2>
                <p>Founded in 2010, A1 Pools has been serving the community for over a decade. Our commitment to quality
                    and
                    customer satisfaction has made us a trusted name in the industry.</p>
                <h2>Our Services</h2>
                <ul>
                    <li>Regular pool cleaning and maintenance</li>
                    <li>Pool safety inspections</li>
                    <li>Equipment repair and replacement</li>
                    <li>Water quality testing and treatment</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUsPage;