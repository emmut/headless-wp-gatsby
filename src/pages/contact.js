import React from 'react'
import Layout from '../components/Layout'
import { ContactForm } from '../components/ContactForm'

export default function Contact() {
  return (
    <Layout headerText="Contact Us">
      <p>Contact me</p>
      <ContactForm />
    </Layout>
  )
}
