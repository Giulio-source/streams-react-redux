import axios from "axios";
import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";

function StreamCreate() {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createStream(data));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    />
  );
}

export default StreamCreate;
