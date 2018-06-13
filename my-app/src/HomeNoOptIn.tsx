import * as React from 'react';
import './App.css';
import Leaderboard from './Leaderboard';
import Badges from './Badges';
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

class HomeNoOptIn extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: page.homeNoOptIn
        }
    }
    public optIn = () => {
        this.setState({currentPage: page.homeOptingIn});
    }
  
    public submitChoices = () => {
        this.setState({currentPage: page.homeOptedIn});
    }

    public goToMatchProfile = () => {
        this.setState({currentPage: page.profile});
    }

    public renderAlert() {
        if (this.state.currentPage === page.homeNoOptIn) {
            return (
                <div className="alert alert-warning" id="signupAlert" role="alert">
                    You are not in today's lunch pool.
                <button onClick={this.optIn} id="signUpButton" className="btn btn-primary">Dive in!</button>
                </div>
            )
        }
        return undefined;
    }

    public renderChoices() {
        if (this.state.currentPage === page.homeOptingIn) {
            return (
                <form id="signUpBox">
                    <label htmlFor="lunchChoice">
                        <h4>Where would you like to eat today?</h4>
                    </label>
                    <div className="form-group" id="lunchChoice">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1"> I would like to buy my lunch</label>
                        </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2"> I brought my lunch!</label>
                             </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="officeChoice">
                            <h4>Current Office:</h4>
                         </label>
                            <select className="form-control" id="officeChoice">
                                <option>Chicago</option>
                                <option>Dallas</option>
                                <option>Atlanta</option>
                                <option>Houston</option>
                                <option>New York</option>
                            </select>
                    </div>
                    <input onClick={this.submitChoices} type="button" className="btn btn-primary" value="Submit"/>
                </form>
            )
      }
      return undefined;
  }

  public renderMatch(){
    if (this.state.currentPage === page.homeOptedIn) {
        return (
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
        )
    }
    return undefined;
  }

  public render() {
    return (
        <div>
<<<<<<< HEAD
                            {this.renderAlert()}
                            {this.renderChoices()}
                            {this.renderMatch()}

                            <Points />
                            <Leaderboard />
                        </div>

                        );
=======
        <div><Points /></div>
        <div><Badges /></div>
        </div>
    );
>>>>>>> master
  }
}

export default HomeNoOptIn;
