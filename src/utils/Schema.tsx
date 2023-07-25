import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string().email("Invalid email").required("Your Email is required"),
  message: Yup.string().required("Your Message is required"),
});
