import Underline from "../components/Underline";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { validationSchema } from "../utils/Schema";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAILJS_SERVICE_ID = "service_us1s3ll";
const EMAILJS_TEMPLATE_ID = "template_qcd4h7j";
const EMAILJS_PUBLIC_KEY = "3KaWlGfqiidm4CWPJ";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const handleSubmit = async (
    values: ContactFormValues,
    formikHelpers: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully!", response);
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      formikHelpers.resetForm();
    } catch (error) {
      console.error("Failed to send email.", error);
      toast.error("Failed to send email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section className="bg-anti-flash-white px-20 pt-32 pb-16">
      <header className="section-header">
        <h1 className="heading">contact</h1>
        <Underline />
        <h5 className="subheading">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h5>
      </header>
      <div className="flex justify-center">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white p-10 rounded drop-shadow">
            <label className="block mb-5">
              <span className="label">Name</span>
              <div className="input-wrapper">
                <Field
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Full Name"
                  className="input"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
            </label>
            <label className="block mb-5">
              <span className="label">Email</span>
              <div className="input-wrapper">
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  className="input"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </label>
            <label className="block mb-5">
              <span className="label">Message</span>
              <div className="input-wrapper">
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
                <Field
                  name="message"
                  as="textarea"
                  autoComplete="off"
                  placeholder="Enter Your Message"
                  className="block w-[45rem] h-32 bg-seasalt rounded outline-0 font-semibold"
                />
              </div>
            </label>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-violet-blue px-12 py-3 rounded hover:scale-105 text-white uppercase font-bold"
              >
                submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
}
