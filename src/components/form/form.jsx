import React from 'react';
import { useForm } from 'react-hook-form';

const ReusableForm = ({ initialValues, onSubmit, children }) => {
  const { handleSubmit, register } = useForm({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { register })
      )}
      <button className="" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReusableForm;
