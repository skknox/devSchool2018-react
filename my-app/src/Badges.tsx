import * as React from 'react';
import './App.css';


class Badges extends React.Component {

    public render() {
        return (
            <div className="container" id="badgesDiv">

                <h1 className="display-3">Your badges: </h1>
                <div className="row col-sm-8 offset-sm-2">
                    <span className="col-sm-3 ">
                        <i className="fa fa-star-o circleButton"/>
                    </span>
                    <span className="col-sm-3">
                        <i className="fa fa-paper-plane-o circleButton"/>
                    </span>
                    <span className="col-sm-3">
                        <i className="fa fa-comments-o circleButton"/>
                    </span>
                    <span className="col-sm-3">
                        <i className="fa fa-user-o circleButton"/>
                    </span>
                </div>
                <div className="row col-sm-8 offset-sm-2">
                    <span className="col-sm-3 ">
                        <p className="badgeCaption">Top lunchgoer for the month of March!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Top lunchgoer for the month of March!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Top lunchgoer for the month of March!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Top lunchgoer for the month of March!</p>
                    </span>
                </div>

            </div>

        );
    }
}

export default Badges;
