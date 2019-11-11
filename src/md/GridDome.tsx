import React from "react";
import {Box, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

class FluidComponent extends React.Component {


    render() {
        return (
            <Container maxWidth={"md"}>
                <Grid container={true} md={12} spacing={2}>
                    <Grid md={6} item={true}>
                        <Box bgcolor="primary.main"  height="110px">AAA</Box>
                    </Grid>
                    <Grid md={6} item={true}>
                        <Box bgcolor="primary.main"  height="110px">AAA</Box>
                    </Grid>

                    <Grid md={4} item={true}>
                        <Box bgcolor="secondary.main"  height="110px">AAA</Box>
                    </Grid>

                    <Grid md={4} item={true}>
                        <Box bgcolor="primary.main"  height="110px">AAA</Box>
                    </Grid>

                    <Grid md={4} item={true}>
                        <Box bgcolor="error.main"  height="110px">AAA</Box>
                    </Grid>

                    <Grid md={12} item={true}>
                        <GridListT/>
                    </Grid>
                </Grid>
            </Container>

        )
    }
}

function GridListT(prop:any) {
    return (
        <GridList cellHeight={100} cols={3} aria-sort={"ascending"}>
            <GridListTile key={"index"} cols={3} style={{height:'auto'}}>
                <ListSubheader component={"div"}>TitleBar</ListSubheader>
            </GridListTile>
            <GridListTile key={"1"} cols={1}>
                <Box height="110px" bgcolor="error.main">AAA</Box>
                <GridListTileBar
                    title={"This_is_title"}
                    subtitle={<span>hint: this is subtitle</span>} actionIcon={
                        <IconButton aria-label={"this_is_aria_label"}>

                        </IconButton>}
                />
            </GridListTile>
            <GridListTile key={"2"} cols={2}>
                <Box height="110px" bgcolor="primary.main">BBB</Box>
                <GridListTileBar
                    title={"This_is_title"}
                    subtitle={<span>hint: this is subtitle</span>} actionIcon={
                    <IconButton aria-label={"this_is_aria_label"}>
                        <span>T</span>
                    </IconButton>}
                />
            </GridListTile>
            <GridListTile key={"3"} cols={1}>
                <Box height="110px" bgcolor="error.main">CCC</Box>
            </GridListTile>
            <GridListTile key={"4"} cols={1}>
                <Box height="110px" bgcolor="secondary.main">DDD</Box>
            </GridListTile>
            <GridListTile key={"2"} cols={1}>
                <Box height="110px" bgcolor="error.main">EEE</Box>
            </GridListTile>
            <GridListTile key={"3"} cols={2}>
                <Box height="110px" bgcolor="primary.main">FFF</Box>
                <GridListTileBar
                    title={"This_is_title"}
                    subtitle={<span>hint: this is subtitle</span>} actionIcon={
                    <IconButton aria-label={"this_is_aria_label"}>

                    </IconButton>}
                />
            </GridListTile>
        </GridList>
    )
}


export default FluidComponent