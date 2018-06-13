import * as React from 'react';
import './App.css';
import Points from './Points';

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

class HomeNoOptIn extends React.Component<{}, IAppState> {
  
  constructor(props:any){
    super(props);
    this.state = {
      currentPage: page.homeNoOptIn
    }
  }

  
  
  public render() {
    return (
        
        <div><Points /></div>
    );
  }
}

export default HomeNoOptIn;
