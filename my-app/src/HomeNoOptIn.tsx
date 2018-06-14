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
                <div className="alert alert-warning" id="signupAlert" role="alert">
                    You are not in today's lunch pool.
                <button onClick={this.optIn} id="signUpButton" className="btn btn-primary">Dive in!</button>
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
