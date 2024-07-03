import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
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
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Submit
        </button>
        <p className="mt-4 text-center">
          Click to <span className="text-blue-500 hover:text-blue-700 cursor-pointer">re-send</span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
