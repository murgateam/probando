 Erizo.prototype.draw_salto=function(){
   ctx.clearRect(0,0,900,200);
   ctx.beginPath();
   juego.nubes();
   contadorup++;
   if (contadorup == 1){
        movimientoy=movimientoy - 10;}
   if (contadorup == 2){
        movimientoy=movimientoy - 25;}
   if (contadorup == 3){
        movimientoy=movimientoy - 40;}
   ctx.drawImage(imageup,currentFrame*frameWidth2, 0,frameWidth2, frameHeight2,movimientox,movimientoy,frameWidth2, frameHeight2);
   juego.mapamove(1);
   update(6);                                                                   //pos x   //posy
  if (movimientopiedra < 0)
      movimientopiedra=900;
  if (movimientoterreno<-154){
        movimientoterreno=0;
      }
   if (contadorup == 4){
        movimientoy=movimientoy + 40;}
   if (contadorup == 5)
   {
        movimientoy=movimientoy + 25;}
   if(contadorup == 6){
     contadorup=0;
     movimientoy=100;
     currentFrame =0;
     clearInterval(refresh_2);
     refreshOriginal = setInterval(draw,150);
     sigue=false;
   }

   ctx.fill();
   ctx.stroke();
   if(((movimientopiedra) <= (sonic.x+21)) && ((movimientoy) >= (99))&& ((sonic.x-21) <= (movimientopiedra))){
       juego.perdio();
     }
 }

 Erizo.prototype.draw_down=function(){
   ctx.clearRect(0,0,900,200);
   ctx.beginPath();
   juego.nubes();
   contadorup++;
   ctx.drawImage(imagedown,currentFrame*frameWidthdown, 0,frameWidthdown, frameHeight2,movimientox,movimientoy+4,frameWidthdown, frameHeight2);
   juego.mapamove(1);
   update(5);
   if (movimientopiedra < 0)
       movimientopiedra=900;
   if (movimientoterreno<-154){
         movimientoterreno=0;
       }
   if(contadorup == 5){
     contadorup=0;
     movimientoy=100;
     currentFrame =0;
     clearInterval(refresh_2);
     refreshOriginal = setInterval(draw,150);
     sigue=false;
   }

   ctx.fill();
   ctx.stroke();
   if(((movimientopiedra) <= (sonic.x+21)) && ((sonic.y+21) >= (99))&& ((sonic.x-21) <= (movimientopiedra))){
     juego.romper();
     }
 }

 Erizo.prototype.draw_correr=function(){
   ctx.clearRect(0,0,900,200);
   ctx.beginPath();
   juego.nubes();
   contadorup++;
   ctx.drawImage(imagecorrer,currentFrame*frameWidthcorrer, 0,frameWidthcorrer, frameHeightcorrer,movimientox,movimientoy+4,frameWidthcorrer, frameHeightcorrer);
   juego.mapamove(2);
   update(4);                                                                                   //pos x   //posy
   if (movimientopiedra < 0)
       movimientopiedra=900;
   if (movimientoterreno<-154){
       movimientoterreno=0;
       }
   if(contadorup == 4){
     contadorup=0;
     movimientoy=100;
     currentFrame =0;
     clearInterval(refresh_2);
     refreshOriginal = setInterval(draw,150);
     sigue=false;
   }
   ctx.fill();
   ctx.stroke();
   if(((movimientopiedra) <= (sonic.x+21)) && ((sonic.y+21) >= (99))&& ((sonic.x-21) <= (movimientopiedra))){
       juego.perdio();
     }
 }

 Erizo.prototype.espera=function(){
   ctx.clearRect(0,0,900,200);
   ctx.beginPath();
   juego.nubes();
   ctx.drawImage(imageespera,currentFrame*frameWidthespera, 0,frameWidthespera, frameHeightespera,movimientox,movimientoy+1,frameWidthespera, frameHeightespera);
   ctx.drawImage(imageterreno,0.01*frameWidthterreno, 0,frameWidthterreno, frameHeightterreno,movimientoterreno,139,frameWidthterreno, frameHeightterreno);
   update(8);
   ctx.fill();
   ctx.stroke();
 }

