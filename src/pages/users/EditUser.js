import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "helpers/UrlBuilder";
import { useParams } from "react-router";
import { callApi, selectApi } from "store/reducers/apiSlice";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  worksAt: Yup.string(),
  country: Yup.string(),
  livesIn: Yup.string(),
  relationship: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  worksAt: "",
  country: "",
  livesIn: "",
  relationship: "",
};

const EditUser = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isProfileImageUploading, setIsProfileImageUploading] = useState(false);
  const [isCoverImageUploading, setIsCoverImageUploading] = useState(false);

  function fetchData() {
    dispatch(
      callApi({
        operationId: UrlBuilder.localHostApi(`api/v1/user/${id}`),
        output: "userDetails",
      })
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { userDetails = {} } = useSelector(selectApi);

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
      initialValues={userDetails}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid sx={{ position: "relative", maxWidth: 200 }}>
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
            <Grid item md={10} sx={{ position: "relative" }}>
              <img
                src={coverImage ? URL.createObjectURL(coverImage) : ""}
                alt="Profile picture"
                style={{ width: "100%", height: 150 }}
              />
              <Box ml={2} sx={{ position: "absolute", top: 120, right: 80 }}>
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
                fullWidth
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
                fullWidth
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
                fullWidth
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
                fullWidth
              />
            </Grid>
            <Grid item md={3}>
              <Field
                name="relationship"
                inputLabel="Relationship"
                as={CustomTextField}
                fullWidth
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

export default EditUser;
