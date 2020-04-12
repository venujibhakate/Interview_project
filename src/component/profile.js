import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

function Profile(props) {
	const {profile} = props;
	return (
		<div>
			{profile.map(profile => (
				<Card style={{ width: '250px', marginLeft: '15%', marginTop: '1%' }}>
					<CardContent>
						<img style={{ width: '200px', marginLeft: '5%' }} alt="thumbnail" src={profile.avatar_url} />
						<a href={profile.html_url} style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								style={{ marginTop: '25px', fontSize: '22', width: '100%' }}>
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

export default Profile;
