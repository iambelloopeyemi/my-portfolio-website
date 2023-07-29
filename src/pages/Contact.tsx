import Underline from "../components/Underline";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { validationSchema } from "../utils/validationSchema";
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
    <section id="contact" className="bg-anti-flash-white px-5 sm:px-16 md:px-20 lg:px-28 py-12 sm:py-14">
      <header className="text-center flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase">contact</h1>
        <Underline />
        <h5 className="text-base sm:text-xl font-medium">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h5>
      </header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-5 sm:p-10 md:p-16 lg:p-20 rounded drop-shadow mb-16">
          <label className="block mb-5">
            <span className="block text-sm lg:text-base font-semibold mb-2">Name</span>
            <div className="bg-seasalt p-3 lg:p-5 rounded">
              <Field
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Enter Your Full Name"
                className="block bg-seasalt h-4 sm:h-6 rounded outline-0 text-sm sm:text-base sm:font-medium lg:font-semibold"
              />
              <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
            </div>
          </label>
          <label className="block mb-5">
            <span className="block text-sm lg:text-base font-semibold mb-2">Email</span>
            <div className="bg-seasalt p-3 lg:p-5 rounded">
              <Field
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Enter Your Email"
                className="block bg-seasalt h-4 sm:h-6 rounded outline-0 text-sm sm:text-base sm:font-medium lg:font-semibold"
              />
              <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
            </div>
          </label>
          <label className="block mb-5">
            <span className="block text-sm lg:text-base font-semibold mb-2">Message</span>
            <div className="bg-seasalt p-3 lg:p-5 rounded">
              <ErrorMessage name="message" component="div" className="text-sm text-red-500" />
              <Field
                name="message"
                as="textarea"
                autoComplete="off"
                placeholder="Enter Your Message"
                className="block bg-seasalt h-28 lg:h-32 rounded outline-0 text-sm sm:text-base sm:font-medium lg:font-semibold"
              />
            </div>
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-violet-blue px-12 py-3 rounded hover:scale-105 text-white uppercase font-bold"
            >
              submit
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </section>
  );
}
