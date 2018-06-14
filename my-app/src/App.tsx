import * as React from 'react';
import './App.css';
import HomeNoOptIn from './HomeNoOptIn';
import HomeOptedIn from './HomeOptedIn';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import {page} from './pageEnum';
import SignUp from './SignUp';

interface IAppState{
  currentPage: page
}

class App extends React.Component<{}, IAppState> {
  
  constructor(props:any){
    super(props);
    this.state = {
      currentPage: page.signUp
    }
  }

  public renderHomePage(){
    if(this.state.currentPage === page.homeNoOptIn){
      return <div><HomeNoOptIn /></div>
    }
    if(this.state.currentPage === page.homeOptedIn){
    return <div><HomeOptedIn /></div>
    }
    return undefined;
  }

  public renderNav(){
    if(this.state.currentPage !== page.signUp){
    return<div><Nav showLinks = {true}/></div>
    }
    return<div><Nav showLinks = {false}/></div>
  }

  public renderJumboTron(){
      return<div><Jumbotron/></div>
  }

  public renderProfilePage(){
    if(this.state.currentPage === page.profile){
      return <div>Profile</div>
    }
    return undefined;
  }

  public renderSignUpPage(){
    if(this.state.currentPage === page.signUp){
      return <div><SignUp onSignup = {this.onSignUpCall}/></div>
    }
    return undefined;
  }

  public goToProfilePage = () => {
    this.setState({currentPage: page.profile});
  }

  public onSignUpCall = () =>{
    this.setState({currentPage: page.homeNoOptIn});
}

  public render() {
    return (
      <div>
        {this.renderNav()}
        {this.renderJumboTron()}
        {this.renderHomePage()}
        {this.renderProfilePage()}
        {this.renderSignUpPage()}
      </div>
    );
  }
}

export default App;
