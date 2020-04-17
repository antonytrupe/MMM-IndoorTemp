var NodeHelper = require("node_helper");

var sqlite3 = require('sqlite3').verbose();

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting module: " + this.name);
    //this.sendSocketNotification("FOO","33.3");
  },
  getData:function(){
    var self=this;
    //console.log('getData');
    let db = new sqlite3.Database('/home/pi/node_modules/dobby-pi-base/test.db',sqlite3.OPEN_READONLY);
    let sql = 'select * from currentdata';
    //db.serialize(function(){
      db.all(sql,[],(err, rows) => {
        if (err) {
          throw err;
        }
        //console.log(rows.slice(0));
        //console.log(JSON.stringify(rows));
        self.sendSocketNotification("HOUSE_STATS", rows);
        db.close();
      });
    //});
  },
  socketNotificationReceived: function(notification, payload) {
    var self = this;
    //console.log(notification);
    switch(notification) {
      case "HOUSE_STATS":{
        self.getData();
        break;
      }
    }
  }
});
