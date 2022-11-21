const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function  ()  {
    alert('Génesis oficialmente eres novia de Michael😍😍,osea mia solita,sabia que me darias el si uwu💘,te amo,los textos que aparezcan te los voy a leer princesa hermosa💜,1 Corintios 13:4-8,amar es una decision, yo decidi amarte y estar contigo💘, decidir es Hacer una elección tras reflexionar sobre ella😍,Colosenses 3:14,vistamonos siempre de amor princesita de Dios y mia💘,Cantares 8:6-7,prevalecer es Crecer y aumentar una cosa no material😍,con Dios vamos a prevalecer en amor,Cantares 6:3, soy tuyo y tu eres mia💘, pero los dos somos de Dios, hagamos 💜todo para agradarnos y agradar a Dios😍, te amo amor de mi vida, eres lo mejor que me ha pasado💘, dame un besito chiquita preciosa,te amo y agradesco a Dios porque 💜te puso en mi vida😍,te amo me encantas, me gusta todo de ti, sigamos avazando💜, Dios tiene algo lindo para nosotros,seamosle fiel a el y todo nos saldra bien💘,Dios mio princesa te amo,te amo,💜y no me canso de decirtelo❤️,quiero estar contigo,eres humilde y eso me encanta, eres lo mejor💜,eres si lo mas perfecto que existe para mi😍, eres lo que simpre  quise y pedia 💜a Dios en mis oraciones😍,me haces sentir bien  y en paz💘,me haces muchisimo bien,te amo inmensamente👸❤️ ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const  randomX = parseInt(Math.random()*100);
    const  randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})