import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FieldsMap = {
  brand: 'Brand',
  style: 'Style',
  size: 'Size',
  upc: 'UPC'
};

const createField = (name, placeholder) => {
  return (
    <div key={name}>
      <Field
        name={name}
        component='input'
        type='text'
        placeholder={placeholder}
        className='form-control'
      />
    </div>
  );
};

const SneakerForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {Object.keys(FieldsMap).map((key) => {
          return createField(key, FieldsMap[key]);
        })}
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'sneaker'
})(SneakerForm);
