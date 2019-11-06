import React from "react";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

class HiddenDemoComponent extends React.Component{

    render(){
        return(
            <Box>
                <Grid container={true} md={12}>
                    <Hidden xlUp={true}>
                        <Grid item={true}  md={6}>
                            <Box>Just_show_up_xl</Box>
                        </Grid>
                    </Hidden>
                    <Hidden xlUp={true}>
                        <Grid item={true}  md={6}>
                            <Box>Just_show_up_xs</Box>
                        </Grid>
                    </Hidden>
                    <Hidden mdDown={true}>
                        <Grid item={true}  md={6}>
                            <Box>Just_show_down_md</Box>
                        </Grid>
                    </Hidden>
                    <Hidden only={"xl"}>
                        <Grid item={true}  md={6}>
                            <Box>THIS IS XS</Box>
                        </Grid>
                    </Hidden>

                </Grid>
            </Box>
        )
    }
}

export default HiddenDemoComponent
