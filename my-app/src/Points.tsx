import * as React from 'react';
import './App.css';


class Points extends React.Component {
    
  public render() {
    return (
        <div className="row" id="pointsDiv">
               <h4 className="col-sm-2 offset-sm-2">Your Points: </h4>
               <div className="progress col-sm-6">
                 <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0}
                   aria-valuemax={100} style={{ width: "75%" }} />
               </div>
             </div>
    );
  }
}

export default Points;
