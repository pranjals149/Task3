import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Weather from './Components/Weather/Weather';
import { setWeatherData } from './features/weather/weatherSlice';
import { selectWeatherData } from './features/weather/weatherSlice'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const { REACT_APP_WHETHER_API, REACT_APP_API_URL } = process.env;

function App() {

  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("")
  const [clicked, setClicked] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch()

  const weather_data = useSelector(selectWeatherData)

  const fetchWeather = () => {
    axios
      .get(`http://${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_WHETHER_API}&units=metric`)
      .then((res) => {
        dispatch(setWeatherData(res.data));
      })
      .catch(err => alert(err.message))

    setClicked(true)

    handleClose()
  }

  return (
    <div className="App">

      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{
        display: "flex",
        margin: "0 auto",
      }}>
        Enter your city
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter your City</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter city"
            type="email"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={fetchWeather} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      {clicked && <Weather weather_data={weather_data} />}

    </div>
  );
}

export default App;
