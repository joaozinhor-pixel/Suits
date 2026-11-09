// Para cada ator: [nome, personagem, descrição, arquivo da foto (na pasta img), crédito da foto]
// Coloque a foto em img/ com o nome indicado e preencha o crédito (autor e licença), se a licença exigir.
const ELENCO=[
  ['Gabriel Macht','Harvey Specter','No elenco principal nas 9 temporadas. Também foi produtor e dirigiu episódios.','gabriel-macht.jpg',''],
  ['Patrick J. Adams','Mike Ross','No elenco principal até a 7ª temporada e voltou na reta final. Também foi produtor e dirigiu episódios.','patrick-j-adams.jpg',''],
  ['Rick Hoffman','Louis Litt','Rival de Harvey e supervisor dos associados no começo da série.','rick-hoffman.jpg',''],
  ['Meghan Markle','Rachel Zane','Paralegal que sonha em ser advogada. Deixou a série depois da 7ª temporada.','meghan-markle.jpg',''],
  ['Sarah Rafferty','Donna Paulsen','Assistente de longa data de Harvey.','sarah-rafferty.jpg',''],
  ['Gina Torres','Jessica Pearson','Sócia-gerente do escritório. Estrelou o spin-off Pearson.','gina-torres.jpg',''],
  ['Amanda Schull','Katrina Bennett','Advogada do escritório, integrou o elenco principal.','amanda-schull.jpg',''],
  ['Dulé Hill','Alex Williams','Foi promovido ao elenco principal na 8ª temporada.','dule-hill.jpg',''],
  ['Katherine Heigl','Samantha Wheeler','Entrou no elenco na 8ª temporada.','katherine-heigl.jpg',''],
  ['Wendell Pierce','Robert Zane','Pai de Rachel, em participações recorrentes.','wendell-pierce.jpg','']
];
const alvo=document.getElementById('elenco');
ELENCO.forEach(([ator,pers,info,arq,cred])=>{
  const iniciais=ator.split(' ').map(p=>p[0]).slice(0,2).join('');
  const d=document.createElement('div');
  d.className='card';
  d.innerHTML='<div class="avatar">'+iniciais+'</div><h3>'+ator+'</h3><small>como '+pers+'</small><p>'+info+'</p>';
  // Se a foto existir na pasta img, ela aparece no lugar das iniciais.
  const img=new Image();
  img.className='foto';img.alt='Foto de '+ator;
  img.onload=()=>{
    d.querySelector('.avatar').replaceWith(img);
    if(cred){const c=document.createElement('small');c.className='credito';c.textContent='Foto: '+cred;d.appendChild(c);}
  };
  img.src='img/'+arq;
  alvo.appendChild(d);
});
