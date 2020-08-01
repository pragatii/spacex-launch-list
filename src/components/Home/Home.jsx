import * as React from 'react';
import Box from "@material-ui/core/Box";
import Filters from "../Filters/Filters";
import LaunchCard from "../LaunchCard/LaunchCard";
import {withStyles} from "@material-ui/core";
import * as Axios from 'axios';
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1440px',
        [theme.breakpoints.down(700)]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up(1440)]: {
            justifyContent: 'center',
            textAlign: 'center'
        }
    },
    filters: {
        flexBasis: '10%',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        [theme.breakpoints.down(700)]: {
            flexBasis: '15%',
        },
        [theme.breakpoints.between(700, 1024)]: {
            flexBasis: '15%',
        },
        [theme.breakpoints.up(1024)]: {
            flexBasis: '10%',
        }
    },
    launchCard: {
        flexBasis: '85%',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down(700)]: {
            flexBasis: '80%',
        },
        [theme.breakpoints.between(700, 1024)]: {
            flexBasis: '80%',
        },
        [theme.breakpoints.up(1024)]: {
            flexBasis: '85%',
        }
    },
    launchCardItem: {
        [theme.breakpoints.down(700)]: {
            flexBasis: 'calc(100% - 2rem)',
        },
        [theme.breakpoints.between(700, 1024)]: {
            flexBasis: 'calc(50% - 2rem)',
        },
        [theme.breakpoints.up(1024)]: {
            flexBasis: 'calc(25% - 2rem)',
        }
    }
});

function Home(props) {
    const {classes} = props;

    console.log(classes);

    const [cards, setCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [filters, setFilters] = React.useState({limit: 100});

    const apiCall = () => {
        setIsLoading(true);
        console.log(filters);
        return Axios.default.get('https://api.spacexdata.com/v3/launches', {
            params: filters
        }).then(res => {
            setIsLoading(false);

            return res;
        });
    };

    React.useEffect(() => {
        apiCall().then(response => {
            setCards(response.data);
        });
    }, [filters]);

    const handleFilterChange = (f) => {
        setFilters({
            ...filters,
            ...f
        });
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.filters}>
                <Box marginBottom={1}>
                    <Filters title={'Launch Year'}
                             onSelect={option => handleFilterChange({launch_year: option})}
                             options={[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]}/>
                </Box>
                <Box marginBottom={1}>
                    <Filters title={'Successful Launch'}
                             onSelect={option => handleFilterChange({launch_success: option === 'Yes'})}
                             options={['Yes', 'No']}/>
                </Box>
                <Box marginBottom={1}>
                    <Filters title={'Successful Landing'}
                             onSelect={option => handleFilterChange({land_success: option === 'Yes'})}
                             options={['Yes', 'No']}/>
                </Box>
            </Box>
            <Box className={classes.launchCard}>
                {
                    isLoading
                        ? <CircularProgress/>
                        : (cards || []).map(c =>
                            <Box key={c.flight_number} className={classes.launchCardItem} margin={1}>
                                <LaunchCard {...c}/>
                            </Box>
                        )
                }
            </Box>
        </Box>
    );
}

export default withStyles(styles)(Home);
