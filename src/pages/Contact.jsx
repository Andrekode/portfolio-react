import React from 'react'

function Contact() {
    return (
        <section className="contact pad" id="contact">
            <div className="contact-head">
                <h2 className="contact-head__title">Contact</h2>
                <p className="contact-head__subtitle">
                    If you would like to contact me, you can reach me here.
                </p>
            </div>

            <div className="form-container">
                <form action="/" className="contact-form">
                    <label className="contact-form__label" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        className="contact-form__input-field contact-form__input-field--bg"
                        type="text"
                        name="name"
                        placeholder="Enter name"
                    />
                    <label className="contact-form__label" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        id="subject"
                        className="contact-form__input-field contact-form__input-field--bg"
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                    />
                    <label className="contact-form__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        className="contact-form__input-field contact-form__input-field--bg"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                    />
                    <label className="contact-form__label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="contact-form__input-field contact-form__input-field--textarea-size contact-form__input-field--bg"
                        name="message"
                        placeholder="Enter message"
                    ></textarea>
                    <input
                        className="contact-form__button"
                        id="submit-btn"
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact
