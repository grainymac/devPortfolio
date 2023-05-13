import React, { useRef } from 'react'
import './Contact.ssss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const contactForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_smkz3xo','template_j34068y', form.current, '5zEiwTNMl_2Xx4cpQ')
            .then(() => {
              alert('Message successfully sent!')
              window.location.reload(false)
              },() => {
              alert('Failed to send the message, please try again!')
              }
            )
  }

  return (
    <>
      <div className='contact-page'>
        <p className='contact-intro-text'>

        </p>
        <div className='contact-form'>
          <form ref={contactForm} onSubmit={ sendEmail } ></form>
        </div>
      </div>
    </>
  )
}

export default Contact