import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Styles = theme => ({
    image: {
        width:'25ch',
    },
    mainDiv:{
        marginLeft:'10%'
    },
    content:{
        width:'22ch'
    },
    btn:{
        width:'25ch'
    }
})

function Profile(props) {
    const {profile,classes} = props;
    // const{classes}= this.props
	return (
		<div className={classes.mainDiv}>
    		{profile.map(profile => (
				<Card key="id" className={classes.image}>
					<CardContent>
						<img className={classes.content} alt="thumbnail" src={profile.avatar_url} />
						<a href={profile.html_url} style={{ textDecoration: 'none' }}>
							<Button
								variant="contained" className={classes.btn}>
								View Profile
								</Button>
						</a>
						<p style={{ fontSize: '40' }}>{profile.login}</p>
						<p style={{ fontSize: '30', color: '#666' }}>{profile.login}</p>
					</CardContent>

				</Card>

			))}


		</div>
	);
}

export default (withStyles)(Styles)(Profile);
