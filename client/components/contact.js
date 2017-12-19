import '../css/contact.scss'
import React from 'react'
import { connect } from 'react-redux'

const Contact = (props) => {
  const { sendMessage } = props;

  emailjs.init("user_QzNJyvLevWuoARNVSpCc2");

  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact">
        <form onSubmit={sendMessage}>
          <h2>Get In Touch</h2>
          <label>Name</label>
          <input name="name" type="text" />
          <label>Email</label>
          <input name="email" type="email" />
          <label>Message</label>
          <textarea name="message" rows="5"></textarea>
          <input type="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
    sendMessage(e) {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;

      emailjs.send("gmail", "portfolio", { name, email, message })
      .then(res => alert(`Message successfully sent.\nName:${name}\nEmail:${email}\nMessage:${message}`))
      .catch(err => alert('Uh oh! Something went wrong. Try emailing me directly at damian.michniak29@gmail.com'))
    }
  }
}

export default connect(mapState, mapDispatch)(Contact)
