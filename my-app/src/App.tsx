import * as React from 'react';
import './App.css';
import HomeNoOptIn from './HomeNoOptIn';
import Jumbotron from './Jumbotron';
import Nav from './Nav';

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

  public goToProfilePage = () => {
    this.setState({currentPage: page.profile});
  }

  public render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        {this.renderHomePage()}
        {this.renderProfilePage()}
        {this.renderSignUpPage()}
      </div>
    );
  }
}

export default App;
