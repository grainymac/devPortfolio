import React, { useRef } from 'react'
import './Contact.sass'
import emailjs from '@emailjs/browser'

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
      <div className='contact-page'>
        <p className='contact-intro-text'>
          Contact me
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
                <input type='submit' value='SEND'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact