import * as React from 'react';
import './App.css';

import { Cohort } from './Cohort';
import HomeNoOptIn from './HomeNoOptIn';
import HomeOptedIn from './HomeOptedIn';
import HomeOptingIn from './HomeOptingIn';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import { Office } from './Office';
import { page } from './pageEnum';
import { pool } from './Pool';
import Profile from './Profile';
import SignUp from './SignUp';
import { User } from './User';



interface IAppState {
  currentPage: page,
  currentUser: User
}

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: page.signUp,
      currentUser: new User("", Office.chicago, "", "", Cohort.C1)
    }
  }

  public onOptIn = () => {
    this.setState({ currentPage: page.homeOptingIn });
  }
  public onOptedIn = () => {
    this.setState({ currentPage: page.homeOptedIn })
    this.addDummyUser();
    pool.push(this.state.currentUser);

  }

  public goToProfile = () => {
    this.setState({ currentPage: page.profile });
  }

  public renderHomePage() {
    if (this.state.currentPage === page.homeNoOptIn) {
      return <div><HomeNoOptIn onOptIn={this.onOptIn} /></div>
    } else if (this.state.currentPage === page.homeOptingIn) {
      return <div><HomeOptingIn onOptedIn={this.onOptedIn} /></div>
    } else if (this.state.currentPage === page.homeOptedIn) {
      if (pool.length > 1) {
        return <div><HomeOptedIn goToProfile={this.goToProfile} matchedUser={pool[0]} /></div>
      }
      return <div><HomeOptedIn goToProfile={this.goToProfile} matchedUser={undefined} /></div>
    } else {
      return undefined;
    }
  }

  public onSignUp = () => {
    this.setState({ currentPage: page.homeNoOptIn });
  }

  public renderSignUpPage() {
    if (this.state.currentPage === page.signUp) {
      return <div><SignUp onSignUp={this.onSignUp} currentUser={this.state.currentUser} /></div>
    }
    return undefined;
  }

  public renderNav() {
    if (this.state.currentPage !== page.signUp) {
      return <div><Nav showLinks={true} /></div>
    }
    return <div><Nav showLinks={false} /></div>
  }

  public renderJumboTron() {
    return <div><Jumbotron /></div>
  }

  public renderProfilePage() {
    if (this.state.currentPage === page.profile) {
      return <div><Profile matchedUser = {pool[0]} /></div>
    }
    return undefined;
  }

  public addDummyUser() {
    pool.push(new User("Sydney Knox", Office.chicago, "devchool@gmail.com", "This is a fun fact pulled from a object", Cohort.C1))
  }

  public goToProfilePage = () => {
    this.setState({ currentPage: page.profile });
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
