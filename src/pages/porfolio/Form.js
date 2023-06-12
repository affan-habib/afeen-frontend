import React from "react";
import { Formik, Form } from "formik";
import { Button, Grid } from "@mui/material";
import usePostData from "hooks/usePostData";
import SnackbarAlert from "components/SnackbarAlert";
import getSchema from "./getSchema";
import MyInput from "components/MyInput";
import MainCard from "components/MainCard";

const CreateForm = () => {
  const { validationSchema, initialValues } = getSchema();
  const { successMessage, isSnackbarOpen, postData, handleCloseSnackbar } = usePostData();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await postData("form", values);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainCard title="Add Form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <MyInput label="Field 1" name="field1" />
                <MyInput label="Field 2" name="field2" type="checkbox" />
                <MyInput label="Field 3" name="field3" type="checkbox" />
                <MyInput
                  label="Field 4"
                  name="field4"
                  type="select"
                  options={[
                    { value: "Option 1", label: "Option 1" },
                    { value: "Option 2", label: "Option 2" },
                    { value: "Option 3", label: "Option 3" },
                  ]}
                />
                <MyInput
                  label="Field 5"
                  name="field5"
                  type="select"
                  options={[
                    { value: "Option A", label: "Option A" },
                    { value: "Option B", label: "Option B" },
                    { value: "Option C", label: "Option C" },
                  ]}
                />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <SnackbarAlert
          open={isSnackbarOpen}
          message={successMessage}
          onClose={handleCloseSnackbar}
        />
      </MainCard>
    </>
  );
};

export default CreateForm;
