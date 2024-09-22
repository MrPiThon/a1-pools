import '../stylesheets/pages/ContactUsPage.css';
import ContactForm from "../components/ContactForm.jsx";

const ContactUsPage = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <ContactForm actionUrl="https://formspree.io/f/mnnaykyj"/>
        </div>
    );
}

export default ContactUsPage;