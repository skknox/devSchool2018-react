import * as React from 'react';
import './App.css';


class Nav extends React.Component {
    public goToHomePage = () => {
        this.setState({currentPage: page.homeNoOptIn});
      }
      public goToSignUpPage = () => {
        this.setState({currentPage: page.signUp});
      }
  public render() {
    return (
       
         <div className="container">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <h4>
                        <a className="nav-link active" href="#" onClick={this.goToHomePage}>My Profile</a>
                        
                    </h4>
                </li>
                <li className="nav-item">
                    <h4>
                        <a className="nav-link" href="#" onClick={this.goToSignUpPage}>Logout</a>
                    </h4>
                </li>
            </ul>
        </div>
    );
  }
}

export default Nav;
