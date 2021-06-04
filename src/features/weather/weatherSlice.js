import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather_data: {},
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.weather_data = action.payload;
        },
    },
});

export const selectWeatherData = (state) => state.weather.weather_data;

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;