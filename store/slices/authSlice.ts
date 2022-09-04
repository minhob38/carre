import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  isTotalTermAgreement: boolean;
  isInfoUseTermAgreement: boolean;
  isInfoTermAgreement: boolean;
  isUseTermAgreement: boolean;
}

const initialState: IState = {
  isTotalTermAgreement: false,
  isInfoUseTermAgreement: false,
  isInfoTermAgreement: false,
  isUseTermAgreement: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialize: (state) => {
      for (const key in state) {
        state[key] = initialState[key];
      }
    },
    clickTotalAgreement: (state) => {
      if (state.isTotalTermAgreement) {
        state.isTotalTermAgreement = false;
        state.isInfoUseTermAgreement = false;
        state.isInfoTermAgreement = false;
        state.isUseTermAgreement = false;
      } else {
        state.isTotalTermAgreement = true;
        state.isInfoUseTermAgreement = true;
        state.isInfoTermAgreement = true;
        state.isUseTermAgreement = true;
      }
    },
    clickInfoUseTermAgreement: (state) => {
      state.isInfoUseTermAgreement = !state.isInfoUseTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    clickInfoTermAgreement: (state) => {
      state.isInfoTermAgreement = !state.isInfoTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
    clickUseTermAgreement: (state) => {
      state.isUseTermAgreement = !state.isUseTermAgreement;
      if (
        state.isInfoUseTermAgreement &&
        state.isInfoTermAgreement &&
        state.isUseTermAgreement
      ) {
        state.isTotalTermAgreement = true;
      } else {
        state.isTotalTermAgreement = false;
      }
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
