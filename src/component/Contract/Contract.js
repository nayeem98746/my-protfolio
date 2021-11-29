import emailjs from 'emailjs-com';

import React from 'react';
import  { useRef } from 'react';

import "./Contract.css"

const Contract = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_dth1pai', form.current, 'user_5r3IJEZNxEuOSWPgOFFVQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   
    return (
        <div>
           <form className="from-style" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br /><br />
      <label>Email</label>
      <input type="email" name="user_email" /><br /><br />
      <label>Message</label>
      <textarea name="message" /><br /><br />
      <label>subject</label>
      <textarea name="subject" /><br /><br />
      <input  style={{
    backgroundColor:"pink",
    borderRadius:"25px",
    color:"whitesmoke"
  }}   type="submit" value="Send" />
    </form>
           
        </div>
    );
};

export default Contract;