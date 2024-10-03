import '../stylesheets/pages/ContactUsPage.css';
{/*<ContactForm actionUrl="https://formspree.io/f/mnnaykyj"/>*/}

const ContactUsPage = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Get in touch!</h1>
                <div className="widgets">
                    <div className="widget">
                        <h1 className="widgetTitle">EMAIL</h1>
                        <p>contact@a1pools.com</p>
                    </div>
                    <div className="widget">
                        <h1 className="widgetTitle">PHONE</h1>
                        <p>(661)123-4567</p>
                    </div>
                    <div className="widget">
                        <h1 className="widgetTitle">LOCATION</h1>
                        <p>Kern County, California</p>
                    </div>
                    <div className="widget">
                        <h1 className="widgetTitle">COMPANY</h1>
                        <p>A1 Pools</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;