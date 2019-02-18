import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import { Component } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import colors from './default/colors.js'




class ColorCard extends Component {
    handleLike = () =>{
        this.props.liked(this.props.color)
        console.log(this.props.color.name)
    }
    render() {
        let color = this.props.color
        if (color.name.length > 40) {
            color.name = color.name.substring(0, 30)+"...";
        }
        if (color.description.length > 200) {
            color.description = color.description.split('.')[0].substring(0, 200)+"...";
        }
        let cardStyle = {
            backgroundColor: color.value,
            color: color.textvalue,
        }
        const StyledContent = withStyles({
            root: {
              background: color.value,
              color: color.textvalue,
            }
          })(CardContent);

          const StyledHeader = withStyles({
            title: {
              background: color.value,
              color: color.textvalue,
            },
            subheader: {
                background: color.value,
                color: color.textvalue,
              }
          })(CardHeader);


        
        return (
            <span style={{display: "flex"}} className="ColorCard">
                <Card className="Card" style={{ ...cardStyle, minWidth: 275, padding: 15, maxWidth: 375, margin: 15, minHeight: 200, maxHeight:250}}>
                <StyledHeader title={color.name} subheader={color.value}></StyledHeader>
                    <StyledContent>
                        {color.description}
                    </StyledContent>
                    <CardActions>
                    <span style={{...cardStyle, margin: 5, font: "Arial"}}>{color.likes}</span>
                        <IconButton onClick={this.handleLike} aria-label="Add to favorites">
                            <FavoriteIcon style={{color: color.textvalue}}/>
                        </IconButton>
                    </CardActions>
                </Card>
            </span>
        )
    }
}

export default ColorCard;