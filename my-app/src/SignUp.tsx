import * as React from 'react';
import './App.css';
import HomeNoOptIn from './HomeNoOptIn';

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

class SignUp extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentPage: page.signUp
        }
    }

  public Login =()=>{
        // this.setState({currentPage: page.homeNoOptIn});
        return <div><HomeNoOptIn /></div>
  }

  public render() {
    return (
        <div>
            <button  onClick={this.Login}> test for now</button>
        </div>
    );
  }
}

export default SignUp;
