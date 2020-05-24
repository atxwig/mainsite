import React from "react";
import { Box, Nav, Button, Heading } from "grommet";
//import styled from "styled-components";

// const styledText = styled.h1`
//   font-family: p22-underground, sans-serif;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 100;
// `;

function nav() {
  return (
    <Box
      align="center"
      justify="start"
      direction="row"
      pad="small"
      gap="large"
      wrap={false}
      height="xsmall"
      margin={{ left: "xsmall" }}
      position="sticky"
      top="0"
    >
      <Heading textAlign="start" level="2">
        Women in Gaming
      </Heading>
      <Nav
        align="start"
        flex={false}
        gap="medium"
        direction="row"
        justify="end"
        pad="xsmall"
      >
        <Button
          label="Events"
          active={true}
          reverse={false}
          primary={false}
          plain={true}
          hoverIndicator={true}
        />
        <Button label="Staff" plain={true} hoverIndicator={true} />
        <Button label="Resources" plain={true} hoverIndicator={true} />
        <Button label="Contact" plain={true} hoverIndicator={true} />
      </Nav>
    </Box>
  );
}

export default nav;
