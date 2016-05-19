'use strict';

var Textfield = require('./Textfield');

/**
 * @constructor
 */
var Number = Textfield.extend('Number', {

    template: function() {
        /*
         <input type="text">
         */
    },

    initialize: function(grid) {
        this.localizer = grid.localization.get('number');
    }

});

module.exports = Number;
