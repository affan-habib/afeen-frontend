import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomTextField from "../../components/CustomTextField";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import FormWrapper from "components/FormWrapper";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  startDay: Yup.date().required("Required"),
  endDay: Yup.date().required("Required"),
  price: Yup.number()
    .required("Required")
    .min(0, "Price must be a positive number"),
});

const CreatePackage = () => {
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("http://localhost:5000/packages", values);
      setSuccess(true);
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormWrapper label="Add New Package">
      <Formik
        initialValues={{
          name: "",
          description: "",
          startDay: "12/12/1992",
          endDay: "12/12/1994",
          price: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Field name="name">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="Name"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item md={4}>
                <Field name="description">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="Description"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item md={4}>
                <Field name="price">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="Price"
                      type="number"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item md={4}>
                <Field name="startDay">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="Start Day"
                      type="date"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item md={4}>
                <Field name="endDay">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="End Day"
                      type="date"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
            <Button
              sx={{ my: 2 }}
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Create Package
            </Button>
            {success && <p>Package created successfully!</p>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CreatePackage;
