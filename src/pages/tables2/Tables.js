import React from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";


const datatableData = [
  ["Idly", "South-Indian", "15 Plates", "₹30"],
  ["Coffee", "Beverage", "20", "₹10"],
  ["Tea", "Beverage", "18", "₹10"],
  ["Lays", "Snack", "Tampa", "₹10"],
];

export default function Tables() {
  return (
    <>
      <PageTitle title="Current Items" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="All Orders"
            data={datatableData}
            columns={["Food", "Type", "Quantity", "Price"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
