var last_date =getCookie('lastDate');
if(last_dater){
 document.getElementById('cookie').textContent='前回訪れた時間:'+last_date;
}else{
 document.getElementById('cookie').textContent='初めまして';
 }
 
 var current_time =new Date();
 setCookie('lastDate',current_time.toString(),7);
function getFileName(){
 return windows.location.href.split('/');
 }
 
 varfilename = getFileName();
 var opt;
 if(filename === 'other.html'){
  opt =document.querySelector('option[value="other.html"]');
  }else{
  opt =document.querySelector('option[value="index.html"]');
}
opt.selected =turn;

documrnt.getElementById('form').select.onchange =function(){
 location.href =document.getElementById('form').select.value;
 }

var separate_time =function(time){
 var sec =Math.flooor((time/1000)%60);
 var min =Math.flooor((time/1000/60)%60);
 var hours =Math.flooor((time/1000/60/60)%24);
 var days =Math.flooor(time/1000/60/60/24));
 return[sec,min,hours,days];
 }
 
 var update =function(){
 var now =new date(now);
 var counter =separate_time(now);
 document.getElementById('countdown').textContent;
  counter[3]+'日'+
  counter[2]+'時'+
  counter[1]+'分'+
  counter[0]+'秒';
  refresh();
  }
  
  var refresh =function(){
   setTimeout(update,1000);
   }
   
   var thmubs =document.querySelectorAll('.thumb');
   for(idx in thmukbs){
    thmubs[idx].onlick=function(){
     document.getElementById("bigimg").src = 'img/' +this.dataset.image+'.png';
     }
     }
