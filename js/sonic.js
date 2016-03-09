var posiobsta=new Array(9);
for (var i = 0; i < 9; i++) {
    posiobsta[i] = new Array(2);
}

function generarram(){
    var division=900;
    for(var i = 0; i < 9; i++){
      for ( var j = 0; j < 2; j++) {
        if(j==0){
          posiobsta[i][j] = division;
          division=division+100;
        }
        if(j==1){
          posiobsta[i][j] = null;
        }
      }
    }
    var paridad=0;
    while (paridad<5){//estoy probando con piedras solamente 1 piedras/2 cactus
      var j=Math.floor(Math.random()*9);//ojo!! acomodar el new afuera para que sea uno solo
        if(posiobsta[j][1] == null){
            var piedra = new obstaculo(posiobsta[j][0],229);
            posiobsta[j][1]=piedra;
            paridad++;
          }
      }
    paridad=0;
}

var esperar=0;
var correr=1;
var saltar=2;
var correrapido=3;
var rodar=4;
var perdio=5;
var puntaje=0;
var contadordivs=0;
function Pantalla(_dificultad,_personaje,_cantvidas) {
       this.dificultad=_dificultad;
       this.personaje=_personaje;
       this.cantvidas=_cantvidas;
  }
function Erizo(_x,_y){
 this.x=_x;
 this.y=_y;
 this.estado=esperar;
}
function obstaculo(_x,_y){
  this.x=_x;
  this.y=_y;
  this.ancho=16;
  this.alto=13;
}
///variables globales
/////////////////////////////////////////////juego


