import * as React from 'react';
import './App.css';
import Leaderboard from './Leaderboard';
import Points from './Points';

enum page{
  homeNoOptIn,
  homeOptingIn,
  homeOptedIn,
  signUp,
  login,
  profile
}

interface IAppState{
  currentPage: page
}

class HomeNoOptIn extends React.Component<{}, IAppState> {
  
  constructor(props:any){
    super(props);
    this.state = {
      currentPage: page.homeNoOptIn
    }
  }

  
  
  public render() {
    return (
        <div>
            <div className="alert alert-warning" id="signupAlert" role="alert">
                You are not in today's lunch pool.
                <button id="signUpButton" className="btn btn-primary">Dive in!</button>
            </div>
             <Points />
             <Leaderboard />
        </div>
     
    );
  }
}

export default HomeNoOptIn;
