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
    return<div><Nav/></div>
    }
    return undefined;
  }

  public renderJumboTron(){
    if(this.state.currentPage !== page.signUp){
      return<div><Jumbotron/></div>
      }
      return undefined;
  }

  public renderProfilePage(){
    if(this.state.currentPage === page.profile){
      return <div>Profile</div>
    }
    return undefined;
  }

  public onSignUp = () => {
    this.setState({currentPage: page.homeNoOptIn});
  }
  
  public renderSignUpPage(){
    if(this.state.currentPage === page.signUp){
      return <div><SignUp onSignUp = {this.onSignUp}/></div>
    }
    return undefined;
  }

  public goToProfilePage = () => {
    this.setState({currentPage: page.profile});
  }

  public render() {
    return (
      <div>
        {this.state.currentPage}
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
