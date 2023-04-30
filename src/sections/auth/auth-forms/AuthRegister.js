import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = async (values) => {
    try {
      // Call the register mutation with the form data
      const { data } = await registerUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });

      // Redirect to the login page
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="username"
            as={TextField}
            label="Username"
            margin="normal"
            fullWidth
            error={touched.username && !!errors.username}
            helperText={touched.username && errors.username}
          />
          <Field
            name="email"
            as={TextField}
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <Field
            name="password"
            as={TextField}
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
