import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, Grid, IconButton } from "@mui/material";
import { DeleteColumnOutlined } from "@ant-design/icons";
import CustomTextField from "components/CustomTextField";
import CustomCard from "components/CustomCard";
import { useDispatch } from "react-redux";
import { callApi } from "store/reducers/apiSlice";
import { UrlBuilder } from "helpers/UrlBuilder";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  about: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  educations: Yup.array().of(Yup.string().required("Required")),
  skills: Yup.array().of(Yup.string().required("Required")),
});

const initialValues = {
  title: "",
  about: "",
  category: "",
  educations: [""],
  skills: [""],
};

export default function AddResume() {
  const dispatch = useDispatch();
  return (
    <CustomCard label="Add New Resume">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: UrlBuilder.localHostApi("api/v1/resume"),
              parameters: {
                method: "POST",
                body: JSON.stringify(values),
              },
              output: "addResume",
            })
          );
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item md={6} xl={4}>
                <Field
                  name="title"
                  as={CustomTextField}
                  inputLabel="Title"
                  fullWidth
                  error={errors.title && touched.title}
                  helperText={errors.title && touched.title && errors.title}
                />
              </Grid>
              <Grid item md={6} xl={4}>
                <Field
                  name="category"
                  as={CustomTextField}
                  inputLabel="Category"
                  fullWidth
                  error={errors.category && touched.category}
                  helperText={
                    errors.category && touched.category && errors.category
                  }
                />
              </Grid>
              <Grid item md={12} xl={4}>
                <Field
                  name="about"
                  as={CustomTextField}
                  inputLabel="about"
                  fullWidth
                  multiline
                  rows={4}
                  error={errors.about && touched.about}
                  helperText={
                    errors.about &&
                    touched.about &&
                    errors.about
                  }
                />
              </Grid>

              <Grid item md={6} xl={4}>
                <FieldArray name="educations">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.educations.length > 0 &&
                        values.educations.map((ingredient, index) => (
                          <Grid key={index} display="flex" alignItems="center">
                            <Grid flex={1}>
                              <Field
                                name={`educations.${index}`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel={`Ingredient ${index + 1}`}
                                helperText={
                                  errors.educations &&
                                  errors.educations[index] &&
                                  touched.educations &&
                                  touched.educations[index] &&
                                  errors.educations[index]
                                }
                              />
                            </Grid>
                            <Grid ml={2}>
                              <IconButton
                                onClick={() => remove(index)}
                                disabled={values.educations.length === 1}
                              >
                                <DeleteColumnOutlined />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                      <Grid item md={6} xl={4}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => push("")}
                        >
                          Add Ingredient
                        </Button>
                      </Grid>
                    </div>
                  )}
                </FieldArray>
              </Grid>
              <Grid item md={6} xl={4}>
                <FieldArray name="skills">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.skills.length > 0 &&
                        values.skills.map((ingredient, index) => (
                          <Grid key={index} display="flex" alignItems="center">
                            <Grid flex={1}>
                              <Field
                                name={`skills.${index}`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel={`Instuction ${index + 1}`}
                                helperText={
                                  errors.skills &&
                                  errors.skills[index] &&
                                  touched.skills &&
                                  touched.skills[index] &&
                                  errors.skills[index]
                                }
                              />
                            </Grid>
                            <Grid ml={2}>
                              <IconButton
                                onClick={() => remove(index)}
                                disabled={values.skills.length === 1}
                              >
                                <DeleteColumnOutlined />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                      <Grid item md={6} xl={4}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => push("")}
                        >
                          Add Next skills
                        </Button>
                      </Grid>
                    </div>
                  )}
                </FieldArray>
              </Grid>
              <Button type="submit">Submit</Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </CustomCard>
  );
}
