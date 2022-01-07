import { createContext, useState, useEffect } from "react";

const CheckoutContext = createContext();

const CheckoutContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    epin: "",
    enum: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [checkedRadio, setChecked] = useState("e-money");
  const [modal,showModal] = useState(false)

  const validate = (form) => {
    let errors = {};
    const { name, email, phone, address, zipcode, city, country } = form;
    if (!name) {
      errors.name = true;
    }
    if (
      !email ||
      !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      errors.email = true;
    }
    if (!phone) {
      errors.phone = true;
      // No regex cauase I've no clue how American phone num's work.
    }
    if (!address) {
      errors.address = true;
    }
    if (!zipcode) {
      errors.zipcode = true;
    }
    if (!city) {
      errors.city = true;
    }
    if (!country) {
      errors.country = true;
    }
    if ((checkedRadio === "e-money") & !form.enum) {
      errors.enum = true;
    }
    if ((checkedRadio === "e-money") & !form.epin) {
      errors.epin = true;
    }
    return errors;
  };

  const preHandleSubmit = () => {
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(
    (e) => {
      if (isSubmitting) {
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          showModal(true);
          setSubmitting(false);
        } else {
          setSubmitting(false);
        }
      }
    },
    [errors, isSubmitting]
  );

  const values = {
    form,
    setForm,
    handleChange,
    errors,
    preHandleSubmit,
    checkedRadio,
    setChecked,
    modal
  };
  return (
    <CheckoutContext.Provider value={values}>
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContextProvider, CheckoutContext };
