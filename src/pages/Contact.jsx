import React from "react"
import Form from "../components/Form"
import ContentHeader from "../components/ContentHeader"
import { pageContent } from "../const/pageContent"

function Contact() {
    const { title, subtitle } = pageContent[2]

    return (
        <section className="contact pad" id="contact">
            <ContentHeader title={title} subtitle={subtitle} />
            <Form />
        </section>
    )
}

export default Contact
