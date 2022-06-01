import React, { useEffect, forwardRef } from 'react'
import ContactForm from '../elements/ContactForm'
import Footer from './Footer'

const Contact = forwardRef((props, ref) => {

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div>
            <h2>Contact</h2>
            </div>
            <ContactForm />
            <Footer />
        </section>
    )
})

export default Contact