import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />

      <Grid container spacing={4} paddingX={5} marginY={5}>
        <Grid item xs={4}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>


        <Grid item xs={3}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              border: 3,
              borderRadius: 3,
              borderColor: "grey",
              padding: 3,
            }}
          >
            <img src="./mobile-img/mobile1.png" height={"50px"} />
            <div>
              <Typography variant="h6">Octopus Deploy</Typography>
              <Typography variant="body2">
                A unified DecOPs automation platform for your team.
              </Typography>
            </div>
          </Box>
        </Grid>
       
      </Grid>

      <Footer />
    </>
  );
};

export default Services;
