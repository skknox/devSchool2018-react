import * as React from 'react';
import './App.css';


class Badges extends React.Component {

    public render() {
        return (
            <div className="container" id="badgesDiv">

                <h1>Your badges: </h1>
                <div className="row col-sm-10 offset-sm-1 badgeRow">
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
                <div className="row col-sm-10 offset-sm-1">
                    <span className="col-sm-3 ">
                        <p className="badgeCaption">Top lunchgoer for the month of March!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Got Lunch with a visiting fin from another office!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Reported great conversations with a new fin over lunch!</p>
                    </span>
                    <span className="col-sm-3">
                        <p className="badgeCaption">Active user, checking in for more than thirty days straight!</p>
                    </span>
                </div>

            </div>

        );
    }
}

export default Badges;
