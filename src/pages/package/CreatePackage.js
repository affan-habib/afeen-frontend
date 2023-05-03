import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomTextField from "../../components/CustomTextField";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import FormWrapper from "components/CustomCard";
import CustomCheckbox from "components/CustomCheckbox";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  startDay: Yup.date().required("Required"),
  endDay: Yup.date().required("Required"),
  price: Yup.number()
    .required("Required")
    .min(0, "Price must be a positive number"),
  max_job_posts: Yup.number()
    .required("Required")
    .min(0, "Max job posts must be a positive number"),
  featured_job_posts: Yup.boolean().required("Required"),
  resume_database_access: Yup.boolean().required("Required"),
  priority_support: Yup.boolean().required("Required"),
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
          max_job_posts: 0,
          featured_job_posts: false,
          resume_database_access: false,
          priority_support: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item md={4} xl={3}>
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
              <Grid item md={4} xl={3}>
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

              <Grid item md={4} xl={3}>
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

              <Grid item md={4} xl={3}>
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
              <Grid item md={4} xl={3}>
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

              <Grid item md={4} xl={3}>
                <Field name="max_job_posts">
                  {({ field, meta }) => (
                    <CustomTextField
                      {...field}
                      inputLabel="Max Job Posts"
                      type="number"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item md={4} xl={3}>
                <Field name="featured_job_posts">
                  {({ field }) => (
                    <CustomCheckbox
                      label="Featured Job Posts"
                      checked={field.value}
                      onChange={field.onChange}
                    />
                  )}
                </Field>

                <Grid item md={4} xl={3}>
                  <Field name="resume_database_access">
                    {({ field }) => (
                      <CustomCheckbox
                        label="Resume Database Access"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid>
                  <Field name="priority_support">
                    {({ field }) => (
                      <CustomCheckbox
                        label="Priority Support"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  </Field>
                </Grid>
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
