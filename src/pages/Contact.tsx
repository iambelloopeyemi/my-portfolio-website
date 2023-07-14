import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string().email("Invalid email").required("Your Email is required"),
  message: Yup.string().required("Your Message is required"),
});

export default function Contact() {
  const handleSubmit = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="bg-very-light-gray px-16 pt-28 pb-8">
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
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block font-semibold text-sm mb-2"
              >
                Name
              </label>
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
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-semibold text-sm mb-2"
              >
                Email
              </label>
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
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block font-semibold text-sm mb-2"
              >
                Message
              </label>
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
            </div>
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
    </div>
  );
}
