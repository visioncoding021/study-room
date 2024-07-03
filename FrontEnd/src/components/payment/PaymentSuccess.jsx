import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <GiConfirmed className="text-6xl text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600">Thank you for your payment. Your transaction has been completed successfully.</p>
        <p className="text-lg ">Go to <Link className="text-blue-600" to={"/"}>Home</Link></p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
