import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='container'>
      <h1>Contact Me!</h1>
      <p>
        Have any feedback or questions? Feel me to contact me over these
        following channels
      </p>
      <ul className='contact'>
        <div className='link'>
          <li>
            <Image src='/contact-logos/facebook.png' height={25} width={25} />
            <a href='https://facebook.com'>Follow me on Facebook</a>
          </li>
        </div>
        <div className='link'>
          <li>
            <Image src='/contact-logos/instagram.png' height={25} width={25} />
            <a href='https://instagram.com'>Follow me on Instagram</a>
          </li>
        </div>
        <div className='link'>
          <li>
            <Image src='/contact-logos/linkedin.png' height={25} width={25} />
            <a href='https://linkedin.com'>Follow me on LinkedIn</a>
          </li>
        </div>
        <div className='link'>
          <li>
            <Image src='/contact-logos/youtube.png' height={25} width={25} />
            <a href='https://youtube.com'>Follow my Youtube channel</a>
          </li>
        </div>
      </ul>
      {/*build a contact form here */}
      <form>
        <input type='text' placeholder='Your name' />
        <br />
        <input type='text' placeholder='email address' />
        <br />
        <input type='text' placeholder='Subject line' />
        <br />
        <textarea id='message' cols='40' rows='10' placeholder='Message' />
        <input type='submit' value='Send message!' />
      </form>
    </div>
  );
};

export default Contact;
