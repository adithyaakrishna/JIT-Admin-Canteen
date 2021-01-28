import React, { useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

// styles
import useStyles from "./styles";
//import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import {auth, firestore, storage} from '../../services/firebase'

export default function EditPage() {
  var classes = useStyles();
  const [tod, setTod] = React.useState('TOD');
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

  const afiImageInput = useRef();

  var [afiDay, setafiDay] = useState("");
  var [afiFood, setafiFood] = useState("");
  var [afiTod, setafiTod] = useState(timeofTheDay[0].value);
  var [afiFoodCat, setafiFoodCat] = useState(foodCat[0].value);
  var [afiPrice, setafiPrice] = useState("");
  var [afiImage, setAfiImage] = useState(null);

  var [adsDayID, setadsDayID] = useState("");
  var [adsDay, setadsDay] = useState("");
  var [adsFood, setadsFood] = useState("");
  var [adsPrice, setadsPrice] = useState("");
  var [adsDesc, setadsDesc] = useState("");

  var [ebcBlogID, setebcBlogID] = useState("");
  var [ebcHeading, setebcHeading] = useState("");
  var [ebcTitle, setebcTitle] = useState("");
  var [ebcDesc, setebcDesc] = useState("");
  var [ebcAuthor, setebcAuthor] = useState("");

  const handleEbcSubmit = async () => {
    firestore.collection("blogContent").add({
      blogID: ebcBlogID,
      heading: ebcHeading,
      title: ebcTitle,
      desc: ebcDesc,
      author: ebcAuthor
    }).then(() => {
      setebcBlogID("");
      setebcHeading("");
      setebcTitle("");
      setebcDesc("");
      setebcAuthor("")
    })
  }

  const handleAdsSubmit = async() => {
    firestore.collection("dailySpecials").where("dayID","==",adsDayID).onSnapshot(async(snapshot) => {
      await firestore.collection("dailySpecials").doc(snapshot.docs[0].id).update({
        day: adsDay,
        foodItem: adsFood,
        price: adsPrice,
        description: adsDesc
      }).then(() => {
        setadsDayID("")
        setadsDay("")
        setadsFood("")
        setadsDesc("")
        setadsPrice("")
      }).catch((err) => {
        console.log(err.message)
      })
    })
  }

  const handleAfiSubmit = async () => {

    storage.ref(`afiImages/${afiImage}`).put(afiImage).then((snapshot) => {
      snapshot.ref.getDownloadURL().then(async(url) => {
        await firestore.collection("foodItems").add({
          day: afiDay,
          foodItem: afiFood,
          timeofTheDay: afiTod,
          foodCat: afiFoodCat,
          price: afiPrice,
          imageURL: url
        }).then(() => {
          setafiDay("");
          setafiFood("");
          setafiFoodCat(foodCat[0].value);
          setafiPrice("");
          setafiTod(timeofTheDay[0].value)
          afiImageInput.current = ""
        })
      })
    })

    
  }

  const handleAfiImageChange = async(e) => {
    if(e.target.files[0]){
      const image = e.target.files[0];
      setAfiImage(image)
    }
  }

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
                value={afiDay}
                onChange={(e) => { setafiDay(e.target.value) }}
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
                value={afiFood}
                onChange={(e) => { setafiFood(e.target.value) }}
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
                value={afiTod}
                label="Time of The Day"
                onChange={(e) => { setafiTod(e.target.value) }}
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
                value={afiFoodCat}
                onChange={(e) => { setafiFoodCat(e.target.value) }}
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
                value={afiPrice}
                onChange={(e) => { setafiPrice(e.target.value) }}
                helperText="Enter The Price of The Food Item"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <input type = 'file' onChange = {handleAfiImageChange} ref = {afiImageInput}></input>
              <br />
              <Button
                variant="contained"
                color="primary"
                size="medium"
                style={{ marginRight: 10, margin: 10 }}
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick = {handleAfiSubmit}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
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
                value={adsDayID}
                onChange={(e) => { setadsDayID(e.target.value) }}
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
                value={adsDay}
                onChange={(e) => { setadsDay(e.target.value) }}
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
                value={adsFood}
                onChange={(e) => { setadsFood(e.target.value) }}
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
                label="Description"
                value={adsDesc}
                onChange={(e) => { setadsDesc(e.target.value) }}
                color="secondary"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder=""
                helperText="Enter The Description"
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
                value={adsPrice}
                onChange={(e) => { setadsPrice(e.target.value) }}
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
              <Button
                variant="contained"
                color="primary"
                size="medium"
                style={{ marginRight: 10, margin: 10 }}
                className={classes.button}
                onClick={handleAdsSubmit}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
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
                value={ebcBlogID}
                onChange={(e) => { setebcBlogID(e.target.value) }}
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
                label="Heading"
                value={ebcHeading}
                onChange={(e) => { setebcHeading(e.target.value) }}
                color="success"
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Heading"
                helperText="Enter The Heading"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-full-width"
                label="Title"
                color="success"
                value={ebcTitle}
                onChange={(e) => { setebcTitle(e.target.value) }}
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Title"
                helperText="Enter The Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Food Description"
                color="success"
                value={ebcDesc}
                onChange={(e) => { setebcDesc(e.target.value) }}
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Food Description"
                helperText="Food Description"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-full-width"
                label="Author"
                color="success"
                value={ebcAuthor}
                onChange={(e) => { setebcAuthor(e.target.value) }}
                style={{ margin: 10, paddingRight: "25%" }}
                placeholder="Author"
                helperText="Author"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={handleEbcSubmit}
                style={{ marginRight: 10, margin: 10 }}
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
             </Button>
            </div>
          </Widget>
        </Grid>

      </Grid>
    </>
  );
}
