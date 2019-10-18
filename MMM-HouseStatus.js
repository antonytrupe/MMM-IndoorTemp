Module.register("MMM-HouseStatus", {
    // Default module config.
    defaults: {
    },

    getStyles: function() {
        return [
            this.file('public/map.css'),
        ]
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");


        wrapper.innerHTML = '<div class="map_container" >' +
            '<div class="living room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="master_bed room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh">53%RH</span>' +
            '</div>' +
            '</div>' +
            '<div class="ellie_bed room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="alex_bed room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh">53%RH</span>' +
            '</div>' +
            '</div>' +
            '<div class="hallway_bath room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="master_bath room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="entry room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh">43%RH</span>' +
            '</div>' +
            '</div>' +
            '<div class="gabe_bed room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="spare room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="den room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<div class="shop room">' +
            '<div>' +
            '<span class="temp">76°F</span>' +
            '<span class="rh"></span>' +
            '</div>' +
            '</div>' +
            '<img src="public/map.png" class="map" />' +
            '</div>';

        return wrapper;
    }
});
