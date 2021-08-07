const  { format, addDays, addMonths} = require('date-fns');

const jtcDate = addDays(new Date(Date.now() + ((new Date().getTimezoneOffset() + (0 * 60)) * 60 * 1000)), 1);
const jstString = format(jtcDate, 'YYYY/MM/DD');
const dayName = format(jtcDate, 'dddd');

//console.log(jtcDate);
//console.log(jstString);
//console.log(dayName);

let dateFrom;
let dateTo;

module.exports.dateFromSet = function() {
    		dateFrom = `${format(jtcDate, "YYYY")}年${format(jtcDate, "MM")}月${format(jtcDate, "DD")}日`;
//    		dateFrom = `${format(zonedTargetDate, "YYYY")}年${format(zonedTargetDate, "MM")}月${format(zonedTargetDate, "DD")}日`.replace(/\n|\r/g, '');
};

module.exports.sunday = function() {

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		default:
            		}
                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
};

        exports.monday = function() {

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 6);
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'Monday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
        };

        exports.tuesday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Tuesday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
        };

         exports.wednesday = function(){

             		switch(dayName) {
             		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 3);
             			break;
             		case 'Monday':
            		    dateFrom = addDays(jtcDate, 2);
             			break;
             		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 1);
             			break;
             		case 'Wednesday':
             		    dateFrom = jtcDate;
             			break;
             		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 6);
             			break;
             		case 'Friday':
            		    dateFrom = addDays(jtcDate, 5);
             			break;
             		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 4);
             			break;
             		default:
             		}

                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
         };

        exports.thursday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Thursday':
            		    dateFrom = jtcDate;
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Saturday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
        };

        exports.friday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Monday':
               		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Tuesday':
                  		dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Wednesday':
          		        dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Thursday':
          		        dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Friday':
        //    		    today.add({"months": 0, "days": 2});
                        dateFrom = jtcDate;
            			break;
            		case 'Saturday':
          		        dateFrom = addDays(jtcDate, 6);
            			break;
            		default:
            		}

                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
        };

        exports.saturday = function(){

            		switch(dayName) {
            		case 'Sunday':
            		    dateFrom = addDays(jtcDate, 6);
            			break;
            		case 'Monday':
            		    dateFrom = addDays(jtcDate, 5);
            			break;
            		case 'Tuesday':
            		    dateFrom = addDays(jtcDate, 4);
            			break;
            		case 'Wednesday':
            		    dateFrom = addDays(jtcDate, 3);
            			break;
            		case 'Thursday':
            		    dateFrom = addDays(jtcDate, 2);
            			break;
            		case 'Friday':
            		    dateFrom = addDays(jtcDate, 1);
            			break;
            		case 'Saturday':
            		    dateFrom = jtcDate;
            			break;
            		default:
            		}

//console.log(dateFrom);
                    var testReserveDate = format(dateFrom, 'YYYY/MM/DD');
//console.log(testReserveDate);
                    return testReserveDate;
        };

        exports.termSet = function(){
    	    endDate = addDays(dateFrom, term);
    	        		dateTo = `
                                                             ${today.getFullYear()}年
                                                             ${today.getMonth()+1}月
                                                             ${today.getDate()}日
                                                             `.replace(/\n|\r/g, '');
        };

        exports.fourMonthAgo = function(){
    	    today.add({"months": 4, "days": 0});
            var testReserveDate = `
                          ${today.getFullYear()}/
                          ${today.getMonth()+1}/
                          ${today.getDate()}
                          `.replace(/\n|\r/g, '');
            return testReserveDate;
        };

