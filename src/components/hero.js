import React from "react";
import { Box, Image } from "grommet";
//import styled from "styled-components";

function hero() {
    return (
        <Box
            align="center"
            justify="start"
            overflow="hidden"
            direction="column"
            height="large"
        >
            <Image src="https://progameguides.com/wp-content/uploads/2020/01/new-horizons-desktop-wallpaper008.jpg" />
        </Box>
    );
}

export default hero;
