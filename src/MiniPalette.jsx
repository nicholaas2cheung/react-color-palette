/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
    constructor(props) {
        super(props);
    }

    deletePalette = (e) => {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    };

    handleClick = () => {
        this.props.goToPalette(this.props.id);
    };

    render() {
        const { classes, paletteName, emoji, colors } = this.props;
        const miniColorBoxes = colors.map((color) => (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        ));

        return (
            <div>
                <div className={classes.root} onClick={this.handleClick}>
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
