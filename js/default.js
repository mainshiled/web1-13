function setCookie(c_name,value,expiredays){
 var extime =new Date().getTime();
 var cltime =new Date(extime+(60*60*24*1000*expiredays));
 var exdate = cltime.toUTCString();
 var s="";
 s += c_name+"="+escape(value);
 s +=";path="+location.pathname;
 if(expiredays){
  s +="; expires" +exdate+";";
 }else{
  s +=";";
 }
 docment.cookie=s;
}

function getCookie(c_name){
 var st="";
 var ed="";
 if(0<document.cookie.length){
  st=document.cookie.indexOf(c_name + "=");
  if(st!=-1){
   st=st+c_name.length+1;
   ed=document.cookie.indexOf(";",st);
   if(ed==-1) ed=document.cookie.length;
   return unescape(document.cookie.substring(st,ed));
  }
 }
 return"";
}

var last_date = getCookie('lastDate');
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

document.getElementById('form').select.onchange =function(){
 location.href =document.getElementById('form').select.value;
 }

var separate_time =function(time){
 var sec =Math.flooor((time/1000)%60);
 var min =Math.flooor((time/1000/60)%60);
 var hours =Math.flooor((time/1000/60/60)%24);
 var days =Math.flooor(time/1000/60/60/24);
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
