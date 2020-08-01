import * as React from 'react';
import Box from "@material-ui/core/Box";
import Filters from "../Filters/Filters";
import LaunchCard from "../LaunchCard/LaunchCard";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        [theme.breakpoints.down(700)]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up(1440)]: {
            justifyContent: 'center'
        }
    },
    filters: {
        flexBasis: '20%'
    },
    launchCard: {
        flexBasis: '80%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    launchCardItem: {
        [theme.breakpoints.down(700)]: {
            flexBasis: 'calc(100% - 2rem)',
        },
        [theme.breakpoints.between(700, 1024)]: {
            flexBasis: 'calc(50% - 2rem)',
        },
        [theme.breakpoints.between(1024, 1440)]: {
            flexBasis: 'calc(25% - 2rem)',
        },
        [theme.breakpoints.up(1440)]: {
            flexBasis: 'calc(25% - 2rem)',
        }
    }
});

function Home(props) {
    const {classes} = props;

    console.log(classes);

    const [cards, setCards] = React.useState([1, 2, 3, 4, 5, 6]);

    console.log(cards);

    return (
        <Box className={classes.root}>
            <Box className={classes.filters}>
                <Filters title={'Launch Year'}
                         options={[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]}/>
            </Box>
            <Box className={classes.launchCard}>
                {
                    (cards || []).map(c =>
                        <Box className={classes.launchCardItem} margin={1}>
                            <LaunchCard/>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default withStyles(styles)(Home);
