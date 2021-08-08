const escolha = prompt('Por favor, digite o número correspondente e escolha o genêro do filme: [1] Super-heróis [2] Desenhos [3] Comédia')
  
let imgFilmesHerois = ['https://m.media-amazon.com/images/M/MV5BMzFiODE0ZDUtN2IxNC00OTI5LTg4OWItZTE2MjU4ZTk2NjM5XkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_UX182_CR0,0,182,268_AL_.jpg','https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg','https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg' , 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg']

let linkFilmesHerois = ['https://youtu.be/Lk7LPTq0_XY', 'https://youtu.be/8XrFAXykgoc', 'https://youtu.be/JhY6Yy4wtb4', 'https://youtu.be/TgjOLExlVtQ', 'https://youtu.be/KeNEGtsCWEk', 'https://youtu.be/wL4a4MafSjQ']

let nomeFilmesHerois  = ['Viúva Negra', 'Mulher Maravilha 1984', 'Capitã Marvel', 'Liga da Justiça', 'Os Vingadores', 'Pantera Negra']

let imgFilmesDesenho = ['https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMGI4YmJkZTgtOTI3Ny00ZjczLTk2MGEtODkyZDg1YjM2YzM5XkEyXkFqcGdeQXVyOTQxNzM2MjY@._V1_UY268_CR3,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BZDcwYjEyNWItMGI1Mi00MjI1LWIyMDEtMTQ4YjhkNjM4NDU3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg']

let linkFilmesDesenho = ['https://youtu.be/qRbjMur9Xjo', 'https://youtu.be/MZsYDpafGTY', 'https://youtu.be/4KPTXpQehio', 'https://youtu.be/xADGKRB7G0s', 'https://youtu.be/eTjHiQKJUDY', 'https://youtu.be/ZvtspevZxpg']                

let nomeFilmesDesenho = ['O Rei Leão', 'A Bela e a Fera', 'Toy Story', 'A Pequena Sereia', 'Aladdin', 'Hércules']


let imgFilmesComedia = ['https://m.media-amazon.com/images/M/MV5BMjE1NzI5NTkwMF5BMl5BanBnXkFtZTYwOTA4NzY2._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BNzc2ODI5NjAyMl5BMl5BanBnXkFtZTgwMzIyOTE4MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', 'https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg']

let nomeFilmesComedia = ['De Repente 30','Juntos e Misturados', 'As Branquelas', 'Esqueceram de mim', 'Amizade Colorida']

let linkFilmesComedia = ['https://youtu.be/NV7PBRBcxu0', 'https://youtu.be/mXRVi-yfSA0','https://youtu.be/aeVkbNka9HM','https://youtu.be/9-IaGc4H2Ng', 'https://youtu.be/y1dZgWS5jdc']

let catalogo = "filmes"

var frame = document.getElementById("linkFilmesComedia");

for (let i = 0; i < imgFilmesHerois.length; i++){
  if (escolha == 1){
   document.write("<a href="+ linkFilmesHerois[i] + " target=_black><div class="+ catalogo +"><img src=" + imgFilmesHerois[i] +"></br><span>"+ nomeFilmesHerois[i] + "</span></div></a>")
 }
}

for (let i = 0; i < imgFilmesDesenho.length; i++){
 if (escolha == 2){
    document.write("<a href="+ linkFilmesDesenho[i] + " target=_black><div class="+ catalogo +"><img src=" + imgFilmesDesenho[i] +"></br><span>"+ nomeFilmesDesenho[i] + "</span></div></a>")
 }
}

for (let i = 0; i < imgFilmesComedia.length; i++){
  if (escolha == 3){
  document.write("<a href="+ linkFilmesComedia[i] + " target=_black><div class="+ catalogo +"><img src=" + imgFilmesComedia[i] +"></br><span>"+ nomeFilmesComedia[i] + "</span></div></a>")
     
 }
}
