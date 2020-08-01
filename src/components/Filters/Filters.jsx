import {Box, Divider, Typography, withStyles} from "@material-ui/core";
import * as React from 'react';
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
        justifyContent: 'space-between'
    },
    optionItem: {
        margin: '0.25rem',
        flexBasis: 'calc(45% - 0.5rem)',
        maxWidth: '70px',
        borderRadius: '5px',
        width: 'calc(50% - 0.5rem)'
    }
});

function Filters(props) {
    const {title, options, classes, onSelect, selectedFilter} = props;

    const handleClick = (option) => {
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
                                             className={classnames(classes.optionItem, {selected: option === selectedFilter})}
                                             label={option} color={'secondary'}/>)}
            </Box>
        </Box>
    );
}

export default withStyles(styles)(Filters);
