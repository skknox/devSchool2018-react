import * as React from 'react';
import './App.css';
import Badges from './Badges';
import Leaderboard from './Leaderboard';
import Points from './Points';

enum page {
    homeNoOptIn,
    homeOptingIn,
    homeOptedIn,
    signUp,
    login,
    profile
}

interface IAppState {
    currentPage: page
}

class HomeOptedIn extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: page.homeOptedIn
        }
    }
    
    public goToMatchProfile = () => {
        this.setState({currentPage: page.profile});
    }
   
  public renderMatch(){
    if (this.state.currentPage === page.homeOptedIn) {
        return (
            <div className="container">
                <div className="row" id="matchInfo">
                    <div className="col-sm-12">
                        <div id="matchCard" className="card">
                            <div className="card-body">

                                <p className="card-text">
                                    <h1>Your partner today is:</h1>
                                    <h2> Finneus Dolphin</h2>
                                </p>
                                <a onClick={this.goToMatchProfile} href="#" className="btn btn-primary">Profile</a>
                                <a href="https://theocean.parivedasolutions.com/#/people/sydney-knox/career" className="btn btn-secondary">Ocean</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return undefined;
  }

  public render() {
    return (
        <div>
            {this.renderMatch()}
            <Points />
            <Leaderboard />
            <Badges />
        </div>
    );
  }
}

export default HomeOptedIn;
