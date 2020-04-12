import React, { Component } from 'react'
import axios from 'axios';
import githubLogo from './download1.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Profile from "./profile";


const Styles = theme => ({
  root: {
      margin: theme.spacing(1.5),
      width: '60ch',
      marginLeft:'30%'
  },
  btn:{
    margin: theme.spacing(1),
    padding:theme.spacing(2),
  }
});


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      profile: '',
    }
  }
  handleChange = (event) => this.setState({ inputText: event.target.value })

  handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q: this.state.inputText,
      },
    });
    console.log(response)
    // this.setState({ profile: response.data.items });
    const responseOfRepos = await axios.get(`https://api.github.com/users/${this.state.inputText}/repos`);
    console.log(responseOfRepos)
    this.setState({profile: response.data.items,Repos:responseOfRepos.data})
    
}
    
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="App">
          <div className="Logo">
            <img src={githubLogo} alt="logo" style={{paddingLeft: '26%',marginTop:"10%"}} />
          </div>
          {/* <form className="example">
            <input type="text"
              name="search" onChange={this.handleChange}

            /> */}
            <form>
        <TextField id="outlined-search" label="Github Username" variant="outlined" className={classes.root}
        onChange={this.handleChange}
        />
 
            {/* <button type="submit" onClick={this.handleSubmit}>Submit</button> */}

            <Button variant="contained" color="primary" className={classes.btn} onClick={this.handleSubmit}>
            Submit
          </Button>
          
          </form>
          {this.state.profile !== '' && (<Profile profile={this.state.profile}/>)}

        </div>
      </div>
    )
  }
}

export default (withStyles)(Styles)(HomePage);
