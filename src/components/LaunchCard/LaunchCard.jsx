import {makeStyles} from "@material-ui/styles";
import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function RecipeReviewCard(props) {
    const {mission_name, flight_number, mission_id, launch_year, launch_success, rocket, links} = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={links.mission_patch_small}
                    title="{flight_number}"
                    style={{fit: 'cover'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color={"primary"}>
                        {mission_name} #{flight_number}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mission Ids:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Launch year: {launch_year}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Successful Launch: {launch_success}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Successful Landing:
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
