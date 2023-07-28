export const INCREMENT_STEP = 'INCREMENT_STEP';
export const RESET_STEPS = 'RESET_STEPS';

export const incrementStep = () => {
  return {
    type: INCREMENT_STEP,
  };
};

export const resetSteps = () => {
  return {
    type: RESET_STEPS,
  };
};
