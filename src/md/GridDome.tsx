import React from "react";
import {Box, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class FluidComponent extends React.Component {


    render() {
        return (
            <Grid container={true} md={12} spacing={2}>
                <Grid md={6} item={true}>
                    <Box bgcolor="primary.main">AAA</Box>
                </Grid>
                <Grid md={6} item={true}>
                    <Box bgcolor="primary.main">AAA</Box>
                </Grid>

                <Grid md={4} item={true}>
                    <Box bgcolor="secondary.main">AAA</Box>
                </Grid>

                <Grid md={4} item={true}>
                    <Box bgcolor="primary.main">AAA</Box>
                </Grid>

                <Grid md={4} item={true}>
                    <Box bgcolor="primary.main">AAA</Box>
                </Grid>
            </Grid>
        )
    }
}


export default FluidComponent