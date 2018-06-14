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

  public render() {
    return (
        <div>
            {this.renderAlert()}
            {this.renderChoices()}
            <Points />
            <Leaderboard />
            <Badges />
        </div>
    );
  }
}

export default HomeNoOptIn;
