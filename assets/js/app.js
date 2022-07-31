//get data
const alarm_form = document.getElementById("alarm_form");
const show_time = document.querySelector(".show_time");
const a1 = document.getElementById("a1");
const rang = document.querySelector('.range');

let count;

alarm_form.onsubmit = (e) => {
    e.preventDefault();
  

    //get form
    let form_data = new FormData(e.target);
    let { date, time } = Object.fromEntries(form_data.entries());

    //get time
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);
    //clear timeout
    clearInterval(count);

    count = setInterval(() => {
        timeFunction(date, time, show_time, count, a1);
      let rang_bar =  range(start_time,end_time);
      if(rang_bar>=0 && rang_bar<25){
        rang.style.backgroundColor='red';
      }
      else if(rang_bar>=25 && rang_bar<50){
        rang.style.backgroundColor='yellow';
      }
      else if(rang_bar>=50 && rang_bar<75){
        rang.style.backgroundColor='blue';
      }
      else if(rang_bar>=75 && rang_bar<100){
        rang.style.backgroundColor='green';
      }
      rang_bar && (rang.style.display='block');
      rang_bar && (rang.style.width=`${rang_bar}%`);
      if(rang_bar<=0){
        rang.style.width=`${100}%`
      }

    }, 1000);
};