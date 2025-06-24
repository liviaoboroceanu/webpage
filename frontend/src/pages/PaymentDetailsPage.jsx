import React from 'react';
import { useParams } from 'react-router-dom'; // To get plan info from URL

const PaymentDetailsPage = () => {
  const { planName } = useParams(); // Get planName from URL if passed

  return (
    <div className="page-container"> {/* Reuse page-container from other placeholder pages */}
      <h1 className="page-title">Enter Payment Details</h1>
      {planName && <p className="text-center text-lg mt-4">You have selected the: <span className="font-bold text-yellow-400">{decodeURIComponent(planName)}</span></p>}
      <p className="mt-4 text-center">
        {/* Payment form will go here */}
        This is where the payment form would be.
      </p>
    </div>
  );
};

export default PaymentDetailsPage;