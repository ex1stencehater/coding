let gameChar = {
	gameChar_x: 450,
	gameChar_y: 340,
    gameChar_r: 10,
    gameChar_w: 30,
    gameChar_h: 60
};

let knife = {
	knifeX_begin: 380,
	knifeY_begin: 422,
    knifeX_end: 400,
    knifeY_end: 432
};
 

function setup()
{
	createCanvas(1024, 576);
    Previous_key = '';
}

function draw()
{
	background(18, 36, 35); //sky
    
    noStroke();
	fill(14, 32, 31);
    rect(0, 0, 1024, 380) //sky1
    
    noStroke();
	fill(10, 28, 27);
    rect(0, 0, 1024, 328) //sky2

	noStroke();
	fill(175, 192, 196);
	rect(0, 432, 1024, 144); //ground

	noStroke();
	fill(218, 225, 227);
	ellipse(370, 90, 70, 70) // MOON bc
    
    noStroke();
	fill(193, 200, 201);
    ellipse(355, 105, 25, 20) // moon dt____
    ellipse(390, 100, 20, 30) 
    ellipse(360, 70, 30, 20) 
    
    strokeWeight(7);
    stroke(174, 182, 184)
    point(375, 115)
    
    strokeWeight(10);
    point(343, 85)
    
    noStroke();
	fill(237, 243, 245);
    ellipse(378, 70, 27, 20) // MOON highlight
    
    // STARS/snow?
    
    strokeWeight(2)
    stroke(218, 225, 227)
    point(150, 70)
    point(220, 160)
    point(120, 280)
    point(300, 290)
    point(600, 110)
    point(790, 60)
    point(860, 170)
    point(700, 220)
    point(500, 270)

    // dead tree

	noStroke();
	fill(48, 47, 47);
	triangle(860, 462, 890, 462, 875, 320) 
    
    strokeWeight(5); //ветки
    stroke(48, 47, 47)
	line(875, 330, 825, 280) // main left
    line(875, 335, 895, 235) // main right
    line(825, 280, 800, 220) // l2
    line(800, 220, 780, 200) // l3
    line(895, 235, 915, 200) // r2
    line(875, 330, 850, 190) // middle1
    line(850, 190, 860, 130) // m2
    line(875, 335, 840, 250) // ml
    line(875, 335, 820, 315) // ниже слева1
    line(820, 315, 770, 290) // ниже слева2
    line(820, 315, 785, 320) // ниже слева22
    line(875, 335, 800, 360) // ниже ниже слева
    line(875, 335, 940, 280) // справа ниже
    line(940, 280, 960, 250) // справа ниже2
    line(875, 335, 930, 340) // ниже ниже справа
    line(930, 340, 955, 330) // ниже ниже справа2
    
    noStroke();
	fill(154, 170, 173);
	quad(0, 432, 310, 432, 420, 576, 0, 576) // sand
         
	noStroke();
	fill(31, 46, 61);
	quad(0, 432, 290, 432, 400, 576, 0, 576) // LAKE
    
    noStroke();
	fill(20, 31, 41, 150);
	quad(0, 432, 270, 432, 380, 576, 0, 576) // shade прозрачность 
    
    strokeWeight(3);
    stroke(218, 225, 227)
    line(30, 432, 70, 432) // блики____
    line(150, 432, 230, 432)
    line(100, 472, 200, 472)
    line(50, 502, 100, 502)
    line(150, 515, 270, 515)
    line(15, 545, 50, 545)
    
    noStroke()
    fill(154, 170, 173, 150)
    
    quad(0, 432, 40, 432, 150, 576, 0, 576) // ice
    
    
    /*
    noStroke()
    fill(50, 153, 103)
    rect(450, 310, 30, 55, 10); // body
    rect(450, 285, 30, 30, 60) // head
    rect(460, 345, 10, 60, 10) // lleg
    rect(455, 350, 10, 60, 10) // rleg
    rect(460, 315, 10, 60, 10) // larm
    rect(450, 315, 10, 60, 10) // rarm
    */
    Item();
    
    console.log(key);
	
	if (keyIsDown(65)) //character moves
	{
		left();
		gameChar.gameChar_x -= 5;
		if (gameChar.gameChar_x <= 0)
			{
				gameChar.gameChar_x = 5;
			}

	}
	else if (Previous_key == 'A' && key == ' ')
	{
	   	left_jump();
	}
	else if (keyIsDown(68))
	{
		right();
		gameChar.gameChar_x += 5;
		if (gameChar.gameChar_x >= 1024)
			{
				gameChar.gameChar_x = 1019;
			}
		
	}
	else if (Previous_key == 'D' && key == ' ')
	{
		right_jump();
	}
	else if (Previous_key == '' && key == ' ')
	{
		front_jump();
	}
	else
	{
		front();
		Previous_key = '';
	}

}

