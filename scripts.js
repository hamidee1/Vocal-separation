document.getElementById('upload-btn')?.addEventListener('click', function(){
const file = document.getElementById('audio-upload').files[0];
if(!file){alert('اختر ملف صوتي'); return;}
const progress = document.getElementById('progress-bar');
let width=0; const interval = setInterval(()=>{
if(width>=100){clearInterval(interval); document.getElementById('audio-player').src=URL.createObjectURL(file);} 
else {width+=5; progress.style.width=width+'%';}
},100);
});
document.querySelectorAll('nav a').forEach(a=>{a.addEventListener('click', e=>{
e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
})});