// this is just a function that gets us the last time a player was online
import moment from "moment";


function GetLastOnline ({lastOnline}) {

    let currentDay = moment().format() 
  
    let currentDate = currentDay.substring(0,10);
    let lastOnlineDate = lastOnline.substring(0,10)//switchg this to lastOnline variable
  
    //this is checking if the last time they where on was today
    if (currentDate == lastOnlineDate){
  
      
      
      
      //then look for hours
      let currentHour = parseInt(currentDay.substring(11,13))
      let lastOnlineHour = parseInt(lastOnline.substring(11,13))
      let lastOnlineHourSum = currentHour - lastOnlineHour;
  
      let currentMin = parseInt(currentDay.substring(14,16))
      let lastOnlineMin = parseInt(lastOnline.substring(14,16))
      let lastOnlineMinSum = currentMin - lastOnlineMin
      //have to check if the first variable is 0 
        if(lastOnlineHourSum >= 1){
          return(<div>last online {lastOnlineHourSum} hours ago</div>)
        }
        else{
          if(lastOnlineMinSum <= 1){
            return(<div>last online: 1 minute ago</div>)
          }
          else{
            return(<div>last online {lastOnlineMinSum} minutes ago</div>)
          }
        }
      
    
    }
    else { 
      //get the year
      let currentYear = currentDay.substring(0,4);
      let lastOnlineYear = lastOnline.substring(0,4);
  
      //get the month
      let currentMonth = currentDay.substring(5,7);
      let lastOnlineMonth = lastOnline.substring(5,7);
  
      //make sure it is in the same year
      
      if (currentYear == lastOnlineYear){
            //just going to do it by month
        if (currentMonth == lastOnlineMonth){
            return(<div>last online this month</div>)
        }
        else if (currentMonth > lastOnlineMonth){
          let lastOnlineMonthSum = currentMonth - lastOnlineMonth;
          return(<div>last online {(lastOnlineMonthSum == 1) ? ("1 month ago"): (`${lastOnlineMonthSum} months ago`)}</div>)
          
        }
      }
      else {
        let lastOnlineYearSum = currentYear - lastOnlineYear;
        return(<div>last online {(lastOnlineYearSum == 1) ? ("1 year ago"): (`${lastOnlineYearSum} years ago`)}</div>)
      }
    }
}

export default GetLastOnline;