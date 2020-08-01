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
    const {mission_name, flight_number, mission_id, launch_year, launch_success, rocket} = props;

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
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color={"primary"}>
                        FalconSet #1
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mission Ids:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Launch year:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Successful Launch:
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Successful Landing:
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
