// CODE TAKEN AND ADJUSTED FROM 12-16
import { useState } from 'react';
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../components/utils/helpers';

function ContactPage() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid. If so, we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        // Then we check to see if the message is empty. If so, we set an error message to be displayed on the page.
        if (!message) {
            setErrorMessage('Message cannot be blank');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        // <div className="">
        //     <h2>Currently under construction. Come back soon!</h2>
        // </div>
        <div className="container text-center">
          {/* <h1>Hello {userName}</h1> */}
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="test"
              placeholder="message"
            />
            <button type="submit">Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
    );
}

export default ContactPage;
