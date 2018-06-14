import * as React from 'react';
import './App.css';
import Badges from './Badges';
import Leaderboard from './Leaderboard';
import Points from './Points';


class Profile extends React.Component {

    public renderInfo() {
       
        return (
            <div className="row">
            <div className="col-sm-3">
                <img src="./Finneus.jpg" style={{borderRadius:"50%",height:"200px",width:"200px"}}/>
            </div>
            <div className="col-sm-9">
                <h2><u>Finneus Dolphin :    C1</u></h2>
                <h4>Location: Chicago</h4>
                <h4>Email: f.dolphin@parivedasolutions.com</h4>
                <h6>My fun fact is that I'm a dolphin who codes!</h6>
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


