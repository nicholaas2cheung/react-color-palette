import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        };
        this.changeFormat = this.changeFormat.bind(this);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
        }

        return shades.slice(1);
    }

    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { format } = this.state;
        const { classes } = this.props;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map((color) => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showFullPalette={false}
            />
        ));
        return (
            <div className={classes.palette}>
                <Navbar handleChange={this.changeFormat} showAllColors={false} />
                <div className={classes.colors}>
                    {' '}
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);