var jugando=0;
function jugar(){
//generarram();
if (jugando==0){jugando=1;
document.getElementById('jugardenuevo').src="images/sonicportada.png";

////metodos de erizo
Erizo.prototype.setestado=function(e){
  sonic.estado=e;
}

Erizo.prototype.draw=function()
  {
    if (sonic.estado==correr){
      document.getElementById("personaje").className= "corriendo";
      sigue=false;
      }
    if (sonic.estado==saltar){
          contadorup++;
          var e=document.getElementById("personaje").style;
          document.getElementById("personaje").className= "saltar";
          if(contadorup==1){
            e.top="180px";sonic.y=80;
          }
          if(contadorup==2){
            e.top="150px";sonic.y=50;
          }
          if(contadorup==3){
            e.top="120px";sonic.y=30;
          }
          if(contadorup==4){
            e.top="150px";sonic.y=50;
          }
          if(contadorup==5){
            e.top="200px";  sigue=false;
            sonic.setestado(correr);
            contadorup=0;
            sonic.y=100;
          }
        }
    if (sonic.estado==correrapido){
          contadorup++;
          document.getElementById("personaje").className= "correrapido";
          if(contadorup==4){
            sonic.setestado(correr);
            contadorup=0;
            sigue=false;
          }
        }
      if (sonic.estado==rodar){
        contadorup++;
        document.getElementById("personaje").className= "rodar";
        if(contadorup==6){
          sonic.setestado(correr);
          contadorup=0;
          sigue=false;
        }
      }
      if (sonic.estado==perdio){
        contadorup++;
        document.getElementById("personaje").className= "perdio";
        if(contadorup==1){sigue=true;document.getElementById('pier').play();}
        if(contadorup==5){
          sonic.setestado(correr);juego.cantvidas--;
          contadorup=0;
          sigue=true;
        }
      }
    }
///metodos de pantalla
Pantalla.prototype.colocaobstaculo=function(){

  if (sonic.estado==esperar){
  }
else {
  var contadorpiedra=0;
  for (var i = 0; i < posiobsta.length; i++) {
    if(posiobsta[i][1] != null){
      contadorpiedra++;
      var piedra="piedra"+contadorpiedra;
      var p=document.getElementById(piedra).style;
      juego.perdio();
        if (sonic.estado==correr ){
          posiobsta[i][1].x=posiobsta[i][1].x-15;      auxpiedra.x=posiobsta[i][1].x;
        }
        if (sonic.estado==saltar){
          posiobsta[i][1].x=posiobsta[i][1].x-15;      auxpiedra.x=posiobsta[i][1].x;
        }
        if (sonic.estado==correrapido){
            posiobsta[i][1].x=posiobsta[i][1].x-20;      auxpiedra.x=posiobsta[i][1].x;
        }
        if (sonic.estado==rodar){
            posiobsta[i][1].x=posiobsta[i][1].x-15;      auxpiedra.x=posiobsta[i][1].x;
        }
        if (sonic.estado==perdio){
          posiobsta[i][1].x=posiobsta[i][1].x-10;      auxpiedra.x=posiobsta[i][1].x;
        }
        if((auxpiedra.x <880)&&(auxpiedra.x >-20)&&((posiobsta[i][1] != null))){
          p.left=posiobsta[i][1].x+"px";
            }
        if((posiobsta[i][1].x <-15)&&(contadorpiedra==5)){
          generarram();
        }
      }
    }
  }
}

Pantalla.prototype.terreno=function(){
var t=document.getElementById("terreno").style;
if (sonic.estado==esperar){
  t.left=aux+"px";
  document.getElementById("terreno").style.WebkitAnimation = "terreno 10s steps(1)";
}
if (sonic.estado==correr){
  aux=aux-7;
  puntaje++;
  document.getElementById("terreno").style.WebkitAnimation = "terreno 13s steps(250) infinite";
  //t.left=aux+"px";
}
if (sonic.estado==saltar){
  aux=aux-7;
  puntaje++;
  document.getElementById("terreno").style.WebkitAnimation = "terreno 13s steps(250) infinite";
}
if (sonic.estado==correrapido){
  aux=aux-10;
  puntaje=puntaje+10;
  document.getElementById("terreno").style.WebkitAnimation = "terreno 13s  steps(125) infinite";
}
if (sonic.estado==rodar){
  aux=aux-7;puntaje=puntaje+5;
  document.getElementById("terreno").style.WebkitAnimation = "terreno 13s steps(250) infinite";
}
if (sonic.estado==perdio){
  aux=aux-5;
  document.getElementById("terreno").style.WebkitAnimation = "terreno 13s steps(250) infinite";
}
}
///////////////////////////
Pantalla.prototype.limpiapantalla=function(){
  document.getElementById("personaje").className= "esperando";
  document.getElementById("toasty").style.zIndex = "-10";
  puntaje=0;
  for (var i = 1; i <=5; i++) {
    var piedra="piedra"+i;
    var p=document.getElementById(piedra).style;
    p.left=880+"px";
  }
  }
///////////////////////////
Pantalla.prototype.score=function(){
    document.getElementById("score").innerHTML="Score :  "+puntaje;
  if(this.cantvidas==3){
    document.getElementById("vidas").style.backgroundImage="url('images/corazon3.png')";
  }
  if(this.cantvidas==2){
    document.getElementById("vidas").style.backgroundImage="url('images/corazon2.png')";
  }
  if(this.cantvidas==1){
    document.getElementById("vidas").style.backgroundImage="url('images/corazon.png')";
  }
  if(this.cantvidas==0){
    document.getElementById("vidas").style.backgroundImage="url('images/corazon4.png')";
    clearInterval(original);
    document.getElementById("escenario").style.WebkitAnimationPlayState = "paused";
    document.getElementById("terreno").style.WebkitAnimationPlayState = "paused";
    document.getElementById('jugardenuevo').src="images/reiniciar2.png";
    setTimeout(function(){document.getElementById("toasty").style.zIndex = "-1"; document.getElementById('toast').play();  },50);
    setTimeout(function(){document.getElementById("toasty").style.zIndex = "-10";},750);
    historia= '<div class="histo" >'+"score: "+puntaje+'</div>';
		$('.historial').append(historia);contadordivs++;
    if(contadordivs==6){
      $('.historial .histo').remove();
    }
    jugando=0;
  }
}
////////////////
Pantalla.prototype.perdio=function(){
  //alert(sonic.y+113);
  if((((auxpiedra.x+110) <= (sonic.x+32)) && ((sonic.x+5) <= (auxpiedra.x+110))) && (((sonic.y+113) >= (auxpiedra.y)) && ((sonic.y+90) <= (auxpiedra.y)))){ //pierde
    sonic.setestado(perdio);
    }
    else {//continua=true;
    }
////////////////////////////////////////////////////////controlador
}
Pantalla.prototype.update=function(){
  juego.terreno();
  juego.colocaobstaculo();
  sonic.draw();
  juego.score();
}
////////////////////////////////////////////////////////

var aux=0;//para el terreno,donde vamos alojar las variables que luego seran deteadas al style
var sonic = new Erizo(300,100);
var auxpiedra=new obstaculo(858,204);
var juego = new Pantalla(1,sonic,3);
var contadorup = 0;//// contador para saber los frames del salto
var original=0;
if (jugando==1){
  juego.limpiapantalla();
  generarram();
  original=setInterval(juego.update,100);
  }
    var sigue=false;
    $(document).keydown(function(e) {
       if(e.which == 37) {// left
         }
       if((e.which == 38) &&(!sigue)){// up
             sigue=true;
             sonic.setestado(saltar);
             }
       if((e.which == 39)&&(!sigue)) {// right
          sigue=true;
          sonic.setestado(correrapido);
         }
       if((e.which == 40)&&(!sigue)) {// down
             sigue=true;
             sonic.setestado(rodar);
             }
       e.preventDefault();
    });
    /////////////////////////sonido teclas
    var sounds = {
      38 : 'salto',
      39 : 'corre',
      40 : 'rueda',
    };
    document.onkeydown = function(e) {
       var soundId = sounds[e.keyCode];
       if ((soundId) && (jugando==1)) document.getElementById(soundId).play();
       //else console.log("key not mapped : code is", e.keyCode);
    }
  }//jugando(variable para no hacer clic cuando ya se esta jugando)
}//funcion jugar
/////////////////////////sonido
document.getElementById('sonic').play();
var control=true;
function pause(){
  if (control){
      control=false;
      document.getElementById('sonic').pause();
      document.getElementById('sonido').src="images/nota2.png";
      }
  else {
      control=true;
      document.getElementById('sonic').play();
      document.getElementById('sonido').src="images/nota.png";
  }
}
