import React from 'react';
import './Contact.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <h2>Get in touch</h2>
            <p>
                I'd love to hear from you! Feel free to get in touch if you have a project idea, a question, or just want to say hello.
                I'm passionate about web development and would happily discuss how I can help bring your web vision to life.
                Looking forward to connecting with you!
            </p>
            <div className='links'>
            <a href="https://www.quora.com/profile/Pallavi-Penta/"><img src="https://gogeticons.com/frontend/web/icons/data/2/0/9/4/1/3/quora_logo_media_modern_sound_web_icon_512.png" alt="Quora Logo" /></a>
            <a href="https://github.com/PallaviPenta"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="Gmail Logo" /></a>
            <a href="https://www.quora.com/profile/Pallavi-Penta/"><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="Gmail Logo" /></a>

              <a href="mailto:21pa1a1291@vishnu.edu.in"><img src="https://png.pngtree.com/template/20190725/ourmid/pngtree-gmail-logo-png-image_282635.jpg" alt="Gmail Logo" /></a>
            </div>
        </div>
    );
};

export default ContactSection;
