import '../stylesheets/components/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src="/assets/A1 Pool Hero Animated.gif" alt="Hero Image"/>
            <div className="hero-content">
                <h1>Done Local, <br/>Done Right</h1>
                <p>Get a free quote today!</p>
                <a href="/contact-us">Contact us</a>
            </div>
        </div>
    );
}

export default Hero;