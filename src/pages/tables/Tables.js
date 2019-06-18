import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MUIDataTable from "mui-datatables";

import PageTitle from '../../components/PageTitle';
import Widget from "../../components/Widget";

import { Typography } from "../../components/Wrappers";

const datatableData = [
 ["2019/02/14 11:50PM", "Joe James", "POS", "$10.00", "Cash", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/02/14 10:33PM", "John Walsh", "POS", "$10.00", "Credit", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/02/14 10:01PM", "", "General Admission", "$10.00", "Credit", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/02/10 8:00AM", "James Houston", "Ticket", "$10.00", "Credit", "John Referrer", "", "10OFF", "Bar", "Refund"],
 ["2019/02/09 1:54AM", "Prabhakar Linwood", "POS", "$10.00", "Credit", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/02/09 1:02AM", "Kaui Ignace", "POS", "$10.00", "Cash", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/02/09 10:09PM", "Esperanza Susanne", "POS", "$10.00", "Cash", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/01/31 10:00PM", "", "General Admission", "$10.00", "Cash", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/31 10:00PM", "Meral Elias", "Guest List", "$10.00", "Comped", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/31 10:00PM", "Deep Pau", "Guest List", "$10.00", "Cash", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/31 10:00PM", "Sebastiana Hani", "POS", "$10.00", "Credit", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/01/31 10:00PM", "Marciano Oihana", "POS", "$10.00", "Credit", "John Referrer", "Jane Server", "", "Bar", "Refund"],
 ["2019/01/11 10:00PM", "Brigid Ankur", "Ticket", "$10.00", "Credit", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/11 10:00PM", "Anna Siranush", "Ticket", "$10.00", "Cash", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/11 10:00PM", "Avram Sylva", "Ticket", "$10.00", "Cash", "John Referrer", "", "", "Bar", "Refund"],
 ["2019/01/10 10:00PM", "Serafima Babatunde", "Ticket", "$10.00", "Cash", "John Referrer", "", "10OFF", "Bar", "Refund"],
 ["2019/01/01 10:00PM", "Gaston Festus", "POS", "$10.00", "Cash", "John Referrer", "Jane Server", "", "Bar", "Refund"],
];

const Tables = props => (
  <React.Fragment>
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <PageTitle title="React Transactions" />
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          variant="contained"
          size="small"
          style={{float: 'right', marginTop: '35px'}}
        >
          <DateRangeIcon />&nbsp;
          Jan 1, 2019 - March 1, 2019
          <ArrowDropDownIcon />
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={32}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Total Sales"
            upperTitle
            disableWidgetMenu
          >
            <Typography size="xl" weight="medium">
              $12,678.00
            </Typography>
          </Widget>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Cash Sales"
            upperTitle
            disableWidgetMenu
          >
            <Typography size="xl" weight="medium">
              $2,678.00
            </Typography>
          </Widget>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Credit Sales"
            upperTitle
            disableWidgetMenu
          >
            <Typography size="xl" weight="medium">
              $10,000.00
            </Typography>
          </Widget>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Transactions"
            upperTitle
            disableWidgetMenu
          >
            <Typography size="xl" weight="medium">
              128
            </Typography>
          </Widget>
      </Grid>
    </Grid>
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <MUIDataTable
          title="Transactions"
          data={datatableData}
          columns={[
            {
              name: "Date",
              options: {
                filter: false,
                sort: true
              }
            },
            {
              name: "Guest",
              options: {
                filter: true,
                filterType: "textField",
                sort: true
              }
            },
            {
              name: "Type",
              options: {
                filter: true,
                filterType: "multiselect",
                sort: true
              }
            },
            {
              name: "Amount",
              options: {
                filter: false,
                sort: true
              }
            },
            {
              name: "Payment Method",
              options: {
                filter: true,
                filterType: "multiselect",
                display: false,
                sort: true
              }
            },
            {
              name: "Referrer",
              options: {
                filter: true,
                filterType: "textField",
                display: false,
                sort: true
              }
            },
            {
              name: "Server",
              options: {
                filter: true,
                display: false,
                sort: true
              }
            },
            {
              name: "Promo Code",
              options: {
                filter: true,
                display: false,
                sort: true
              }
            },
            {
              name: "Revenue Center",
              options: {
                filter: true,
                display: false,
                sort: true
              }
            },
            {
              name: "Refund",
              options: {
                filter: true,
                display: false,
                sort: true
              }
            },
          ]}
          options={{
            selectableRows: false,
            expandableRows: true,
            expandableRowsOnClick: true,
          }}
        />
      </Grid>
    </Grid>
  </React.Fragment>
);

export default Tables;