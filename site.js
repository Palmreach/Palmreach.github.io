
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.navlinks');
if(menuBtn && menu){
  menuBtn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
  });
}
document.querySelectorAll('.js-mail-form').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fd=new FormData(form);
    const lines=[];
    for(const [k,v] of fd.entries()){
      if(v && k!=='consent') lines.push(`${k}: ${v}`);
    }
    const subject=encodeURIComponent(`Palmreach website - ${form.dataset.kind || 'enquiry'}`);
    const body=encodeURIComponent(lines.join('\n'));
    location.href=`mailto:palmreach@outlook.com.au?subject=${subject}&body=${body}`;
  });
});
