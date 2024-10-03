import '../stylesheets/components/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src="/assets/A1 Pool Hero Animated.gif" alt="Hero Image"/>
            <div className="hero-content">
                <h1>Still Local, <br/>Still Right</h1>
                <p>Done Local, Done Right</p>
                <a href="/contact-us">Get a quote!</a>
            </div>
        </div>
    );
}

export default Hero;