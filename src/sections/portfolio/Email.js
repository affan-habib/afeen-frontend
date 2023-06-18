import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Snackbar } from "@mui/material";
import axios from "axios";
import CustomTextField from "components/CustomTextField";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    // margin: "0 auto",
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  snackbar: {
    marginBottom: theme.spacing(6),
    marginRight: theme.spacing(8),
  },
}));

const Email = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/xlekkqwq", {
        name,
        email,
        message,
      });

      // Reset form fields on successful submission
      setName("");
      setEmail("");
      setMessage("");
      setShowSnackbar(true);
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while sending the message. Please try again later."
      );
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      <Grid item xs={12} md={6}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <CustomTextField
            className={classes.formField}
            inputLabel="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <CustomTextField
            className={classes.formField}
            inputLabel="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <CustomTextField
            className={classes.formField}
            inputLabel="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Message sent successfully!"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        className={classes.snackbar}
      />
    </>
  );
};

export default Email;
