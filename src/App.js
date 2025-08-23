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

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Cairo, Roboto",
    },
  });
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir="rtl"
                >
                  <Typography variant="h2" mr={2.5}>
                    بورسعيد
                  </Typography>
                  <Typography variant="h5" mr={2.5}>
                    4-5-2072
                  </Typography>
                </div>
                {/* ==City & Time== */}
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  dir="rtl"
                >
                  {/* Degree & Description */}
                  <div>
                    {/* Temp */}
                    <div>
                      <Typography variant="h1" sx={{ textAlign: "right" }}>
                        38
                      </Typography>
                      {/* Todo Temp Image */}
                      {/* ==Todo Temp Image== */}
                    </div>
                    {/* ==Temp== */}
                    <Typography variant="h6">Broken Clouds</Typography>
                    {/* Min & Max */}
                    <div style={{ display: "flex", gap: 10 }}>
                      <h5>الغري: 38</h5>
                      <h5> | </h5>
                      <h5>الكبري: 38</h5>
                    </div>
                    {/* ==Min & Max== */}
                  </div>
                  {/* ==Degree & Description== */}
                  <CloudIcon sx={{ fontSize: 200 }} />
                </div>
              </div>
              {/* ==Content== */}
            </div>
            {/* ==Card== */}
            <div style={{ width: "100%", textAlign: "start" }}>
              <Button variant="text" sx={{ color: "white" }}>
                انجليزي
              </Button>
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
