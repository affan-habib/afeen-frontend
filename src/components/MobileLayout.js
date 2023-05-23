import React from "react";

import { Stack } from "@mui/material";

function MobileTabsLayout({ panels }) {
  return (
    <Stack flexDirection="column" spacing={2} alignItems="center">
      {panels.map((panel, index) => (
        <Stack minHeight="100vh" alignItems="center" justifyContent="center">
          {panel}
        </Stack>
      ))}
    </Stack>
  );
}

export default MobileTabsLayout;
