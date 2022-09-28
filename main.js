canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // establece una función para cargar esta variable
	background_imgTag.src = background_image;   //carga la imagen

	rover_imgTag = new Image(); //define una variable con una nueva imagen
	rover_imgTag.onload = uploadrover; // establece una función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up(up);
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down(40);
			console.log("douw");
		}
		if(keyPressed == '37')
		{
			left(37);
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right(39);
			console.log("rigth");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y =rover_y-10 ;
		console.log("Cuando se presione la flecha arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("Cuando se presione la flecha abajo,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}

function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x+15;
		console.log("Cuando se presione la flecha derecha,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
//Actividad adicional
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("Cuando se presione la flecha izquierda,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
//La actividad adicional termina aquí.
	