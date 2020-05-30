import React from "react";
import { Box, Text, Footer, Form, FormField, TextInput } from "grommet";
//import styled from "styled-components";

function footer() {
    return (
        <Box align="center" justify="start" pad="medium" background={{ "color": "accent-4" }}>
            <Footer align="start" direction="row" justify="start" gap="20vw" pad="small">
                <Box align="start" justify="start" direction="column">
                    <Text size="large" margin={{ "bottom": "xsmall" }}>
                        Women in Gaming
                    </Text>
                    <Text size="medium" margin={{ "left": "medium" }}>
                        Events
                    </Text>
                    <Text size="medium" margin={{ "left": "medium" }}>
                        Staff
                    </Text>
                    <Text size="medium" margin={{ "left": "medium" }}>
                        Resources
                    </Text>
                    <Text size="medium" margin={{ "left": "medium" }}>
                        Contact
                    </Text>
                </Box>
                <Box align="start" justify="center" direction="column" gap="small">
                    <Text size="large">
                        Join our newsletter!
                    </Text>
                    <Form>
                        <FormField>
                            <TextInput disabled={false} placeholder="beepo@mail.com" plain={false} reverse={false} type="text" />
                        </FormField>
                    </Form>
                </Box>
            </Footer>
        </Box>
    );
}

export default footer;
