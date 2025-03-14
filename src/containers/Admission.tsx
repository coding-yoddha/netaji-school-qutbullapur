"use client"
import { useState } from 'react';
import Form from "../components/layout/form";

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 lg:px-20">
      <h1 className="text-4xl font-bold mb-6 font-extrabold text-gray-900 leading-tight">School Admissions</h1>
      {!submitted ? (
        <>
          <p className="text-lg mb-4 font-extrabold text-gray-900 leading-tight">
            Welcome to the school admissions page. Please fill out the form below to apply for enrollment.
          </p>
          <Form onSubmit={handleFormSubmit} />
        </>
      ) : (
        <div className="text-xl text-green-600 font-extrabold text-gray-900 leading-tight">
          <p>Your application has been successfully submitted. We will contact you soon.</p>
        </div>
      )}
    </div>
  );
};

