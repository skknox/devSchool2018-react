import * as React from 'react';
import './App.css';

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

class Jumbotron extends React.Component<{}, IAppState> {
    
  public render() {
    return (
        <div className="container jumbotron jumbotron-fluid" id="mainJumbo">

            <div className="container">
                <h1 id="jumboTitle" className="display-1">Let's Get Lunch!</h1>
            </div>
        </div>
    );
  }
}

export default Jumbotron;
