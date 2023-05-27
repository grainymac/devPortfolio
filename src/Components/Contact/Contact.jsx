import React, { useRef } from 'react'
import './Contact.sass'
import emailjs from '@emailjs/browser'
import 'animate.css'


const Contact = () => {
  const form = useRef()

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
      <div className='contact-page' id='contact'>
      <h2 className='animate__pulse contact-title'>Contact</h2>
        <p className='contact-intro-text'>
            I am free and available for full-time, part-time, and contract positions! I am also interested in freelance opportunities, especially creative and ambitious projects. If you have any other requests or questions, please do not hesitate to get in touch with me via the form below.
        </p>
        <div className='contact-form'>
          <form ref={form} onSubmit={ sendEmail } >
          <ul>
            <li className='half'>
              <input type='text' name='name' placeholder='Name' required />
            </li>
            <li className='half'>
              <input type='email' name='email' placeholder='E-mail' required />
            </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <input classname='submit-button' type='submit' value='SEND'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact