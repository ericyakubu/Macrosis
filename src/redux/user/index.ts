import { userSlice } from "./slice";

// export * from './asyncActions';
export * from "./slice";
// export * from './types';

export const {
  // togglePositionDetailsVisibility,
  // hidePositionDetails,
  // showPositionDetails,
  // removeJobPosition,
  // changeJobPositionStatus,
  // changeSearchPositionQuery,
} = userSlice.actions;

export default userSlice.reducer;
