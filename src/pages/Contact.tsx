import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { validationSchema } from '../utils/Schema'

const EMAILJS_SERVICE_ID = "service_us1s3ll";
const EMAILJS_TEMPLATE_ID = "template_qcd4h7j";
const EMAILJS_PUBLIC_KEY = "3KaWlGfqiidm4CWPJ";

export default function Contact() {
  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
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
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email.", error);
      alert("Failed to send email.");
    }
  };
  return (
    <section className="bg-very-light-gray px-16 pt-28 pb-8">
      <div className="mb-5">
        <h1 className="font-bold text-4xl text-center mb-5">CONTACT</h1>
        <h5 className="text-center text-xl">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h5>
      </div>
      <section className="flex justify-center">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white drop-shadow rounded w-225 p-10">
            <label className="mb-5">
              <span className="block font-semibold text-sm mb-2">Name</span>

              <div className="bg-very-very-light-gray rounded w-200 p-5">
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 font-semibold"
                />
                <Field
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  className="block bg-very-very-light-gray outline-0 rounded font-semibold h-6 w-187.5"
                />
              </div>
            </label>

            <label className="mb-5">
              <span className="block font-semibold text-sm mb-2">Email</span>

              <div className="bg-very-very-light-gray rounded w-200 p-5">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 font-semibold"
                />
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  className="block bg-very-very-light-gray outline-0 rounded font-semibold h-6 w-187.5"
                />
              </div>
            </label>

            <label className="mb-5">
              <span className="block font-semibold text-sm mb-2">Message</span>
              <div className="bg-very-very-light-gray rounded w-200 p-5">
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 font-semibold"
                />
                <Field
                  name="message"
                  as="textarea"
                  autoComplete="off"
                  placeholder="Enter Your Message"
                  className="block bg-very-very-light-gray outline-0 rounded font-semibold h-32 w-187.5"
                />
              </div>
            </label>
            <div className="flex justify-end pr-5">
              <button
                type="submit"
                className="bg-vivid-yellow rounded px-16 py-3 font-bold"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </section>
  );
}
