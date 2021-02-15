import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';
import { withStyles } from '@material-ui/styles';

const styles = {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    colors: {
        height: '90%'
    },
    footer: {
        backgroundColor: 'white',
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    emoji: {
        fontSize: '1.5rem',
        margin: '0 1rem'
    }
};

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((color, i) => {
            return (
                <ColorBox
                    background={color[format]}
                    key={i}
                    name={color.name}
                    moreUrl={`/palette/${id}/${color.id}`}
                    showFullPalette={true}
                />
            );
        });
        return (
            <div className={classes.palette}>
                {/* Navbar goes here */}
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showAllColors={true}
                />
                <div className={classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);
