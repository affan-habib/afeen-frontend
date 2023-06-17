import { Print } from "@mui/icons-material";
import { Button, Container, Stack } from "@mui/material";
import React from "react";
import ReactToPrint from "react-to-print";
import Customization from "./Customization";

const PrintComponent = ({ children }) => {
  const componentRef = React.useRef();

  return (
    <Container>
      <Customization />
      {/* <PrintButton handlePrint={handlePrint} /> */}
      <Stack sx={{  position: "absolute" , top: 40, right: 40 }}>
        <ReactToPrint
          trigger={() => (
            <Button variant="contained" startIcon={<Print />} type="button">
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Stack>
      <div>
        <div ref={componentRef}>{children}</div>
      </div>
    </Container>
  );
};

export default PrintComponent;
