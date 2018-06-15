import * as React from 'react';
import './App.css';

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

class Leaderboard extends React.Component<{}, IAppState> {

    public render() {
        return (
           
            <div className="container leaderboard-container" >
                <h3>Leading Lunchers</h3>
                <table className="table table-dark table-sm table-striped">
                    <thead>
                        <th>Rank</th>
                        <th>Score</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>33</td>
                            <td>Sydney Knox</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>27</td>
                            <td>Wesley Evans</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>24</td>
                            <td>Hermione Granger</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>18</td>
                            <td>Molly Weasley</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>9</td>
                            <td>Harry Potter</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>6</td>
                            <td>George Weasley</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>2</td>
                            <td>Remus Lupin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
    }
}

export default Leaderboard;
