Module.register("MMM-HouseStatus", {
    // Default module config.
    defaults: {
      updateInterval: 10*1000,//seconds * milliseconds
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
            //TODO start polling?
            //this.sendSocketNotification('HOUSE_STATS');
        }
      },
      
      socketNotificationReceived: function(notification,payload){
        //Log.info('socketNotificationReceived:'+notification+':'+payload);
        if(notification==="HOUSE_STATS"){
          //TODO update DOM
          // [{'name':'living room','attributes':{'tempF':20.2,'rh':.45}}]
          payload.forEach((row) => {
            var cssName='.'+row.location.split(' ').join('.');
            //console.log(cssName);
            //TODO loop over the attributes
            if(row.attribute=='tempC')
            {
              //convert to F, round to 1 decimal place
              row.value=Math.round((row.value*9/5 +32)*10)/10;
            }
            $(cssName+' .' +row.attribute).html(row.value);
          });
          //$('.living.room .temp').html(payload);
        }
      },

    // Override dom generator.
    getDom: function() {
      //Log.info('getDom');
        var wrapper = document.createElement("div");

        wrapper.innerHTML = '<div class="normal medium" >' +
            '<div class="living room">' +
            '<span class=room_name>Living Room:</span>'+
            '<span class="tempC"></span>°' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>';

        return wrapper;
    }
});
