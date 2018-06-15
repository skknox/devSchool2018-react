import * as React from 'react';
import './App.css';
import Badges from './Badges';
import Leaderboard from './Leaderboard';
import Points from './Points';
import {User} from './User';

interface IProfile {
    matchedUser: User;
}
class Profile extends React.Component<IProfile> {

    public renderInfo() {
       
        return (
            <div className="row">
            <div className="col-sm-3">
                <img src="./Finneus.jpg" style={{borderRadius:"50%",height:"200px",width:"200px"}}/>
            </div>
            <div className="col-sm-9">
                <h2><u>{this.props.matchedUser.name} : {this.props.matchedUser.cohort}</u></h2>
                <h4>Location: {this.props.matchedUser.office}</h4>
                <h4>Email: {this.props.matchedUser.email}</h4>
                <h6>{this.props.matchedUser.funFact}</h6>
            </div>
        </div>
        )
    }

    public render() {
       
            return (

                <div className="container">
                    {this.renderInfo()}
                    <Points />
                    <Leaderboard />
                    <Badges />
                </div>
            )
    }

}


export default Profile;


