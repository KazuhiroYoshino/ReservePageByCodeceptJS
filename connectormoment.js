const moment = require('./moment');

 let today = moment().tz('Asia/Tokyo');
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

 

module.exports.dateFromSet = function() {
    dateFrom = moment(today, 'YYYY/MM/DD');
};

module.exports.sunday = function() {
console.log(today);
            	    let dayName = moment(today, 'dddd');
//            	    let dayName = dayNames[day];
console.log(dayName);
            		switch(dayName) {
            		case 'Sunday':
        //    			calendar.add(Calendar.DATE, 1);
            			break;
            		case 'Monday':
            		    today.add(6, 'days');
            			break;
            		case 'Tuesday':
            		    today.add(5, 'days');
            			break;
            		case 'Wedesday':
            		    today.add(4, 'days');
            			break;
            		case 'Thursday':
            		    today.add(3, 'days');
            			break;
            		case 'Friday':
            		    today.add(2, 'days');
            			break;
            		case 'Saturday':
            		    today.add(1, 'days');
            			break;
            		default:
            		}

                    var testReserveDate = moment(today,'YYYY/MM/DD');
					
//								  console.log(today);
//								  console.log(testReserveDate);
                    return testReserveDate;
};

        exports.monday = function() {
            	    today = new Date();
console.log(today);
//pause();
            	    let day = today.getDay();
            	    let dayName = dayNames[day];
console.log(today);
//pause();
            		switch(dayName) {
            		case 'SUNDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'MONDAY':
        //    		    today.add({"months": 0, "days": 6});
            			break;
            		case 'TUESDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		case 'THURSDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'FRIDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		case 'SATURDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
                    return testReserveDate;
        };

        exports.tuesday = function(){
            	    today = Date.today();
            	    let day = today.getDay();
            	    let dayName = dayNames[day];

            		switch(dayName) {
            		case 'SUNDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		case 'MONDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'TUESDAY':
        //    		    today.add({"months": 0, "days": 5});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		case 'THURSDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		case 'FRIDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'SATURDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
                    return testReserveDate;
        };

         exports.wednesday = function(){
             	    today = Date.today();
             	    let day = today.getDay();
             	    let dayName = dayNames[day];

             		switch(dayName) {
             		case 'SUNDAY':
             		    today.add({"months": 0, "days": 3});
             			break;
             		case 'MONDAY':
             		    today.add({"months": 0, "days": 2});
             			break;
             		case 'TUESDAY':
             		    today.add({"months": 0, "days": 1});
             			break;
             		case 'WEDNESDAY':
         //    		    today.add({"months": 0, "days": 4});
             			break;
             		case 'THURSDAY':
             		    today.add({"months": 0, "days": 6});
             			break;
             		case 'FRIDAY':
             		    today.add({"months": 0, "days": 5});
             			break;
             		case 'SATURDAY':
             		    today.add({"months": 0, "days": 4});
             			break;
             		default:
             		}

                     var testReserveDate = `
                                   ${today.getFullYear()}/
                                   ${today.getMonth()+1}/
                                   ${today.getDate()}
                                   `.replace(/\n|\r/g, '');
                     return testReserveDate;
         };

        exports.thursday = function(){
            	    today = Date.today();
            	    let day = today.getDay();
            	    let dayName = dayNames[day];

            		switch(dayName) {
            		case 'SUNDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'MONDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		case 'TUESDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'THURSDAY':
        //    		    today.add({"months": 0, "days": 3});
            			break;
            		case 'FRIDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		case 'SATURDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
                    return testReserveDate;
        };

        exports.friday = function(){
            	    today = Date.today();
console.log(today);
//pause();
										let day = today.getDay();
            	    let dayName = dayNames[day];

            		switch(dayName) {
            		case 'SUNDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		case 'MONDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'TUESDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		case 'THURSDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'FRIDAY':
        //    		    today.add({"months": 0, "days": 2});
            			break;
            		case 'SATURDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
                    return testReserveDate;
        };

        exports.saturday = function(){
            	    today = Date.today();
            	    let day = today.getDay();
            	    let dayName = dayNames[day];

            		switch(dayName) {
            		case 'SUNDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		case 'MONDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		case 'TUESDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		case 'THURSDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		case 'FRIDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		case 'SATURDAY':
        //    		    today.add({"months": 0, "days": 1});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
                    return testReserveDate;
        };

        exports.termSet = function(){
    	    today.add({"months": 0, "days": term});
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

