import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Adithya Krishna", "adi@gmail.com", "9482858070", "Coffee"],
  ["Deepthi", "deepthi@gmail.com", "9113952116", "Idly"],
  ["Niveditha", "niveda@gmail.com", "1234567890", "Lays"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Orders" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="All Orders"
            data={datatableData}
            columns={["Name", "Email", "Phone", "Order", "Date"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
