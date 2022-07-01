import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import SuccessCard from './SuccessCard'

import { MOTION_VARIANTS, SECTION_VARIANTS } from '../../variants/MOTION_VARIANTS'

const encode = (data) => {
    // Post
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const ContactForm = () => {

    const motionControls = useAnimation()
    const [section, sectionInView] = useInView()
    useEffect(() => {
        if (sectionInView) {
            motionControls.start('animate')
        }
    }, [motionControls, sectionInView])

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('There was a problem trying to send your message. Please try again.')

    const { name, email, message } = formState

    const handleSubmit = (e) => {
        setSending(true)
        const payload = encode({ "form-name": "zacrogers.works", ...formState })

        fetch("/", {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: payload
        })
            .then(() => {
                setSent(true)
                setSending(false)
                setTimeout(() => {
                    setFormState({ name: '', email: '', message: '' })
                }, 600)
            })
            .catch(err => {
                setError(err.toString())
                setIsError(true)
                console.log(err)
            })
        e.preventDefault()
    }

    const handleChange = e => setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

    return (
        <motion.div className="contact-form-container"
            ref={section}
            variants={MOTION_VARIANTS.fadeUp}
            initial="initial"
            animate={motionControls}
        >
            <motion.p variants={SECTION_VARIANTS.fadeUpP}>Like what you see? Let's chat.</motion.p>
            <SuccessCard setSent={setSent} sending={sending} sent={sent} />
            <motion.form
                name="ZacRogers.Works"
                data-netlify="true"
                method="POST"
                className="contact-form"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {
                    isError && (
                        <div className="contact-form-error">
                            <p>👽 Error: {error} </p>
                        </div>
                    )
                }
                <motion.div variants={SECTION_VARIANTS.fadeUpElement} className="input-container">
                    <input className="contact-form-input" placeholder=" " type="name" id="name" name="name" onChange={handleChange} value={name}/>
                    <label htmlFor="name">Name</label>
                </motion.div>
                <motion.div variants={SECTION_VARIANTS.fadeUpElement} className="input-container">
                    <input className="contact-form-input" placeholder=" " type="email" id="email" name="email" onChange={handleChange} value={email}/>
                    <label htmlFor="email">Email</label>
                </motion.div>
                <motion.div variants={SECTION_VARIANTS.fadeUpElement} className="input-container">
                    <textarea className="contact-form-input" placeholder=" " id="message" name="message" onChange={handleChange} value={message}/>
                    <label htmlFor="message">Message</label>
                </motion.div>
                <motion.button variants={SECTION_VARIANTS.fadeUpElement} className="submit-button" type="submit" >
                    Submit
                    <svg className="submit-arrow" xmlns="http://www.w3.org/2000/svg" width="18.752" height="18.277" viewBox="0 0 18.752 18.277">
                        <path fill="currentColor" id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M7.973,3.871,8.9,2.942a1,1,0,0,1,1.419,0l8.136,8.132a1,1,0,0,1,0,1.419l-8.136,8.136a1,1,0,0,1-1.419,0L7.973,19.7a1.006,1.006,0,0,1,.017-1.436l5.043-4.8H1a1,1,0,0,1-1-1V11.116a1,1,0,0,1,1-1H13.033L7.99,5.307A1,1,0,0,1,7.973,3.871Z" transform="translate(0 -2.647)" />
                    </svg>
                </motion.button>
            </motion.form>
        </motion.div>
    )
}

export default ContactForm