const QUIZ_STEPS_AMOUNT = 3;

export const getProgressPersentage = (step: number): number => {
  console.log('step: ', step);
  return Math.round(((step + 1) / QUIZ_STEPS_AMOUNT) * 100);
};

export const hasPrev = (step: number): boolean => {
  return step >= 1;
};
