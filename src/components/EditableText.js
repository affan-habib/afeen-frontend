import React, { useState, useRef } from "react";
import { Typography, IconButton, useTheme } from "@mui/material";
import { Save } from "@mui/icons-material";

const EditableText = ({ text, variant }) => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const typographyRef = useRef(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log("Saving:", editedText);
    setIsEditing(false);
  };

  const typographyStyles = theme.typography[variant];

  return (
    <div style={{ width: "100%" }}>
      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={handleChange}
            autoFocus
            style={{
              ...typographyStyles,
              border: "none",
              outline: "none",
              resize: "none",
              width: "100%",
              marginBottom: "10px",
              fontFamily: "inherit",
              boxSizing: "border-box",
              height: "100%",
            }}
          />
          <IconButton onClick={handleSave} aria-label="Save">
            <Save />
          </IconButton>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <Typography
            ref={typographyRef}
            variant={variant}
            sx={{mt: 1}}
            style={{
              ...typographyStyles,
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
            onDoubleClick={handleDoubleClick}
          >
            {editedText}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default EditableText;
