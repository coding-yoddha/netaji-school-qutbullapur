// components/Form.tsx

import { FC, useState } from 'react';

interface FormProps {
  onSubmit: () => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    grade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(); // Call the parent function to handle form submission
    // Here you would usually send the formData to an API or backend
    console.log('Form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
          Desired Grade
        </label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
};

export default Form;
