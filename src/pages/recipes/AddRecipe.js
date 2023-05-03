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
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  ingredients: Yup.array().of(Yup.string().required("Required")),
  instructions: Yup.array().of(Yup.string().required("Required")),
});

const initialValues = {
  title: "",
  description: "",
  category: "",
  ingredients: [""],
  instructions: [""],
};

export default function AddRecipe() {
  const dispatch = useDispatch();
  return (
    <CustomCard label="Add New Recipe">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: UrlBuilder.localHostApi("api/v1/recipe"),
              parameters: {
                method: "POST",
                body: JSON.stringify(values),
              },
              output: "addRecipe",
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
                  name="description"
                  as={CustomTextField}
                  inputLabel="Description"
                  fullWidth
                  multiline
                  rows={4}
                  error={errors.description && touched.description}
                  helperText={
                    errors.description &&
                    touched.description &&
                    errors.description
                  }
                />
              </Grid>

              <Grid item md={6} xl={4}>
                <FieldArray name="ingredients">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.ingredients.length > 0 &&
                        values.ingredients.map((ingredient, index) => (
                          <Grid key={index} display="flex" alignItems="center">
                            <Grid flex={1}>
                              <Field
                                name={`ingredients.${index}`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel={`Ingredient ${index + 1}`}
                                helperText={
                                  errors.ingredients &&
                                  errors.ingredients[index] &&
                                  touched.ingredients &&
                                  touched.ingredients[index] &&
                                  errors.ingredients[index]
                                }
                              />
                            </Grid>
                            <Grid ml={2}>
                              <IconButton
                                onClick={() => remove(index)}
                                disabled={values.ingredients.length === 1}
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
                <FieldArray name="instructions">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.instructions.length > 0 &&
                        values.instructions.map((ingredient, index) => (
                          <Grid key={index} display="flex" alignItems="center">
                            <Grid flex={1}>
                              <Field
                                name={`instructions.${index}`}
                                as={CustomTextField}
                                fullWidth
                                inputLabel={`Instuction ${index + 1}`}
                                helperText={
                                  errors.instructions &&
                                  errors.instructions[index] &&
                                  touched.instructions &&
                                  touched.instructions[index] &&
                                  errors.instructions[index]
                                }
                              />
                            </Grid>
                            <Grid ml={2}>
                              <IconButton
                                onClick={() => remove(index)}
                                disabled={values.instructions.length === 1}
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
                          Add Next instructions
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
