import React, { useState,useEffect } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import {firestore} from '../../services/firebase'

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";




export default function Tables() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async() => {
      setTableData([])
      firestore.collection("foodItems").onSnapshot((snapshot) => {
        if(!snapshot.empty){
          snapshot.forEach((snap) => {
            if(isMounted){
              setTableData(prevState => [...prevState, [snap.data().foodItem, snap.data().foodCat, snap.data().price]])
            }
          })
        }
      })
    }

    fetchData();

    return () => {
      isMounted = false;
    }

  },[])



  return (
    <>
      <PageTitle title="Current Items" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="All Orders"
            data={tableData}
            columns={["Food", "Type", "Price"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
