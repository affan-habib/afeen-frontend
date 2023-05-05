import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, Grid, IconButton } from "@mui/material";
import { DeleteColumnOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomTextField from "components/CustomTextField";
import CustomCard from "components/CustomCard";
import { useDispatch } from "react-redux";
import { callApi } from "store/reducers/apiSlice";
import { UrlBuilder } from "helpers/UrlBuilder";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  about: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  // educations: Yup.array(),
  skills: Yup.array().of(Yup.string().required("Required")),
});

const initialValues = {
  title: "",
  about: "",
  educations: [
    {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      graduationDate: "12/12/2014",
    },
  ],
  category: "",
  skills: [""],
};

export default function AddResume() {
  const dispatch = useDispatch();
  return (
    <CustomCard inputLabel="Add New Resume">
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
        {({ values, errors, touched, setFieldValue }) => (
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
                  helperText={errors.about && touched.about && errors.about}
                />
              </Grid>

              <Grid item md={12} xl={4}>
                <FieldArray name="educations">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.educations.length > 0 &&
                        values.educations.map((education, index) => (
                          <Grid
                            key={index}
                            container
                            alignItems="center"
                            spacing={2}
                          >
                            <Grid item xs={12} md={3}>
                              <Field
                                name={`educations.${index}.institution`}
                                as={CustomTextField}
                                sx={{ mb: 2 }}
                                fullWidth
                                inputLabel={`Institution ${index + 1}`}
                                error={
                                  touched.educations?.[index]?.institution &&
                                  Boolean(
                                    errors.educations?.[index]?.institution
                                  )
                                }
                                helperText={
                                  touched.educations?.[index]?.institution &&
                                  errors.educations?.[index]?.institution
                                }
                              />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <Field
                                name={`educations.${index}.degree`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel="Degree"
                                error={
                                  touched.educations?.[index]?.degree &&
                                  Boolean(errors.educations?.[index]?.degree)
                                }
                                helperText={
                                  touched.educations?.[index]?.degree &&
                                  errors.educations?.[index]?.degree
                                }
                              />
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Field
                                name={`educations.${index}.fieldOfStudy`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel="Field of Study"
                                error={
                                  touched.educations?.[index]?.fieldOfStudy &&
                                  Boolean(
                                    errors.educations?.[index]?.fieldOfStudy
                                  )
                                }
                                helperText={
                                  touched.educations?.[index]?.fieldOfStudy &&
                                  errors.educations?.[index]?.fieldOfStudy
                                }
                              />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                              <CustomTextField
                                autoOk
                                fullWidth
                                disableFuture
                                format="MM/dd/yyyy"
                                inputVariant="outlined"
                                type="date"
                                inputLabel="Graduation Date"
                                name={`educations.${index}.graduationDate`}
                                value={
                                  values.educations[index].graduationDate ||
                                  null
                                }
                                onChange={(date) =>
                                  setFieldValue(
                                    `educations.${index}.graduationDate`,
                                    date
                                  )
                                }
                                error={
                                  touched.educations?.[index]?.graduationDate &&
                                  Boolean(
                                    errors.educations?.[index]?.graduationDate
                                  )
                                }
                                helperText={
                                  touched.educations?.[index]?.graduationDate &&
                                  errors.educations?.[index]?.graduationDate
                                }
                              />
                            </Grid>
                            <Grid item>
                              <IconButton
                                onClick={() => remove(index)}
                                disabled={values.educations.length === 1}
                              >
                                <DeleteOutlined />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() =>
                            push({
                              institution: "",
                              degree: "",
                              fieldOfStudy: "",
                              graduationDate: '12/12/2018',
                            })
                          }
                        >
                          Add Education
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
                                <DeleteOutlined />
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
            </Grid>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </CustomCard>
  );
}
