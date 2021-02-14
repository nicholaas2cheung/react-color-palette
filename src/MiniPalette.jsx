/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        border: '3px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    }
};

function MiniPalette(props) {
    console.log(props);
    const { classes, paletteName, emoji, colors } = props;
    console.log(colors);
    const miniColorBoxes = colors.map((color) => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ));

    return (
        <div>
            <div className={classes.root} onClick={props.handleClick}>
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>{' '}
                </h5>
            </div>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
