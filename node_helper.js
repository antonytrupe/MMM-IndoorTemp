var NodeHelper = require("node_helper");

var sqlite3 = require('sqlite3').verbose();

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting module: " + this.name);
    //this.sendSocketNotification("FOO","33.3");
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "GET_HOUSE_STATS":
        this.sendSocketNotification("HOUSE_STATS", [{'name':'living room','attributes':[{'name':'temp','value':20.2},{'name':'rh','value':.45}]}]);
        break;
    }
  },
});
