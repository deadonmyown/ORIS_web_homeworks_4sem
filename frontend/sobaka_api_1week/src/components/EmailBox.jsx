import { useState } from "react";

const EmailBox = () => {
    const [toSend, setToSend] = useState({
        email: '',
        subject: '',
        message: '',
      });

      const onSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 
                    'Content-Type': 'application/json' },
            body: JSON.stringify({'email': toSend.email, 'subject': toSend.subject, 'message': toSend.message})
        };
        fetch('https://localhost:7091/email/sendEmail', requestOptions)
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <form>
            <input
                type='text'
                name='email'
                placeholder='Your email'
                value={toSend.email}
                onChange={handleChange}
            />
            <input
                type='text'
                name='subject'
                placeholder='Your subject'
                value={toSend.subject}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
            />
            <input type="button" value="Submit" onClick={onSubmit}/>
        </form>
    );
}

export default EmailBox;