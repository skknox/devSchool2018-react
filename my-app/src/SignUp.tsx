import * as React from 'react';
import './App.css';
import {Cohort} from './Cohort';
import {Office} from './Office';
import {User} from './User';


interface ISignUpProps {
    onSignUp: () => void,
    currentUser: User
}

class SignUp extends React.Component<ISignUpProps> {


    constructor(props: any) {
        super(props);
        this.state = this.props.currentUser;
        
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOfficeChange = this.handleOfficeChange.bind(this);
        this.handleFunFactChange = this.handleFunFactChange.bind(this);
        this.handleCohortChange = this.handleCohortChange.bind(this);
    }
    
    public handleNameChange(event:any) {
        this.props.currentUser.name = event.target.value;
    }

    public handleEmailChange(event:any){
        this.props.currentUser.email = event.target.value;
    }

    public handleOfficeChange(event:any){
        this.props.currentUser.office = event.target.value;
    }

    public handleFunFactChange(event:any){
        this.props.currentUser.funFact = event.target.value;
    }

    public handleCohortChange(event:any){
        this.props.currentUser.cohort = event.target.value;
    }

    

    public Login = () => {
        this.props.onSignUp()
    }

    public render() {
        return (
            <div>
                <div className="container">
                    <div style={{paddingTop: "3%"}}>
                        <div style={{paddingBottom: "3%" }}>
                            <form id="signUpForm">
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Name"  onChange={this.handleNameChange} />
                                    </div>
                                    <div className="form-group col-md-5 offset-md-2">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={this.handleEmailChange} />
                                    </div>

                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-5 offset-md-2 ">
                                        <label htmlFor="confirmPassword4">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword4" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="officeLocation">Office</label>
                                        <select className="form-control" id="officeLocation" onChange={this.handleOfficeChange}>
                                            <option value={undefined} >Select...</option>
                                            {Object.keys(Office).map(office => (
                                                <option key={office} value={Office[office]}>
                                                    {Office[office]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-5 offset-md-2">
                                        <label htmlFor="cohortLevel">Cohort Level</label>
                                        
                                        <select className="form-control" id="cohortLevel" onChange={this.handleCohortChange}>
                                            <option value={undefined} >Select...</option>
                                            {Object.keys(Cohort).map(cohort => (
                                                <option key={cohort} value={cohort}>
                                                    {cohort}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="funFact">Fun Fact</label>
                                        <textarea  className="form-control" id="funFact" placeholder="Fun Fact" onChange={this.handleFunFactChange} />

                                    </div>
                                </div>
                                <br />
                                
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="photoUpLoad">Upload Photo</label>
                                    <input type="file" className="form-control-file" id="photoUpload" />
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Notify me via email when lunch partners are found.
    </label>
                                    </div>
                                </div>
                                <button onClick ={this.Login} type="submit" className="btn btn-primary">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SignUp;
