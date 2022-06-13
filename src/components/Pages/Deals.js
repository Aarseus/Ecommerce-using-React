import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
const Deals = () => {
  return (
    <>
      <Navbar />
      <Box className="container-fluid" display={"flex"}>
        <Box className="left-sidebar" width={"25%"} p={"25px"}>
          <Typography variant="h4" color={"secondary"}>
            Deals
          </Typography>
          <Link href="#" underline="hover" variant="button" display={"block"}>
            Deals of the day.
          </Link>
          <Link href="#" underline="hover" variant="button" display={"block"}>
            Flash Sales
          </Link>
          <Link href="#" underline="hover" variant="button" display={"block"}>
            Most Popular
          </Link>
          <Typography variant="h4" color={"secondary"}>
            hiiii
          </Typography>
          <RadioGroup>
            <FormControlLabel
              value="a"
              control={<Radio defaultChecked />}
              label="Below $25"
            />
            <FormControlLabel
              value="b"
              control={<Radio />}
              label="$25 - $100"
            />
            <FormControlLabel
              value="c"
              control={<Radio />}
              label="$100 - $250"
            />
            <FormControlLabel
              value="d"
              control={<Radio />}
              label="$250 - $400"
            />
            <FormControlLabel
              value="e"
              control={<Radio />}
              label="$400 - $550"
            />
          </RadioGroup>
        </Box>
        <Box className="main-content" width={"75%"} padding={"25px"}>
          <Grid container spacing={4}>
            <Grid item xs={4} padding={"25px"}>
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>

              </Card>
            </Grid>

            <Grid item xs={4} padding={"25px"}>
              
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
            <Grid item xs={4} padding={"25px"}>
              
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
            <Grid item xs={4} padding={"25px"}>
              
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
            <Grid item xs={4} padding={"25px"}>
              
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
            <Grid item xs={4} padding={"25px"}>
              
              <Card sx={{ maxWidth: 345, shadow: "large" }} raised>
                <CardHeader title="Samsung Note 9+" subheader="RS. 1,30,000" />
                <CardMedia
                  component="img"
                  height="194"
                  image="./mobile-img/mobile1.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Note9 Android smartphone. Announced Aug 2018.
                    Features 6.4″ display, Exynos 9810 chipset, 4000 mAh
                    battery, 512 GB storage, 8 GB RAM.
                  </Typography>
                </CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                  <Button variant="text" size="small">
                    View Details
                  </Button>
                </Box>
              </Card>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Deals;
