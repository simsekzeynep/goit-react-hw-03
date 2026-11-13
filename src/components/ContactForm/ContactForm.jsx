import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .trim()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number cannot exceed 50 characters")
    .required("Number is required"),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name.trim(),
      number: values.number.trim(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} noValidate>
        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.input}
            id={nameId}
            name="name"
            type="text"
            placeholder="Enter a name"
            autoComplete="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.input}
            id={numberId}
            name="number"
            type="tel"
            placeholder="Enter a phone number"
            autoComplete="tel"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
