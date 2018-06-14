import * as React from 'react';
import './App.css';
import { page } from './pageEnum';

interface INavProps {
    showLinks: boolean
}

class Nav extends React.Component<INavProps> {

    public goToHomePage = () => {
        this.setState({ currentPage: page.homeNoOptIn });
    }
    public goToSignUpPage = () => {
        this.setState({ currentPage: page.signUp });
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


