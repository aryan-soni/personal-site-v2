import React from "react";
{
  /* scroll animation */
}
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
{
  /* icons */
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className='Contact' id='contact'>
      {/* scroll animation */}
      <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container gradient mt-5 py-3' id='contactContainer'>
          <h4 class='font-weight-bold'>Contact Me</h4>
          {/* formspree for form; styling w/ bootstrap */}
          <form
            id='fs-frm'
            name='simple-contact-form'
            accept-charset='utf-8'
            action='https://formspree.io/mail.aryansoni@gmail.com'
            method='post'
          >
            <fieldset id='fs-frm-inputs'>
              <div class='form-group'>
                <label for='full-name'>Name</label>
                <input
                  type='text'
                  name='name'
                  class='form-control'
                  id='full-name'
                  placeholder='John Smith'
                  required='required'
                />
              </div>
              <div class='form-group'>
                <label for='email-address'>Email Address</label>
                <input
                  type='email'
                  name='_replyto'
                  class='form-control'
                  id='email-address'
                  placeholder='email@domain.tld'
                  required='required'
                />
              </div>
              <div class='form-group'>
                <label for='message'>Message</label>
                <textarea
                  name='message'
                  class='md-textarea form-control'
                  id='message'
                  placeholder='Message goes here...'
                  required='required'
                ></textarea>
              </div>
              <input
                type='hidden'
                name='_subject'
                id='email-subject'
                value='Contact Form Submission'
              />
            </fieldset>
            <button type='submit' class='btn btn-primary' id='hover'>
              <span class='px-3'>
                Send &nbsp;
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Contact;
