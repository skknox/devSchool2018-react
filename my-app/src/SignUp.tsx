import * as React from 'react';
import './App.css';
// import HomeNoOptIn from './HomeNoOptIn';

interface ISignUpProps{
    onSignUp: () => void
}

class SignUp extends React.Component<ISignUpProps> {
    constructor(props:any){
        super(props);
        
      }

  public Login = () =>{
        this.props.onSignUp();
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
