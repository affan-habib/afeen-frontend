import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";
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
}));

const Email = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while sending the message. Please try again later."
      );
    }
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
    </>
  );
};

export default Email;
