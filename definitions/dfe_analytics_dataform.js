const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project
dfeAnalyticsDataform({
  eventSourceName: "analytics-test-app",
  bqProjectName: "rugged-abacus-218110",
  bqDatasetName: "dfe_analytics_test_app",
  bqEventsTableName: "events",
  dataSchema: [{
   entityTableName: "users",
   description: "",
   keys: [{
      keyName: "country",
      dataType: "string",
      description: "the user's country"
   }, {
      keyName: "dob",
      dataType: "date",
      description: ""
   }, {
      keyName: "email_address",
      dataType: "string",
      description: ""
   }, {
      keyName: "favourite_colour",
      dataType: "string",
      description: ""
   }, {
      keyName: "animal",
      dataType: "string",
      description: ""
   }, {
      keyName: "codename",
      dataType: "string",
      description: ""
   }]
}]
});