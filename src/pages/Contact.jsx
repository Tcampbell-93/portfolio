import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!name) {
      setErrorMessage('Name is required.');
      return;
    }
    if (!message) {
      setErrorMessage('Message is required.');
      return;
    }

    // Reset form fields and error message on successful form submission
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container text-center">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit" className="btn-submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div>
        <h3>Email: tcampbell_93@hotmail.com</h3>
        <h3>Phone: (661) 972-0295</h3>
      </div>
    </div>
  );
}