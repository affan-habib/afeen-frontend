import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import CustomTextField from "components/CustomTextField";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  worksAt: Yup.string(),
  country: Yup.string(),
  livesIn: Yup.string(),
  relationship: Yup.string(),
});

const EditUserForm = ({ initialValues, onSubmit }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isProfileImageUploading, setIsProfileImageUploading] = useState(false);
  const [isCoverImageUploading, setIsCoverImageUploading] = useState(false);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid sx={{ position: "relative", maxWidth: 200 }} item md={4}>
              <Avatar
                src={profileImage ? URL.createObjectURL(profileImage) : ""}
                alt="Profile picture"
                style={{ width: 150, height: 150 }}
              />
              <Box ml={2} sx={{ position: "absolute", top: 120, left: 120 }}>
                <input
                  accept="image/*"
                  id="profileImage"
                  type="file"
                  onChange={handleProfileImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="profileImage">
                  <IconButton
                    color="primary"
                    component="span"
                    disabled={isProfileImageUploading}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Box>
            </Grid>
            <Grid item md={8} sx={{ position: "relative" }}>
              <Avatar
                src={coverImage ? URL.createObjectURL(coverImage) : ""}
                alt="Profile picture"
                style={{ width: 150, height: 150 }}
              />
              <Box ml={2} sx={{ position: "absolute", top: 120, left: 120 }}>
                <input
                  accept="image/*"
                  id="coverImage"
                  type="file"
                  onChange={handleCoverImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="coverImage">
                  <IconButton
                    color="primary"
                    component="span"
                    disabled={isCoverImageUploading}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Field
                name="firstName"
                inputLabel="First Name"
                as={CustomTextField}
              />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </Grid>
            <Grid item md={3}>
              <Field
                name="lastName"
                inputLabel="Last Name"
                as={CustomTextField}
              />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </Grid>
            <Grid item md={3}>
              <Field
                name="worksAt"
                inputLabel="Works At"
                as={CustomTextField}
              />
              {errors.worksAt && touched.worksAt && <div>{errors.worksAt}</div>}
            </Grid>
            <Grid item md={3}>
              <Field name="country" inputLabel="Country" as={CustomTextField} />
              {errors.country && touched.country && <div>{errors.country}</div>}
            </Grid>
            <Grid item md={3}>
              <Field
                name="livesIn"
                inputLabel="Lives In"
                as={CustomTextField}
                helperText={errors.livesIn && touched.livesIn && errors.livesIn}
              />
            </Grid>
            <Grid item md={3}>
              <Field
                name="relationship"
                inputLabel="Relationship"
                as={CustomTextField}
              />
              {errors.relationship && touched.relationship && (
                <div>{errors.relationship}</div>
              )}
            </Grid>
          </Grid>
          <div>
            <Button type="submit">Update</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditUserForm;
