import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Button, Box, Typography, IconButton } from "@mui/material";
import { DeleteColumnOutlined } from "@ant-design/icons";
import CustomTextField from "components/CustomTextField";

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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <>
            <Box mt={2}>
              <Typography variant="h5" component="h2">
                Recipe Form
              </Typography>
            </Box>
            <Box mt={2}>
              <Field
                name="title"
                as={CustomTextField}
                inputLabel="Title"
                fullWidth
                error={errors.title && touched.title}
                helperText={errors.title && touched.title && errors.title}
              />
            </Box>
            <Box mt={2}>
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
            </Box>
            <Box mt={2}>
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
            </Box>
            <Box mt={2}>
              <FieldArray name="ingredients">
                {({ insert, remove, push }) => (
                  <div>
                    {values.ingredients.length > 0 &&
                      values.ingredients.map((ingredient, index) => (
                        <Box key={index} display="flex" alignItems="center">
                          <Box flex={1}>
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
                          </Box>
                          <Box ml={2}>
                            <IconButton
                              onClick={() => remove(index)}
                              disabled={values.ingredients.length === 1}
                            >
                              <DeleteColumnOutlined />
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => push("")}
                      >
                        Add Ingredient
                      </Button>
                    </Box>
                  </div>
                )}
              </FieldArray>
            </Box>
            <Box mt={2}>
              <FieldArray name="instructions">
                {({ insert, remove, push }) => (
                  <div>
                    {values.instructions.length > 0 &&
                      values.instructions.map((ingredient, index) => (
                        <Box key={index} display="flex" alignItems="center">
                          <Box flex={1}>
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
                          </Box>
                          <Box ml={2}>
                            <IconButton
                              onClick={() => remove(index)}
                              disabled={values.instructions.length === 1}
                            >
                              <DeleteColumnOutlined />
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    <Box mt={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => push("")}
                      >
                        Add Next instructions
                      </Button>
                    </Box>
                  </div>
                )}
              </FieldArray>
            </Box>
            <Button type="submit">Submit</Button>
          </>
        </Form>
      )}
    </Formik>
  );
}
