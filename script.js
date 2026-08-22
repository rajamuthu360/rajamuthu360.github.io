const progress=document.querySelector('.progress');
const updateProgress=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%'};
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
