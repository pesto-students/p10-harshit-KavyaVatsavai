import React from 'react';
import { connect } from 'react-redux';
import { incrementStep, resetSteps } from './actions';



const StepCounter = ({ step, incrementStep, resetSteps }) => {
  return (
    <div style={{  padding: '250px 400px',
       
        textalign: 'center',
        backgroundColor:'gray'}}>
          <h1>Step Counter: {step}</h1>
         
              <button className="button" onClick={incrementStep}>Add Step</button>
              <button className="button" onClick={resetSteps}>Reset Steps</button>
              </div>
          
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.step,
  };
};

export default connect(mapStateToProps, { incrementStep, resetSteps })(StepCounter);
