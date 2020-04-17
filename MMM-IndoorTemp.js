Module.register("MMM-IndoorTemp", {
    // Default module config.
    defaults: {
      updateInterval: 10*1000,//seconds * milliseconds,
      units: 'imperial',
      locations:[{'name':'living room','attributes':['tempF','rh']}]
    },

    getStyles: function() {
        return [
            //this.file('public/map.css'),
        ]
    },
    getScripts:function(){return ['https://code.jquery.com/jquery.min.js'];},

    // Define start sequence.
    start: function() {
      var self=this;
      Log.info("Starting module: " + this.name);
      self.sendSocketNotification('HOUSE_STATS');
      setInterval(function() {
        self.sendSocketNotification('HOUSE_STATS');
        }, this.config.updateInterval);
    },

    notificationReceived: function(notification, payload, sender) {
        if(notification!='CLOCK_SECOND'){
          //Log.info('notificationReceived:'+notification);
        }
        switch(notification) {
          case "DOM_OBJECTS_CREATED":
            //this.sendSocketNotification('HOUSE_STATS');
        }
      },
      
      socketNotificationReceived: function(notification,payload){
        //Log.info('socketNotificationReceived:'+notification+':'+payload);
        if(notification==="HOUSE_STATS"){
          // update DOM
          payload.forEach((row) => {
            var cssName='.'+row.location.split(' ').join('.');
            //console.log(cssName);
            //loop over the attributes
            if(row.attribute=='tempC')
            {
              //convert to F, round to 1 decimal place
              row.value=Math.round((row.value*9/5 +32)*10)/10;
            }
            $(cssName+' .' +row.attribute).html(row.value);
          });
        }
      },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        //TODO build dom based on configured locations
        wrapper.innerHTML = '<div class="normal small" >' +
            '<div class="living room">' +
            '<span class=room_name>Living Room : </span>'+
            '<span class="tempC"></span>° ' +
            '<span class="rh"></span>%' +
            '</div>' +
            '</div>';

        return wrapper;
    }
});
