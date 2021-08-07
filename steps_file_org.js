// in this file you can append custom step methods to 'I' object
require('./connector');
    var connector = new connector();
    var weekEnd;
    var startDay;
    var endDay;

module.exports = function() {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    fromDay: function(startDay){
        var selector = "#datePick";
        var dateFrom;

        	switch(startDay) {
        	case("Sunday"):
                dateFrom = connector.sunday();
                weekEnd = 0;
                startDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case("Monday"):
                connector.monday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
        	case("Tuesday"):
                connector.tuesday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
        	case("Wednesday"):
                connector.wednesday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
        	case("Thursday"):
                connector.thursday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
        	case("Friday"):
                connector.friday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
        	case("Saturday"):
                connector.saturday(selector);
                weekEnd = 0;
                connector.dateFromSet();
                break;
            default:
        	}
    }

    testPrice:function(price){
        let priceText = await I.grabTextFrom(price);

        		var priceData;
        		var calcPrice;

                priceText = priceText.replace("円", "");
                priceText = priceText.replace("（税込み）", "");
                priceText = priceText.replace("合計", "");
                priceText = priceText.replace(",", "").trim();

                priceData = parseInt(priceText);

        		return priceData;
    }

    testTerm:function(term){
        let termText = await I.grabTextFrom('term');

        return termText;

    }
  });
}
