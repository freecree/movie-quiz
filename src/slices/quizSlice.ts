import { createSlice } from '@reduxjs/toolkit';
import { hasPrev } from '../utils/quizUtils';

export interface QuizState {
  currentStep: number;
}

const initialState: QuizState = {
  currentStep: 0,
};

export const counterSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    stepForward: (state) => {
      state.currentStep += 1;
    },
    stepBack: (state) => {
      if (hasPrev(state.currentStep)) {
        state.currentStep -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { stepForward, stepBack } = counterSlice.actions;

export default counterSlice.reducer;
