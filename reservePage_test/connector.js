 require('date-utils');

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

 

module.exports.dateFromSet = function() {
    		dateFrom = `
                                                 ${today.getFullYear()}年
                                                 ${today.getMonth()+1}月
                                                 ${today.getDate()}日
                                                 `.replace(/\n|\r/g, '');
};

module.exports.sunday = function() {
            	    today = new Date();
console.log(today);
            	    let day = today.getDay();
            	    let dayName = dayNames[day];

            		switch(dayName) {
            		case 'SUNDAY':
        //    			calendar.add(Calendar.DATE, 1);
            			break;
            		case 'MONDAY':
            		    today.add({"months": 0, "days": 6});
            			break;
            		case 'TUESDAY':
            		    today.add({"months": 0, "days": 5});
            			break;
            		case 'WEDNESDAY':
            		    today.add({"months": 0, "days": 4});
            			break;
            		case 'THURSDAY':
            		    today.add({"months": 0, "days": 3});
            			break;
            		case 'FRIDAY':
            		    today.add({"months": 0, "days": 2});
            			break;
            		case 'SATURDAY':
            		    today.add({"months": 0, "days": 1});
            			break;
            		default:
            		}

                    var testReserveDate = `
                                  ${today.getFullYear()}/
                                  ${today.getMonth()+1}/
                                  ${today.getDate()}
                                  `.replace(/\n|\r/g, '');
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

