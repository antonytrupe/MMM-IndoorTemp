Module.register("MMM-HouseStatus", {
    // Default module config.
    defaults: {
    },

    getStyles: function() {
        return [
            //this.file('public/map.css'),
        ]
    },
    getScripts:function(){return ['https://code.jquery.com/jquery.min.js'];},

    notificationReceived: function(notification, payload, sender) {
        if(notification!='CLOCK_SECOND'){
          Log.info('notificationReceived:'+notification);
        }
        switch(notification) {
          case "DOM_OBJECTS_CREATED":
            //TODO start polling?
            this.sendSocketNotification('GET_HOUSE_STATS');
        }
      },
      
      socketNotificationReceived: function(notification,payload){
        Log.info('socketNotificationReceived:'+notification+':'+payload);
          if(notification==="HOUSE_STATS"){
            //TODO update DOM
            // [{'name':'living room','attributes':{'temp':20.2,'rh':.45}}]
            payload.forEach((location) => {
              var cssName='.'+location.name.split(' ').join('.');
              console.log(cssName);
              //TODO loop over the attributes
              location.attributes.forEach((attribute)=>{
                console.log(attribute);
                $(cssName+' .' +attribute.name).html(attribute.value);
              });
            });
            //$('.living.room .temp').html(payload);
          }
      },

    // Override dom generator.
    getDom: function() {
      Log.info('getDom');
        var wrapper = document.createElement("div");

        wrapper.innerHTML = '<div class="normal medium" >' +
            '<div class="living room">' +
            '<span class=room_name>Living Room</span>'+
            '<span class="temp"></span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>';

        return wrapper;
    }
});
