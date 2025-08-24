import "./App.css";
import {
  Stack,
  Button,
  createTheme,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/min/locales";

let cancelAxios = null;
function App() {
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    temp: null,
    name: null,
    weatherDescription: null,
    max: null,
    min: null,
    icon: null,
  });

  const theme = createTheme({
    typography: {
      fontFamily: "Cairo, Roboto",
    },
  });

  useEffect(() => {
    setDate(moment().format("llll"));
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setError(false);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=de6b66a46b3acafcff7749637b4901be`,
            {
              cancelToken: new axios.CancelToken((c) => {
                cancelAxios = c;
              }),
            }
          )
          .then((response) => {
            const name = response.data.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            const currentTemp = Math.round(response.data.main.temp - 273.15);
            const max = Math.round(response.data.main.temp_max - 273.15);
            const min = Math.round(response.data.main.temp_min - 273.15);
            const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

            setData({
              name,
              temp: currentTemp,
              weatherDescription: response.data.weather[0].description,
              max,
              min,
              icon,
            });
            console.log(data);
          })
          .catch((err) => console.log(err));
      },
      (error) => {
        setError(true);
      }
    );

    return () => {
      console.log("canceling");
      if (cancelAxios) {
        cancelAxios();
      }
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* Content Container */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 15,
            }}
          >
            {/* Card */}
            <div
              style={{
                width: "100%",
                backgroundColor: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Content */}
              <div>
                {/* City & Time */}
                <div>
                  <Typography variant="h2" sx={{ fontFamily: "" }} mr={2.5}>
                    {data.name}
                  </Typography>
                  <Typography variant="h5" mr={2.5}>
                    {date}
                  </Typography>
                </div>
                {/* ==City & Time== */}
                <hr />
                <Stack
                  gap={3}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "space-around",
                      lg: "space-around",
                    },
                  }}
                >
                  {/* Degree & Description */}
                  <div>
                    {/* Temp */}
                    <Stack
                      direction="row"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" sx={{ textAlign: "right" }}>
                        {data.temp}
                      </Typography>
                      <img src={data.icon} alt="weather icon" />
                      {/* Todo Temp Image */}
                      {/* ==Todo Temp Image== */}
                    </Stack>
                    {/* ==Temp== */}
                    <Typography variant="h6">
                      {data.weatherDescription}
                    </Typography>
                    {/* Min & Max */}
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <h5>min: {data.min}</h5>
                      <h5> | </h5>
                      <h5>max: {data.max} </h5>
                    </div>
                    {/* ==Min & Max== */}
                  </div>
                  {/* ==Degree & Description== */}
                  <CloudIcon
                    sx={{
                      fontSize: 200,
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />
                </Stack>
              </div>
              {/* ==Content== */}
            </div>
            {/* ==Card== */}
            <div
              style={{
                // display: error ? "flex" : "default",
                justifyContent: "space-around",
                width: "100%",
                textAlign: "start",
              }}
            >
              {error && (
                <Typography
                  component="p"
                  style={{
                    color: "greenyellow",
                  }}
                >
                  الرجاء تفعيل امكانيه الوصول للموقع
                </Typography>
              )}
            </div>
          </div>
          {/* ==Content Container== */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

const Test = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">اهلا</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default App;
