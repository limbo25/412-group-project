import React from "react";

const AboutUs = () => {
    return(
        <>
             <div className="about-us">
            <h1>About Late Night Pizza Shop</h1>
            <section className="story">
                <h2>Our Story</h2>
                <p>
                    The Late Night Pizza Shop was born from the realization of a group of students who understood the need for a delightful and convenient meal option after midnight. Our journey began in our college dorm, dreaming about a pizza place that would cater to students like us, working late into the night.
                </p>
            </section>
            <section className="vision-mission">
                <h2>Vision & Mission</h2>
                <p>
                    Our vision is to be the go-to place for students seeking quality, delicious pizza during the late hours. Our mission is to serve our customers with not just pizza, but a slice of joy and comfort during their demanding academic endeavors.
                </p>
            </section>
            <section className="contact-info">
                <h2>Contact Information</h2>
                <p>
                    Feel free to reach out to us!
                </p>
                <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: contact@latenightpizza.com</li>
                    <li>Address: 123 Pizza Lane, College Town, USA</li>
                </ul>
            </section>
        </div>
        </>
    );
}

export default AboutUs; 