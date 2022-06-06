import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <p>Send me a message to discuss a project or just to nerd out.</p>
            <form
                name="ZacRogers.Works"
                data-netlify="true"
                method="POST"
                className="contact-form"
                data-netlify-honeypot="bot-field"
                onSubmit={""}
            >
                {/* {
                        isError && (
                            <div className="contact-form-error">
                                <p>Error: {error} </p>
                            </div>
                        )
                    } */}
                <input type="hidden" name="form-name" value="ZacRogers.Works" />
                <div className="input-container">
                    <input className="contact-form-input" placeholder=" " type="name" id="name" name="name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-container">
                    <input className="contact-form-input" placeholder=" " type="email" id="email" name="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-container">
                    <textarea className="contact-form-input" placeholder=" " id="message" name="message" />
                    <label htmlFor="message">Message</label>
                </div>
                <button className="button" type="submit" >
                    Submit
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.752" height="18.277" viewBox="0 0 18.752 18.277">
                        <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M7.973,3.871,8.9,2.942a1,1,0,0,1,1.419,0l8.136,8.132a1,1,0,0,1,0,1.419l-8.136,8.136a1,1,0,0,1-1.419,0L7.973,19.7a1.006,1.006,0,0,1,.017-1.436l5.043-4.8H1a1,1,0,0,1-1-1V11.116a1,1,0,0,1,1-1H13.033L7.99,5.307A1,1,0,0,1,7.973,3.871Z" transform="translate(0 -2.647)" />
                    </svg>

                </button>
            </form>
        </div>
    )
}

export default ContactForm