/////////////////////////////////////////////////////////////////////////////////////////pantalla
  Pantalla.prototype.perdio=function(){

    ctx.clearRect(0,0,900,200);
    ctx.beginPath();
    juego.nubes();
    contadorup++;
    //ctx.drawImage(image,currentFrame*frameWidth, 0,frameWidth, frameHeight,movimiento,40,frameWidth, frameHeight);
    ctx.drawImage(imagecaida,currentFrame*frameWidthcaida, 0,frameWidthcaida, frameHeightcaida,movimientox,movimientoy+1,frameWidthcaida, frameHeightcaida);
    ctx.drawImage(imagepiedra,0.02*frameWidthpiedra, 0,frameWidthpiedra, frameHeightpiedra,movimientopiedra,122,frameWidthpiedra, frameHeightpiedra);
    ctx.drawImage(imageterreno,0.01*frameWidthterreno, 0,frameWidthterreno, frameHeightterreno,movimientoterreno,139,frameWidthterreno, frameHeightterreno);
    update(5);                                                                                   //pos x   //posy
    //movimientopiedra= movimientopiedra-12;
    if (movimientopiedra < 0)
        movimientopiedra=900;
    if (movimientoterreno<-154){
        movimientoterreno=0;
        }
    if(contadorup == 4){
      contadorup=0;
      currentFrame =0;
      clearInterval(refresh_2);
      clearInterval(refreshOriginal);
      //refreshOriginal = setInterval(draw,150);
      sigue=false;
    }
    ctx.fill();
    ctx.stroke();
    document.getElementById('pierde').play();
  }
  Pantalla.prototype.romper=function(){
    ctx.clearRect(0,0,900,200);
    ctx.beginPath();
    juego.nubes();
    contadorup++;
    if (contadorup == 1){
         movimientopiedray=movimientopiedray - 10;
         movimientopiedra= movimientopiedra-12;}
    if (contadorup == 2){
         movimientopiedray=movimientopiedray - 25;
       movimientopiedra= movimientopiedra-12;}
    if (contadorup == 3){
         movimientopiedray=movimientopiedray - 40;
       movimientopiedra= movimientopiedra-12;}
    //ctx.drawImage(image,currentFrame*frameWidth, 0,frameWidth, frameHeight,movimiento,40,frameWidth, frameHeight);
    ctx.drawImage(imagedown,currentFrame*frameWidthdown, 0,frameWidthdown, frameHeight2,movimientox,movimientoy+1,frameWidthdown, frameHeight2);
    ctx.drawImage(imagepiedrarota,currentFrame*frameWidthpiedrarota, 0,frameWidthpiedrarota, frameHeightpiedrarota,movimientopiedra,movimientopiedray,frameWidthpiedrarota, frameHeightpiedrarota);
    ctx.drawImage(imageterreno,0.01*frameWidthterreno, 0,frameWidthterreno, frameHeightterreno,movimientoterreno,139,frameWidthterreno, frameHeightterreno);
    update(5);                                                                                   //pos x   //posy
    movimientopiedra= movimientopiedra-12;
    if (contadorup == 3){
         movimientopiedray=movimientopiedray + 40;
         movimientopiedra= movimientopiedra-12;}
    if (movimientopiedra < 0)
        movimientopiedra=900;
    if (movimientoterreno<-154){
          movimientoterreno=0;
        }
    if(contadorup == 5){
      contadorup=0;
      movimientoy=100;
      movimientopiedray=122;
      currentFrame =0;
      clearInterval(refresh_2);
      //refreshOriginal = setInterval(draw,150);
      sigue=false;
    }
    ctx.fill();
    ctx.stroke();
  }

  Pantalla.prototype.mapamove=function(velocidad){
      ctx.drawImage(imagepiedra,0.01*frameWidthpiedra, 0,frameWidthpiedra, frameHeightpiedra,movimientopiedra,122,frameWidthpiedra, frameHeightpiedra);
      ctx.drawImage(imageterreno,0.01*frameWidthterreno, 0,frameWidthterreno, frameHeightterreno,movimientoterreno,139,frameWidthterreno, frameHeightterreno);

      if (velocidad == 0){
        movimientopiedra= movimientopiedra-7;
        movimientoterreno= movimientoterreno-7}
      if (velocidad == 1){
          movimientopiedra= movimientopiedra-11;
        movimientoterreno= movimientoterreno-11;}
      if (velocidad == 2){
        movimientopiedra= movimientopiedra-12;
      movimientoterreno= movimientoterreno-12;}
  }

  Pantalla.prototype.nubes=function(){
      ctx.drawImage(imagecielo,0.01*frameWidthcielo, 0,frameWidthcielo, frameHeightcielo,movcielo,0,frameWidthcielo, frameHeightcielo);
      movcielo--;
      if (movcielo == -900){
        movcielo=0;
      }
  }
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var image = new Image();
  var imagedown = new Image();
  var imageup = new Image();
  var imagecorrer = new Image();
  var imagepiedra = new Image();
  var imagepiedrarota = new Image();
  var imagecaida = new Image();
  var imageterreno = new Image();
  var imageespera = new Image();
  var imagecielo = new Image();
  var frameWidthup;
  var frameWidthdown;
  var frameWidthcorrer;
  image.src = "images/sonic.png";
  imageup.src = "images/sonicup2.png";
  imagedown.src = "images/sonicdown.png";
  imagecorrer.src = "images/soniccorrer.png";
  imagepiedra.src = "images/piedra.png";
  imagepiedrarota.src = "images/piedrarota.png";
  imagecaida.src = "images/soniccaida.png";
  imageterreno.src = "images/terreno.png";
  imageespera.src = "images/espera.png";
  imagecielo.src = "images/cielo.png";
  frameWidth2 = image.width / 6;
  frameHeight2 = image.height;
  frameWidthup = image.width / 6;
  frameWidthdown = imagedown.width / 5;
  frameWidthcaida = imagecaida.width / 5;
  frameHeightcaida = imagecaida.height;
  frameWidthcorrer = imagecorrer.width / 4;
  frameHeightcorrer = imagecorrer.height;
  frameHeightpiedra = imagepiedra.height;
  frameWidthpiedra = imagepiedra.width;
  frameHeightpiedrarota = imagepiedrarota.height;
  frameWidthpiedrarota = imagepiedrarota.width / 5;
  frameWidthterreno = imageterreno.width;
  frameHeightterreno = imageterreno.height;
  frameWidthespera = imageespera.width / 8;
  frameHeightespera = imageespera.height;
  frameWidthcielo = imagecielo.width;
  frameHeightcielo = imagecielo.height;
  var contadorup = 0;
