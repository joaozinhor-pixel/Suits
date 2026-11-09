const alvo=document.getElementById('atalhos');
PAGINAS.slice(1).forEach(([u,t,e])=>{
  const a=document.createElement('a');
  a.className='card';a.href=u;
  a.innerHTML='<h3>'+e+' '+t+'</h3>';
  alvo.appendChild(a);
});
