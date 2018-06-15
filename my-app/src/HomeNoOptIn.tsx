import * as React from 'react';
import './App.css';
import Badges from './Badges';
import Leaderboard from './Leaderboard';
import Points from './Points';


interface IOptInProps{
    onOptIn: () => void
}

class HomeNoOptIn extends React.Component<IOptInProps> {

    constructor(props: any) {
        super(props);
    }

    
    public optIn = () => {
        this.props.onOptIn();
    }

    public renderAlert() {
            return (
                <div className = "container">
                   
                        <div className="alert alert-warning row" id="signupAlert" role="alert">
                            <h5 className="col-sm-10 signUpAlertText">You are not in today's lunch pool.</h5>
                            <button onClick={this.optIn} id="signUpButton" className="btn btn-primary col-sm-2">Dive in!</button>
                        </div>
                    
                </div>
            )
        
        
    }

  
  public render() {
    return (
        <div>
            {this.renderAlert()}
            
            <Points />
            <Leaderboard />
            <Badges />
        </div>
    );
  }
}

export default HomeNoOptIn;
