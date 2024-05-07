import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!name) {
      setErrorMessage('Must contain your name.');
      return;
    }
    if (!message) {
      setErrorMessage('Must contain a message.')
    }

    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholer='Email'
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
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <h3>
        Email: tcampbell_93@hotmail
        Phone: (661) 972-0295
      </h3>
    </div>
  )
}
