import React from 'react';
// import Card from './card.jsx';
import MoveStuffAround from '../ReactTicker';
function SchedulerItem() {
  const cards = [0, 1, 3];
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col px-05">
            <MoveStuffAround data={['value']} />
          </div>
        </div>

        {/* <div className="row py-1">
          <div className="col-md-3 px-05">
             <Card cName="card bg-dark text-white mb-1 main-card embed-responsive embed-responsive-16by9" />
            <Card cName="card bg-dark text-white mb-1 main-card embed-responsive embed-responsive-16by9" />
            <Card cName="card bg-dark text-white embed-responsive embed-responsive-16by9" /> 
          </div>
          <div className="col-md px-05">
            <div className="card bg-dark text-white h-100">
              <div className="card-img-overlay h-100">
                <h2 className="card-title card-text-bottom">
                  Воспомнинаия Василия Ивановича Крикуса о Великой отечественной
                  войне
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-05">
            <div className="bg-light h-100" />
          </div>
        </div>
      */}
      </div>
    </div>
  );
}
export default SchedulerItem;
