import React from 'react';
import mainImage from '../assets/LandingPage.jpg'; 
import mainImage2 from '../assets/LandingPage2.jpg'; 
import '../App.css'; 
const LandingPage = () => {
    return (  
            <div className="about-us">
                <header className="about-header">
                    <h1>Welcome to Late Night Pizza!</h1>
                    <img src={mainImage} alt="Main Landing Image" className="about-image" />
                </header>
                <h1 class="solid"></h1>

                <section className="story">
                    <h2>Discover Our Pizzas</h2>
                    <p>
                        Discover our wide variety of pizzas, perfect for your late-night cravings. 
                        Made with fresh ingredients and a whole lot of love, we ensure a delightful meal 
                        every time you order.
                    </p>
                </section>

                <section className="story">
                <h2>Special Student Offers</h2>
                    <p>Check out our exclusive late-night deals and discounts for students.</p>
                    <img src={mainImage2} alt="Main Landing Image" className="about-image" />

                </section>

                <section className="vision-mission">
                    <h2>Customer Love</h2>
                    <p>"Best late-night pizza in town!" - Abdullah</p>
                    <p>"The Go-To Spot for Midnight Snacks" - Faisal</p>
                    <p>"A Lifesaver During Exam Nights" - Waleed</p>
                </section>

                <section className="contact-info">
                <h2>Contact Us</h2>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Open nightly from 10 pm to 4 AM</li>
                    </ul>
                </section>
            </div>
    );
}

export default LandingPage;