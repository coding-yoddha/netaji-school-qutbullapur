import Form from "../components/layout/form";

const AdmissionsPage: FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-8">
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

export default AdmissionsPage;
