let x = 450
let y = 400

let knife = {
	knifeX_begin: 380,
	knifeY_begin: 422,
    knifeX_end: 400,
    knifeY_end: 432
};
 
let speed = 0

function setup()
{
	createCanvas(1024, 576);
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
    //character
    
    noStroke()
    fill(205, 207, 89)
    ellipse(x, y, 80, 80)
    fill(240, 234, 228)
    ellipse(x-13, y-10, 80-65, 80-50)
    ellipse(x+13, y-10, 80-65, 80-50)
    fill('black')
    ellipse(x-13, y-10, 80-75, 80-65)
    ellipse(x+13, y-10, 80-75, 80-65)
    rect(x-10, y+25, 80-60, 80-77)
    
    if (keyIsDown(68)) {
        x = x + 7
        noStroke()
        fill(205, 207, 89)
        ellipse(x, y, 80, 80)
        fill(240, 234, 228)
        ellipse(x+18, y-10, 80-65, 80-50)
        fill('black')
        ellipse(x+18, y-10, 80-75, 80-65)
        rect(x+5, y+25, 80-65, 80-77)        
    }
    
    if (keyIsDown(65)) {
        x = x - 7
        noStroke()
        fill(205, 207, 89)
        ellipse(x, y, 80, 80)
        fill(240, 234, 228)
        ellipse(x-18, y-10, 80-65, 80-50)
        fill('black')
        ellipse(x-18, y-10, 80-75, 80-65)
        rect(x-15, y+25, 80-65, 80-77)
    }
    
    if (keyIsDown(32) && y > 350) {
        speed = 5
        y = y - speed 
    }
    if (y < 400) {
        speed = speed - 0.5
        y = y - speed 
    }
}
