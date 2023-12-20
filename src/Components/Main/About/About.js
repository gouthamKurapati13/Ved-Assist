import "./About.css"

function About() {
    return (
        <>
            <section id="about">
                <h1>About Us</h1>
                <div className="about-desc">
                    <h3>What is VedAssist?</h3>
                    <p>
                        Discover the transformative power of Ayurvedic medicine and holistic
                        healing at VedAssist. Explore our extensive collection of authentic
                        remedies, personalized recommendations, and innovative ML predictions.
                        Revolutionize your health and well-being today.
                    </p>
                </div>
                <div className="services">
                    <div className="about-desc">
                        <h3>The Predictor</h3>
                        <p>
                            At VedAssist, we offer a
                            comprehensive range of
                            personalized Ayurvedic remedies.
                            Our state-of-the-art Machine
                            Learning algorithms, provides
                            accurate predictions and
                            recommendations based on the
                            user's symptoms and preferences.
                        </p>
                        <button>Predict Now</button>
                    </div>
                    <div className="about-desc">
                        <h3>The Shop</h3>
                        <p>
                            With our extensive collection of
                            authentic Ayurvedic medicines, you
                            can explore the benefits and
                            applications of each product.
                            Our platform combines the wisdom
                            of centuries-old herbal formulas,
                            effective treatments, and the
                            convenience of modern e-commerce.
                        </p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;