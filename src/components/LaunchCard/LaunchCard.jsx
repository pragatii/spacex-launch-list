import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

const useStyles = theme => ({
    root: {
        minHeight: '420px'
    },
    cardContent: {
        textAlign: 'left'
    },
    media: {
        height: 140,
        backgroundColor: 'rgba(242, 242, 242, 1)',
        width: '80%',
        objectFit: 'contain',
        marginTop: '1rem',
        [theme.breakpoints.down(1440)]: {
            marginLeft: '10%'

        }
    },
});

function LaunchCard(props) {
    const {mission_name, flight_number, mission_id, launch_year, launch_success, rocket, links, classes} = props;

    return (
        <Card className={classes.root} elevation={0}>
            <CardActionArea>
                <img
                    className={classes.media}
                    src={links.mission_patch_small || links.mission_patch}
                    alt={flight_number}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" color={"primary"}>
                        {mission_name} #{flight_number}
                    </Typography>
                    <Typography gutterBottom variant="body" component="h3">
                        Mission Ids:
                    </Typography>
                    <ul>
                        {mission_id.map(id =>
                            <li>
                                <Typography color={'primary'}
                                            component={"p"}
                                            variant={'p'}>
                                    {id}
                                </Typography>
                            </li>)}
                    </ul>
                    <Typography gutterBottom variant="body" component="h3">
                        Launch year: {launch_year}
                    </Typography>
                    <Typography gutterBottom variant="body" component="h3">
                        Successful Launch: <Typography color={'primary'} component={"p"}
                                                       variant={'body'}>{launch_success ? 'Yes' : 'No'}</Typography>
                    </Typography>
                    <Typography gutterBottom variant="body" component="h3">
                        Successful Landing: {rocket.first_stage.cores[0].land_success ? 'Yes' : 'No'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(useStyles)(LaunchCard);
