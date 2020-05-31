import React from "react";
import { Box, Heading, Text, Grid, Image } from "grommet";
import { Rectangle } from "react-simple-shapes";
//import styled from "styled-components";

function grid() {
    return (
        <Box
            align="center"
            justify="center"
            pad={{ top: "xlarge", bottom: "large", left: "20%", right: "20%" }}
            direction="row-responsive"
            gap="xlarge"
        >
            <Box
                align="start"
                justify="start"
                direction="row-responsive"
                wrap={true}
            >
                <Heading
                    color="active-text"
                    textAlign="start"
                    level="2"
                    margin="bottom:xsmall"
                    size="medium"
                >
                    Events
                </Heading>
                <Text
                    textAlign="start"
                    size="medium"
                    margin={{ left: "large" }}
                >
                    Lorem ipsum dolor sit amet, ex quem volutpat vituperatoribus
                    has, voluptua argumentum quo ad, nam illum iudico in. Ad his
                    quando mucius, cu nec alii gubergren, in sed oblique
                    apeirian definitiones. Senserit argumentum eu eum, id sed
                    utroque mediocrem petentium. Eu pro ponderum adversarium,
                    graeci virtute albucius te vel, vim at reque referrentur. Te
                    solet labore interpretaris pro, mei no nullam regione. Ne
                    quot simul sententiae cum. Quis etiam accusata at per. Vix
                    ad tota tation dolore, amet error no eos, in sed primis
                    eruditi invidunt. In sumo nominavi temporibus vis. Tale
                    postea his in, mei menandri adipisci percipitur ad, id pri
                    omnesque volutpat. Ex facete urbanitas conceptam est, cu vim
                    amet albucius. Ea vim dicat labores perfecto, est sensibus
                    oportere ad. Est in purto malorum, id falli feugiat nostrum
                    has.
                </Text>
            </Box>
            <Rectangle />
            <Image src="https://i.pinimg.com/originals/29/90/6b/29906b1a782629a5f9f491139ab75f50.jpg" />
        </Box>

        /* <Box
                align="start"
                justify="start"
                direction="row-responsive"
                width="large"
                height="medium"
                wrap={true}
                pad="medium"
            >
                <Heading
                    color="active-text"
                    textAlign="start"
                    level="1"
                    margin="none"
                    size="medium"
                >
                    Events
                </Heading>
                <Text textAlign="start" size="medium">
                    Lorem ipsum dolor sit amet, ex quem volutpat vituperatoribus
                    has, voluptua argumentum quo ad, nam illum iudico in. Ad his
                    quando mucius, cu nec alii gubergren, in sed oblique
                    apeirian definitiones. Senserit argumentum eu eum, id sed
                    utroque mediocrem petentium. Eu pro ponderum adversarium,
                    graeci virtute albucius te vel, vim at reque referrentur. Te
                    solet labore interpretaris pro, mei no nullam regione. Ne
                    quot simul sententiae cum. Quis etiam accusata at per. Vix
                    ad tota tation dolore, amet error no eos, in sed primis
                    eruditi invidunt. In sumo nominavi temporibus vis. Tale
                    postea his in, mei menandri adipisci percipitur ad, id pri
                    omnesque volutpat. Ex facete urbanitas conceptam est, cu vim
                    amet albucius. Ea vim dicat labores perfecto, est sensibus
                    oportere ad. Est in purto malorum, id falli feugiat nostrum
                    has.
                </Text>
            </Box>
            <Image src="https://i.pinimg.com/originals/29/90/6b/29906b1a782629a5f9f491139ab75f50.jpg" />

            <Image src="https://i.pinimg.com/originals/29/90/6b/29906b1a782629a5f9f491139ab75f50.jpg" />
            <Box
                align="start"
                justify="start"
                direction="row-responsive"
                width="large"
                height="medium"
                wrap={true}
                pad="medium"
            >
                <Heading
                    color="active-text"
                    textAlign="start"
                    level="1"
                    margin="none"
                    size="medium"
                >
                    Events
                </Heading>
                <Text textAlign="start" size="medium">
                    Lorem ipsum dolor sit amet, ex quem volutpat vituperatoribus
                    has, voluptua argumentum quo ad, nam illum iudico in. Ad his
                    quando mucius, cu nec alii gubergren, in sed oblique
                    apeirian definitiones. Senserit argumentum eu eum, id sed
                    utroque mediocrem petentium. Eu pro ponderum adversarium,
                    graeci virtute albucius te vel, vim at reque referrentur. Te
                    solet labore interpretaris pro, mei no nullam regione. Ne
                    quot simul sententiae cum. Quis etiam accusata at per. Vix
                    ad tota tation dolore, amet error no eos, in sed primis
                    eruditi invidunt. In sumo nominavi temporibus vis. Tale
                    postea his in, mei menandri adipisci percipitur ad, id pri
                    omnesque volutpat. Ex facete urbanitas conceptam est, cu vim
                    amet albucius. Ea vim dicat labores perfecto, est sensibus
                    oportere ad. Est in purto malorum, id falli feugiat nostrum
                    has.
                </Text>
            </Box>

            <Box
                align="start"
                justify="start"
                direction="row-responsive"
                width="large"
                height="medium"
                wrap={true}
                pad="medium"
            >
                <Heading
                    color="active-text"
                    textAlign="start"
                    level="1"
                    margin="none"
                    size="medium"
                >
                    Events
                </Heading>
                <Text textAlign="start" size="medium">
                    Lorem ipsum dolor sit amet, ex quem volutpat vituperatoribus
                    has, voluptua argumentum quo ad, nam illum iudico in. Ad his
                    quando mucius, cu nec alii gubergren, in sed oblique
                    apeirian definitiones. Senserit argumentum eu eum, id sed
                    utroque mediocrem petentium. Eu pro ponderum adversarium,
                    graeci virtute albucius te vel, vim at reque referrentur. Te
                    solet labore interpretaris pro, mei no nullam regione. Ne
                    quot simul sententiae cum. Quis etiam accusata at per. Vix
                    ad tota tation dolore, amet error no eos, in sed primis
                    eruditi invidunt. In sumo nominavi temporibus vis. Tale
                    postea his in, mei menandri adipisci percipitur ad, id pri
                    omnesque volutpat. Ex facete urbanitas conceptam est, cu vim
                    amet albucius. Ea vim dicat labores perfecto, est sensibus
                    oportere ad. Est in purto malorum, id falli feugiat nostrum
                    has.
                </Text>
            </Box>
            <Image src="https://i.pinimg.com/originals/29/90/6b/29906b1a782629a5f9f491139ab75f50.jpg" /> */
    );
}

export default grid;