//////////////////////////////////////////////////////////
function Erizo(_x,_y,_imagen){
  this.imagen=_imagen;
  this.x=_x;
  this.y=_y;
  this.up=false;
  this.down=false;
  this.izq=false;
  this.correr=false;
}
function obstaculo(_x,_y,_imagen){
  this.imagen=_imagen;
  this.x=_x;
  this.y=_y;
}
function Pantalla(_map,_vida) {
    this.map=_map;
    this.vidas=_vida;
}
//////////////////////////////////////////////////////////
var sonic = new Erizo(200,100,image);
var piedra = new obstaculo(500,100,imagepiedra);
var juego = new Pantalla(0,0);
//var refreshOriginal = setInterval(draw,150);
var refreshespera =0;
var refreshOriginal;
refreshespera =setInterval(sonic.espera,200);
var refresh_2 = 0;
// El cuadro actual de la animación
var currentFrame = 0;
function update (Frames) {
  //calcular próximo frame
  currentFrame = (currentFrame + 1) % Frames;//aca pongo los 4 ifs
  }
var movimientox=200;
var movimientoy=100;
var movimientopiedra=890;
var movimientoterreno= 0;
var movimientopiedray=122;
var movcielo = 0;




function draw(){
  ctx.clearRect(0,0,900,200);
  ctx.beginPath();
  juego.nubes();
  ctx.drawImage(image,currentFrame*frameWidth2, 0,frameWidth2, frameHeight2,movimientox,101,frameWidth2, frameHeight2);
  juego.mapamove(0);
  update(6);

  if (movimientopiedra < 0){
      movimientopiedra=900;
    }
  if (movimientoterreno<-154){
    movimientoterreno=0;
  }
  ctx.fill();
  ctx.stroke();
  //alert(sonic.y);
  if(((movimientopiedra) <= (sonic.x+21)) && ((sonic.y+21) >= (99))&& ((sonic.x-21) <= (movimientopiedra))){
      juego.perdio();
    }
}
///////////////////////////////////////////////teclas
var sigue=false;
$(document).keydown(function(e) {
    //sigue=true;
    clearInterval(refreshespera);
    if(e.which == 37) {// left
        }
    if((e.which == 38) &&(!sigue)){// up
          sigue=true;
          sonic.up = true;
          //piedra.draw(1);
          //clearInterval(refreshOriginal);
          refresh_2=setInterval(sonic.draw_salto,150);
          clearInterval(refreshOriginal);
          sonic.up = false;
          }
    if((e.which == 39)&&(!sigue)) {// right
      sonic.correr = true;
      sigue=true;
      //clearInterval(refreshOriginal);
      refresh_2=setInterval(sonic.draw_correr,150);
      clearInterval(refreshOriginal);
      sonic.correr = false;

      }
    if((e.which == 40)&&(!sigue)) {// down
          sigue=true;
          sonic.down = true;
          //clearInterval(refreshOriginal);
          refresh_2=setInterval(sonic.draw_down,150);
          clearInterval(refreshOriginal);
          sonic.down = false;
          }
  //  default: return; // exit this handler for other keys

    e.preventDefault(); // prevent the default action (scroll / move caret)
});

document.getElementById('sonic').play();
var sounds = {
   38 : 'saltar',
   40 : 'rodar',
};
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    //else console.log("key not mapped : code is", e.keyCode);
}
