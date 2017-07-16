import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './SneakerForm.scss';

const FieldsMap = {
  brand: 'Brand',
  style: 'Style',
  size: 'Size',
  upc: 'UPC'
};

const createField = (name, placeholder) => {
  return (
    <div key={name} className='form-group'>
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
  const { handleSubmit, pristine, submitting, initialValues, onCancel } = props;

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <div>
        {Object.keys(FieldsMap).map((key) => {
          return createField(key, FieldsMap[key]);
        })}
      </div>
      <br />
      <div className='pull-right'>
        <button
          className='btn btn-default cancelBtn'
          onClick={onCancel}
        >
          CANCEL
        </button>
        <button
          type='submit'
          disabled={pristine || submitting}
          className='btn btn-primary'
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'sneaker'
})(SneakerForm);
