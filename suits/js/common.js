const PAGINAS=[['index.html','Início','🏠'],['elenco.html','Elenco','🎭'],['temporadas.html','Temporadas','📺'],['episodios.html','Episódios','🎬'],['audiencia.html','Audiência','📊'],['imdb.html','IMDb','⭐'],['salarios.html','Salários','💰']];
const atual=location.pathname.split('/').pop()||'index.html';
document.getElementById('menu').innerHTML=PAGINAS.map(([u,t])=>'<a href="'+u+'"'+(u===atual?' class="ativo"':'')+'>'+t+'</a>').join('');
