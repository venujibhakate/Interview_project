import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Styles = theme => ({
	image: {
		width: '25ch',
	},
	mainDiv: {
		marginLeft: '10%'
	},
	content: {
		width: '22ch'
	},
	btn: {
		width: '25ch'
	},
	root: {
		width: '50ch',
		marginLeft: '30%',
		margin: theme.spacing(2),
	}
})

function Profile(props) {
	const { profile, classes, Repos } = props;
	// const{classes}= this.props
	return (
		<div>

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
							<Typography style={{ fontSize: '40' }}>{profile.login}</Typography>
							<Typography style={{ fontSize: '30', color: '#666' }}>{profile.login}</Typography>
						</CardContent>

					</Card>

				))}


			</div>
			<div>
				{Repos.map(repo => (
					<Card className={classes.root}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								<a
									href={repo.html_url}
									style={{ fontSize: '15px', textDecoration: 'none', display: 'table-cell' }}
									target="_blank"
									rel="noopener noreferrer">
									{repo.name}

								</a>
								<Typography style={{ fontSize: '13px' }}>{repo.description}</Typography>
								<Typography style={{ fontSize: '15px', display: 'inline-block' }}>{repo.language}</Typography>
								<span style={{ backgroundColor: '#eff3f6', color: '#24292e', padding: '3px 10px 3px 10px', marginLeft: '5%' }}>
									{repo.stargazers_count}star
								</span>
								<span
									style={{
										backgroundColor: '#eff3f6',
										color: '#24292e',
										marginLeft: '100px',
										padding: '3px 10px 3px 10px',
									}}>
									{repo.forks_count}Fork
									</span>
							</Typography>
						</CardContent>
					</Card>

				))}
			</div>
		</div>

	);
}

export default (withStyles)(Styles)(Profile);
