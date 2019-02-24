import React, { Component } from 'react';
import './App.css';
import ColorCard from './ColorCard.js'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import ColorInputForm from './ColorInputForm.js';

const url = 'https://d54gu4us6a.execute-api.us-east-1.amazonaws.com/dev/CoreColor'
// const apikey = 'colorshow'

class App extends Component {
  api_colors = fetch(url, {
    headers: {
      "Accept": "application/json",
      //"api-key": apikey
    }, // 'cors' by default
    referrer: "no-referrer"
  })
    .then((response) => {
      // Do something with response
      // console.log(response)
      return response.json()
    }).then((data)=>{
      let output = Object.keys(data).map((key) => {
        // console.log(data[key])
        return { ...data[key] };
      });
      this.setState({...this.state, colors: output.reverse()})
    }).catch(err => {console.log(err)});
  state = {
    showInputForm: false,
    colors: [],
  }
  handleNewColor = (color) => {
    const newColors = [color, ...this.state.colors]
    this.setState({ colors: newColors })
    fetch(url, {
      method: "POST",
      headers: {
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Methods': '*'
        //"api-key": apikey
      },
      body: JSON.stringify(color),
      referrer: "no-referrer"
    })
    // console.log("handleNewColor", color, this.state.colors)
  }
  showInputForm = () => {
    let t = !this.state.showInputForm
    this.setState({ ...this.state, showInputForm: t })
    // console.log(this.state.showInputForm)
  }
  handleLike = (likedcolor) => {
    const updated = this.state.colors.map(color => { return color === likedcolor ? { ...color, likes: color.likes + 1, } : color })
    fetch(url + "?id=" + likedcolor.id, {
      method: "PUT",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
        //"api-key": apikey
      },
      referrer: "no-referrer"
    })
    this.setState({ ...this.state, colors: updated })
  }
  render() {
    return (
      <div className="App">
        <span>
          <Fab onClick={this.showInputForm} style={{ position: "fixed", left: 10, top: 10 }}>
            <AddIcon />
          </Fab>
          {this.state.colors !== undefined && <ColorList
            showInput={this.state.showInputForm}
            colors={this.state.colors}
            update={this.handleNewColor}
            liked={this.handleLike} />}
        </span>
      </div>
    );
  }
}

class ColorList extends Component {
  render() {

      return (
        <div style={{ position: "absoloute", marginLeft: 70 }}>
          <Grid container className="color-list" spacing={8}>
            <Grid item>
              <Grid container className="item" justify="flex-start" spacing={8}>
                {this.props.showInput && <ColorInputForm update={this.props.update} />}
                {this.props.colors.map((color, i) => <Grid key={i} item><ColorCard liked={this.props.liked} color={color} key={i} style={{ display: "flex" }} /></Grid>)}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
  }
}

export default App;


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing.unit * 2,
//   },
// });

// class GuttersGrid extends React.Component {
//   state = {
//     spacing: '16',
//   };

//   handleChange = key => (event, value) => {
//     this.setState({
//       [key]: value,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { spacing } = this.state;

//     return (
//       <Grid container className={classes.root} spacing={16}>
//         <Grid item xs={12}>
//           <Grid container className={classes.demo} justify="center" spacing={16}>
//           {colors.map((color, i) => <Grid key={i} item><ColorCard color={color} key={i} style={{display: "flex"}}/></Grid>)}
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }