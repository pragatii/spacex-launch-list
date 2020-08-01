import {Box, Divider, Grid, Typography} from "@material-ui/core";
import * as React from 'react';
import Chip from "@material-ui/core/Chip";

export default function Filters(props) {
    const {title, options} = props;

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Typography component={"body"}>
                {title}
            </Typography>
            <Divider/>
            <Grid container spacing={2}>
                {options.map(option => <Grid item>
                    <Chip label={option}/>
                </Grid>)}
            </Grid>
        </Box>
    );
}
