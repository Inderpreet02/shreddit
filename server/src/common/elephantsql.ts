import { Client } from "pg";
//or native libpq bindings
//var pg = require('pg').native

const conString =
  "postgres://btxgjlfx:SJgS2uSlNAnKZ96xmx4WGp3gDCcYzT80@stampy.db.elephantsql.com/btxgjlfx"; //Can be found in the Details page
const client = new Client(conString);
client.connect(function (err: any) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query(
    'SELECT NOW() AS "theTime"',
    function (err: any, result: { rows: { theTime: any }[] }) {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(result.rows[0].theTime);
      // >> output: 2018-08-23T14:02:57.117Z
      client.end();
    }
  );
});
