// in this file you can append custom step methods to 'I' object

module.exports = function() {
//    var this = require('./this');
    var connector = require('./connector');
    var weekEnd;
    var startDay;
    var endDay;

    let today;
    let dateFrom;
    let dateTo;
      var dayNames = [
          'SUNDAY',
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY'
      ];

  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
        fromDay: function(startDay){
        var selector = "#datePick";
        var dateFrom;
//console.log(startDay);
//pause();
        	switch (startDay) {
        	case 'Sunday':
//console.log(startDay);
                dateFrom = connector.sunday();
//console.log(dateFrom);
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
//console.log(startDay);
                break;
        	case "Monday":
                dateFrom = connector.monday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Tuesday':
                dateFrom = connector.tuesday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Wednesday':
                dateFrom = connector.wednesday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Thursday':
                dateFrom = connector.thursday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Friday':
                dateFrom = connector.friday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Saturday':
                dateFrom = connector.saturday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
            default:
        	}
                return dateFrom;
        },

        termSet: function(term){
            dateTo = connector.termSet(term);
        },

        getReserveUser: function(){
        },

        testPrice: function(){
//            let priceText = I.grabTextFrom('#price');
//           let price = priceText.replace('円', '') - 0;
//console.log(priceText);
//console.log(price);
//            return price;
        }

  });
}
