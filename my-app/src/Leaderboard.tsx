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
           
            <div className="container" >
                <h3>Leading Lunchers</h3>
                <table className="table table-dark table-sm table-striped table-bordered">
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
                    </tbody>
                </table>
            </div>
    );
    }
}

export default Leaderboard;
