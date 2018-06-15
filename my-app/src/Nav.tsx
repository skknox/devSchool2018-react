import * as React from 'react';
import './App.css';

interface INavProps {
    showLinks: boolean,
    goToHomePage: () => void,
    goToSignUp: () => void
}

class Nav extends React.Component<INavProps> {

    constructor(props: any) {
        super(props);
    }

    public goToHomePage = () => {
        this.props.goToHomePage();
    }
    public goToSignUpPage = () => {
        this.props.goToSignUp();
    }

    public render() {
        if (this.props.showLinks === true) {
            return (

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
            )
        }
        return (
            <div>
                <br /><br />
            </div>

        );
    }

}


export default Nav;


