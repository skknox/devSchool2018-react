import * as React from 'react';
import './App.css';

interface ISignUpProps {
    onSignUp: () => void
}

class SignUp extends React.Component<ISignUpProps> {
    constructor(props: any) {
        super(props);
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
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-5 offset-md-2">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
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
                                    <div className="form-group col-md-4">
                                        <label htmlFor="officeLocation">Office</label>
                                        <select id="officeLocation" className="form-control">
                                            <option>Chicago</option>
                                            <option>Atlanta</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3 offset-md-5">
                                        <label htmlFor="cohortLevel">Cohort Level</label>
                                        <select id="cohortLevel" className="form-control">
                                            <option>C1</option>
                                            <option>C2</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group col-md-7">
                                        <label htmlFor="funFact">Fun Fact</label>
                                        <input type="text" className="form-control" id="funFact" placeholder="Fun Fact" />

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
