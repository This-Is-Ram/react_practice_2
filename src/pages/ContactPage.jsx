import { Form } from "react-router-dom";

export const getFormData = async ({ request }) => {
  try {
    const res = await request.formData();
    console.log("this is res : ", res);

    const data = Object.fromEntries(res);
    console.log("this is data : ", data);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const Contact = () => {
  return (
    <>
      <Form method="POST" action="/contact">
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your name :"
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email :"
        />
        <label htmlFor="message"></label>
        <textarea
          name="message"
          id="message"
          cols={5}
          maxLength={500}
          placeholder="Message"
        ></textarea>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
