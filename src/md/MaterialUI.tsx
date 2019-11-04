import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FluidComponent from "./GridDome";

class MaterialUI extends React.PureComponent {

    render() {
        return (
            <div>
                <FluidComponent/>
                {/*<Box>*/}
                {/*    <Button variant="outlined" color="primary">*/}
                {/*        Hello World.*/}
                {/*    </Button>*/}
                {/*    <Box color="text.primary" m={2} bgcolor="text.hint">*/}
                {/*        <Button color="primary">Box Test</Button>*/}
                {/*    </Box>*/}
                {/*    <React.Fragment>*/}
                {/*        <CssBaseline/>*/}
                {/*        <Container fixed>*/}
                {/*            <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '10vh'}}/>*/}
                {/*        </Container>*/}
                {/*    </React.Fragment>*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*    <Container maxWidth="md" style={{padding: '20'}}>*/}

                {/*        <Container maxWidth="md">*/}
                {/*            <Grid container spacing={1}>*/}
                {/*                <Grid container item md={6} spacing={3}>*/}
                {/*                    <span>A111</span>*/}
                {/*                    <Box bgcolor="primary.main" m={1}>Box1</Box>*/}
                {/*                    <Box bgcolor="error.main" m={1}>Box2</Box>*/}
                {/*                </Grid>*/}
                {/*                <Grid container item md={6} spacing={3}>*/}
                {/*                    <span>B111</span>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Container>*/}
                {/*    </Container>*/}
                {/*</Box>*/}

            </div>
        )
    }
}

export default MaterialUI