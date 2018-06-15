import * as React from 'react';
import './App.css';
import Badges from './Badges';
import Leaderboard from './Leaderboard';
import Points from './Points';

interface IOptingIn {
    onOptedIn: () => void
}

class HomeNoOptIn extends React.Component<IOptingIn> {

    constructor(props: any) {
        super(props);
    }
   
  
    public submitChoices = () => {
        this.props.onOptedIn();
    }

    public renderChoices() {
            return (
            <div className="container choices-container">
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
            </div>
            )
  }

  public render() {
    return (
        <div>
            {this.renderChoices()}
            <Points />
            <Leaderboard />
            <Badges />
        </div>
    );
  }
}

export default HomeNoOptIn;
