import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if(!name || !email || !textarea){
      alert("Please add all the fields");
      return;
    }
    axios.post("/contact",{ name, email, textarea }).catch(e=>{
      console.log(e);
      return;
    })
    console.log("Form submitted with values: ", { name, email, textarea });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="space-y-4 bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <div>
          <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="user-name"
            placeholder="Enter your name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="user-email"
            placeholder="Enter your Email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="user-message" className="block text-sm font-medium text-gray-700">Message :</label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            id="user-message"
            placeholder="Enter your message"
            name="message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
