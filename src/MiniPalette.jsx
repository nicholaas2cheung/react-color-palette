/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends Component {
    constructor(props) {
        super(props);
    }

    deletePalette = (e) => {
        e.stopPropagation();
        this.props.handleDelete(this.props.id);
    };

    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        const miniColorBoxes = colors.map((color) => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        ));

        return (
            <div>
                <div className={classes.root} onClick={handleClick}>
                    <DeleteIcon
                        className={classes.deleteIcon}
                        style={{ transition: 'all 0.3s ease-in-out' }}
                        onClick={this.deletePalette}
                    />
                    <div className={classes.colors}>{miniColorBoxes}</div>
                    <h5 className={classes.title}>
                        {paletteName} <span className={classes.emoji}>{emoji}</span>{' '}
                    </h5>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MiniPalette);
