/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(18, 36, 35); //fill the sky blue
    
    noStroke();
	fill(14, 32, 31);
    rect(0, 0, 1024, 380) // dark blue
    
    noStroke();
	fill(10, 28, 27);
    rect(0, 0, 1024, 328)

	noStroke();
	fill(175, 192, 196);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(218, 225, 227);
	ellipse(370, 90, 70, 70) // MOON bc
    
    noStroke();
	fill(193, 200, 201);
    ellipse(355, 105, 25, 20) // moon dt
    
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

	//2. a mountain in the distance
	//... add your code here



	//3. a tree
	//... add your code here

	noStroke();
	fill(48, 47, 47);
	triangle(860, 462, 890, 462, 875, 320) // dead tree
    
    strokeWeight(5);
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
    
    

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
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
    
    line(30, 432, 70, 432) // блики 
    
    line(150, 432, 230, 432)
    
    line(100, 472, 200, 472)
    
    line(50, 502, 100, 502)
    
    line(150, 515, 270, 515)
    
    line(15, 545, 50, 545)
    
    noStroke()
    fill(154, 170, 173, 150)
    
    quad(0, 432, 40, 432, 150, 576, 0, 576) // ice

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

    strokeWeight(4);
    stroke(80, 80, 80)
	line(380, 422, 400, 432) // knife ^_^
    
    stroke(227, 227, 227)
    triangle(380, 422, 369, 416, 379, 425)
    
}
