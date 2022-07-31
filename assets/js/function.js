//setalert
let setAlert= (msg, type = 'danger')=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button> </p>`
 }

 // set data to LS
 const createLSData = (key,value)=>{
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    data.push(value)
    localStorage.setItem(key,JSON.stringify(data))
}

// get LS Data
const readLSData = (key)=>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }
    else{
        return false;
    }
}


//remain time
// const remain_time  = (date,time)=>{
//     // count = setInterval(() => {
//       let start_time = Date.now();
//       let end_time = new Date(date+ ' ' +time);
//       let order_time = Math.floor(Math.abs(end_time - start_time));
      
//       // get total time
//       let total_sec = Math.floor(order_time / 1000);
//       let total_min = Math.floor(total_sec / 60);
//       let total_hour = Math.floor(total_min / 60);
//       let total_day = Math.floor(total_hour / 24);

//       // final date
//       let hour = total_hour - (total_day * 24);
//       let min = total_min - (total_day * 24 * 60) - ( hour * 60);
//       let sec = total_sec - (total_day * 24 * 60 * 60) - ( hour * 60 * 60) - ( min * 60);
      
//       if(dead_line > current_time){
//           return `${total_Days} days ${hours} hours ${min} mins ${sec} Sec`;
//         }else{
//           return `<strong style="color:red;">Time over</strong>`;
//         }
// }

//time function
const timeFunction =(date,time,show_time,count = null,a1 = null)=>{
            // get time 
            let start_time = Date.now();
            let end_time = new Date(date + ' ' + time);
            let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));
            
            let total_sec = Math.floor(order_time / 1000);
            let total_min = Math.floor(total_sec / 60);
            let total_hour = Math.floor(total_min / 60);
            let total_day = Math.floor(total_hour / 24);
        
            //final time 
            let hour = total_hour - (total_day * 24);
            let min = total_min - ( total_day * 24 * 60) - (hour * 60);
            let sec = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);
        
            show_time.innerHTML=`${total_day} Days : ${hour} Hr : ${min} Min : ${sec} Sec`
            
            if(total_sec <= 0){
                clearInterval(count);
               
                show_time.innerHTML=`Time Out`;
                show_time.style.color="red";
                a1.play();
            }
}

// range bar
const range = (start_time,end_time)=>{
    let time_dif = Math.floor(end_time - start_time);
    let time_change = Math.floor(end_time - Date.now());
    return Math.floor((100 * time_change)/time_dif);
}