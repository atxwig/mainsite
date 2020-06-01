import React from "react";
import { Box, Text, Footer, Form, FormField, TextInput } from "grommet";
//import styled from "styled-components";

function footer() {
    return (
        <Box
            align="center"
            justify="start"
            pad="medium"
            border={{
                color: "border",
                size: "medium",
                style: "solid",
                side: "top",
            }}
        >
            <Footer
                align="start"
                direction="row"
                justify="start"
                gap="20vw"
                pad="small"
            >
                <Box align="start" justify="start" direction="column">
                    <Text size="large" margin={{ bottom: "xsmall" }}>
                        women in gaming
                    </Text>
                    <Text size="medium" margin={{ left: "medium" }}>
                        events
                    </Text>
                    <Text size="medium" margin={{ left: "medium" }}>
                        staff
                    </Text>
                    <Text size="medium" margin={{ left: "medium" }}>
                        resources
                    </Text>
                    <Text size="medium" margin={{ left: "medium" }}>
                        contact
                    </Text>
                </Box>
                <Box
                    align="start"
                    justify="center"
                    direction="column"
                    gap="small"
                >
                    <Text size="large">join our newsletter!</Text>
                    <Form>
                        <FormField>
                            <TextInput
                                disabled={false}
                                placeholder="beepo@mail.com"
                                plain={false}
                                reverse={false}
                                type="text"
                            />
                        </FormField>
                    </Form>
                </Box>
            </Footer>
        </Box>
    );
}

export default footer;