function Item() //knife
{
    strokeWeight(4);
    stroke(80, 80, 80)
	line(knife.knifeX_begin, knife.knifeY_begin, knife.knifeX_end, knife.knifeY_end) // knife ^_^
    
    stroke(227, 227, 227)
    triangle(knife.knifeX_begin, knife.knifeY_begin, knife.knifeX_begin - 11, knife.knifeX_end + 16, knife.knifeX_begin - 1, knife.knifeY_begin + 3)
    
}
 
   /* 
   let gameChar = {
	gameChar_x: 450,
	gameChar_y: 340,
    gameChar_r: 10,
    gameChar_w: 30,
    gameChar_h: 60
    
   rect(450, 340, 30, 55, 10); // body
    rect(450, 310, 30, 30, 60) // head
    rect(450, 380, 10, 60, 10) // lleg
    rect(470, 380, 10, 60, 10) // rleg
    rect(445, 345, 10, 60, 10) // larm
    rect(475, 345, 10, 60, 10) // rarm
*/

function front()
{
    //character - FRONT
	noStroke()
    fill(50, 153, 103)
	rect(gameChar.gameChar_x, gameChar.gameChar_y, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 30, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 20, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x - 5, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x + 25, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
	
}

/*
    rect(450, 340, 30, 55, 10); // body
    rect(450, 310, 30, 30, 60) // head
    rect(455, 380, 10, 60, 10) // lleg
    rect(460, 380, 10, 60, 10) // rleg
    rect(450, 345, 10, 60, 10) // larm
    rect(460, 345, 10, 60, 10) // rarm
    
	gameChar_x: 450,
	gameChar_y: 340,
    gameChar_w: 30,
    gameChar_h: 60
    gameChar_r: 10,
*/    

function right()
{
    //character - RIGHT
	noStroke()
    fill(50, 153, 103)
    rect(gameChar.gameChar_x, gameChar.gameChar_y, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 30, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x + 5, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
    
}

/*
    rect(450, 340, 30, 55, 10); // body
    rect(450, 310, 30, 30, 60) // head
    rect(460, 380, 10, 60, 10) // lleg
    rect(465, 380, 10, 60, 10) // rleg
    rect(460, 345, 10, 60, 10) // larm
    rect(470, 345, 10, 60, 10) // rarm
    
    gameChar_x: 450,
	gameChar_y: 340,
    gameChar_w: 30,
    gameChar_h: 60
    gameChar_r: 10,
*/    
function left()
{
    //character - LEFT
	noStroke()
    fill(50, 153, 103)
    rect(gameChar.gameChar_x, gameChar.gameChar_y, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 30, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 15, gameChar.gameChar_y + 40, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x + 20, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
}
/*
    rect(450, 310, 30, 55, 10); // body
    rect(450, 285, 30, 30, 60) // head
    rect(450, 340, 10, 60, 10) // lleg
    rect(470, 340, 10, 60, 10) // rleg
    rect(445, 310, 10, 60, 10) // larm
    rect(475, 310, 10, 60, 10) // rarm
    
    gameChar_x: 450,
	gameChar_y: 340,
    gameChar_w: 30,
    gameChar_h: 60
    gameChar_r: 10,
    */
function front_jump()
{
		//Character - FRONT JUMP
    noStroke()
    fill(50, 153, 103)
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 30, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 55, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x, gameChar.gameChar_y, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 20, gameChar.gameChar_y, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x - 5, gameChar.gameChar_y - 30, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x + 25, gameChar.gameChar_y - 30, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
}
/*
    rect(450, 310, 30, 55, 10); // body y - 30, h - 5
    rect(450, 285, 30, 30, 60) // head y - 55, h - 30
    rect(460, 345, 10, 60, 10) // lleg x + 10, y + 5, w - 20
    rect(465, 350, 10, 60, 10) // rleg x + 15, y + 10, w - 20
    rect(460, 315, 10, 60, 10) // larm x + 10, y - 25, w - 20
    rect(470, 315, 10, 60, 10) // rarm x + 30, y - 25, w - 20
    gameChar_x: 450,
	gameChar_y: 340,
    gameChar_w: 30,
    gameChar_h: 60
    gameChar_r: 10,
*/
function left_jump()
{
    noStroke()
    fill(50, 153, 103)
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 3, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 55, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 15, gameChar.gameChar_y + 10, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y - 25, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x + 30, gameChar.gameChar_y - 25, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
}
/*
    rect(450, 310, 30, 55, 10); // body
    rect(450, 285, 30, 30, 60) // head
    rect(460, 345, 10, 60, 10) // lleg x + 10, y + 5, w - 20
    rect(455, 350, 10, 60, 10) // rleg x + 5, y + 10, w - 20
    rect(460, 315, 10, 60, 10) // larm x + 10, y - 25, w - 20
    rect(450, 315, 10, 60, 10) // rarm y - 25, w - 20

    gameChar_x: 450,
	gameChar_y: 340,
    gameChar_w: 30,
    gameChar_h: 60
    gameChar_r: 10,
    */
function right_jump()
{
    noStroke()
    fill(50, 153, 103)
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 3, gameChar.gameChar_w, gameChar.gameChar_h - 5, gameChar.gameChar_r) // body
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 55, gameChar.gameChar_w, gameChar.gameChar_h - 30, gameChar.gameChar_r + 50) // head
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y + 5, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // lleg
    rect(gameChar.gameChar_x + 5, gameChar.gameChar_y + 10, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rleg
    rect(gameChar.gameChar_x + 10, gameChar.gameChar_y - 25, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // larm
    rect(gameChar.gameChar_x, gameChar.gameChar_y - 25, gameChar.gameChar_w - 20, gameChar.gameChar_h, gameChar.gameChar_r) // rarm
}