import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type map = {
  key: number;
  mapNum: string;
  mapLocation1: number;
  mapLocation2: number;
  mapLocationName: string;
};
const initialState: map[] = [
  
];

export const __sendMapInfo = createAsyncThunk(
  "MAPINFO",
  async (payload:map, thunkAPI) => {
    console.log(payload);
    const { data } = await axios.post(`http://localhost:3001/catMap`, payload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const MapSlice = createSlice({
  name: "catLoctionMap",
  initialState,
  reducers: {},
  extraReducers: {},
});
export const {} = MapSlice.actions;
export default MapSlice.reducer;
