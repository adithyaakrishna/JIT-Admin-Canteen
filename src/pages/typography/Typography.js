import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

// styles
import useStyles from "./styles";
//import { makeStyles } from '@material-ui/core/styles';

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import TextField from '@material-ui/core/TextField';

export default function EditPage() {
  var classes = useStyles();
  const [tod, setTod] = React.useState('TOD');
  const [foodCategory, setfoodCategory] = React.useState('FC');
  const timeofTheDay = [
    {
      value: 'Breakfast',
      label: 'Breakfast',
    },
    {
      value: 'Lunch',
      label: 'Lunch',
    },
    {
      value: 'Snacks',
      label: 'Snacks',
    },
  ];
  const foodCat = [
    {
      value: 'Breakfast',
      label: 'Breakfast',
    },
    {
      value: 'Lunch',
      label: 'Lunch',
    },
    {
      value: 'Snacks',
      label: 'Snacks',
    },
  ];

  const handleChange = (event) => {
    setTod(event.target.value);
  };

  const handleChange2 = (event) => {
    setfoodCategory(event.target.value);
  };

  return (
    <>
      <PageTitle title="Edit Items" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="" disableWidgetMenu>
            <Typography
              variant="h3"
              color="primary"
              className={classes.text}
            >
              Add Food Items
            </Typography>
            <div className={classes.dashedBorder}>
              <TextField
                id="outlined-full-width"
                label="Day"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Monday"
                helperText="Enter The Day"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Food Item"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Idly Vada"
                helperText="Enter The Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-select-currency-native"
                style={{ margin: 10, paddingRight: "25%" }}
                select
                label="Time of The Day"
                value={tod}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Select Time of The Day"
                variant="outlined"
              >
                {timeofTheDay.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              {/* <br /> */}
              <TextField
                id="outlined-select-currency-native"
                style={{ margin: 10, paddingRight: "25%" }}
                select
                label="Food Category"
                value={foodCategory}
                onChange={handleChange2}
                SelectProps={{
                  native: true,
                }}
                helperText="Select Food Category"
                variant="outlined"
              >
                {foodCat.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-full-width"
                label="Price"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Rs."
                helperText="Enter The Price of The Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button variant="contained" color="primary" style={{ marginRight: 10, margin: 10}}>
                Save
              </Button>
              <Button variant="contained" color="secondary" style={{ marginRight: 10, margin: 10 }}>
                Delete
              </Button>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="" disableWidgetMenu>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.text}
            >
              Add Daily Specials
            </Typography>
            <div className={classes.dashedBorder}>
              <TextField
                id="outlined-full-width"
                label="Day"
                color="secondary"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Enter Day ID"
                helperText="1 or 2 or 3"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-full-width"
                label="Day"
                color="secondary"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Monday"
                helperText="Enter The Day"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              
              <TextField
                id="outlined-full-width"
                label="Food Item"
                color="secondary"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Food Item"
                helperText="Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              
              <TextField
                id="outlined-full-width"
                label="Price"
                color="secondary"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Rs."
                helperText="Enter The Price of The Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button variant="contained" color="primary" style={{ marginRight: 10, margin: 10 }}>
                Save
              </Button>
              <Button variant="contained" color="secondary" style={{ marginRight: 10, margin: 10 }}>
                Delete
              </Button>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="" disableWidgetMenu>
            <Typography
              variant="h3"
              color="success"
              className={classes.text}
            >
              Edit Blog Contents
            </Typography>
            <div className={classes.dashedBorder}>
              <TextField
                id="outlined-full-width"
                label="Blog Post"
                color="success"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Blog Post Number"
                helperText="1 or 2 or 3"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Day"
                color="success"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Monday"
                helperText="Enter The Day"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-full-width"
                label="Food Item"
                color="success"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Food Item"
                helperText="Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-full-width"
                label="Price"
                color="success"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Rs."
                helperText="Enter The Price of The Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button variant="contained" color="primary" style={{ marginRight: 10, margin: 10 }}>
                Save
              </Button>
              <Button variant="contained" color="secondary" style={{ marginRight: 10, margin: 10 }}>
                Delete
              </Button>
            </div>              
          </Widget>
        </Grid>
        
      </Grid>
    </>
  );
}
