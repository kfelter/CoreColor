import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";




class ColorInputForm extends Component {
    background = "#FFF"
    handleSubmit = () =>{
        // e.preventDefault()
        let newColor = {
            name: document.getElementById("standard-name").value,
            description: document.getElementById("standard-description").value,
            value: document.getElementById("standard-color").value,
            textvalue: document.getElementById("standard-text-color").value,
            likes: 1,
        }
        //clear form
        //document.getElementById("standard-name").value = ""
        this.props.update(newColor)
        console.log(newColor)
    }

    render() {
        let cardStyle = {
            backgroundColor: this.background,
            color: "#222",
        }
        const StyledContent = withStyles({
            root: {
                backgroundColor: this.background,
            color: "#222",
            }
        })(CardContent);

        return (
            
            <span style={{ display: "flex" }} className="ColorCard">
                <Card className="Card" style={{ ...cardStyle, minWidth: 625, padding: 15, maxWidth: 625, margin: 15 }}>
                    <StyledContent>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-name"
                        label="Name"
                        margin="normal"
                        style={{margin: 5, width: 290, position: "realative", left: 10}}
                    />
                    <TextField
                    id="standard-description"
                    label="Description"
                    multiline
                    rows="3"
                    style={{margin: 5}}
                    margin="normal"
                    variant="filled"
                    style={{width:600}}
                    />
                    <TextField onChange={this.colorChange}
                        id="standard-color"
                        label="Color"
                        margin="normal"
                        style={{margin: 5}}
                    />
                    <TextField
                        id="standard-text-color"
                        label="TextColor"
                        margin="normal"
                        style={{margin: 5}}
                    /><br/>
                    <Button type="submit">SUBMIT</Button>
                    </form>
                    </StyledContent>
                </Card>
            </span>
        )
    }
}

export default ColorInputForm;