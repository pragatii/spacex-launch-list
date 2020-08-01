import {Box, Divider, Typography, withStyles} from "@material-ui/core";
import * as React from 'react';
import {useState} from 'react';
import Chip from "@material-ui/core/Chip";
import classnames from 'classnames';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '1rem',
        paddingLeft: '1rem'
    },
    title: {
        textAlign: 'center'
    },
    options: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    optionItem: {
        margin: '0.25rem',
        flexBasis: 'calc(50% - 0.5rem)',
        maxWidth: '70px',
        borderRadius: '5px',
    }
});

function Filters(props) {
    const {title, options, classes, onSelect} = props;

    const [selectedOption, setSelectedOption] = useState();

    const handleClick = (option) => {
        setSelectedOption(option);
        onSelect(option)
    };

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} component={"p"} variant={'body'}>
                {title}
            </Typography>
            <Divider/>
            <br/>
            <Box className={classes.options}>
                {options.map(option => <Chip onClick={e => handleClick(option)}
                                             className={classnames(classes.optionItem, {selected: option === selectedOption})}
                                             label={option} color={'secondary'}/>)}
            </Box>
        </Box>
    );
}

export default withStyles(styles)(Filters);
