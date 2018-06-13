import * as React from 'react';
import './App.css';
import HomeNoOptIn from './HomeNoOptIn';
import Jumbotron from './Jumbotron';

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

class App extends React.Component<{}, IAppState> {
  
  constructor(props:any){
    super(props);
    this.state = {
      currentPage: page.homeNoOptIn
    }
  }

  public renderHomePage(){
    if(this.state.currentPage === page.homeNoOptIn){
      return <div><HomeNoOptIn /></div>
    }
    return undefined;
  }

  public renderProfilePage(){
    if(this.state.currentPage === page.profile){
      return <div>Profile</div>
    }
    return undefined;
  }

  public renderSignUpPage(){
    if(this.state.currentPage === page.signUp){
      return <div>Signup</div>
    }
    return undefined;
  }

  public goToHomePage = () => {
    this.setState({currentPage: page.homeNoOptIn});
  }

  public goToProfilePage = () => {
    this.setState({currentPage: page.profile});
  }

  public goToSignUpPage = () => {
    this.setState({currentPage: page.signUp});
  }
  
  public render() {
    return (
      <div className="App">
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
        <Jumbotron />
        {this.renderHomePage()}
        {this.renderProfilePage()}
        {this.renderSignUpPage()}
      </div>
    );
  }
}

export default App;
