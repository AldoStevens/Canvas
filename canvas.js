var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// const color = '#2185C5';

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);

// Line 
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(500, 100);
// c.strokeStyle = "#fa34a3"; 
// c.stroke();

// Arc / Circle 
// c.arc(300, 300, 30, startAngle: float, endAngle: float, drawCounterClockwise: Bool (false))
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }



// This will be for circular motion 

function Particle (x, y, radius, color ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = 0;
    this.valocity = 0.05;

    this.update = () => {
        //Move points over time
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians);
        this.draw();
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();    
    };
}

let particles;
function init(){
    particles = [];

    for (let i = 0; i < 1; i++) {
        particles.push( new Particle(canvas.width / 2, canvas.height / 2, 5, "blue"  ));
    
        console.log(particles);
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
  
    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    particles.forEach(object => {
     particles.update()
    })
}

init();



// var x = 200;
// var dx = 4;
// var radius = 30;


// function animate() {
//     requestAnimationFrame(animate);

//     c.clearRect(0, 0, innerWidth, innerHeight);


//     c.beginPath();
//     c.arc(x, 200, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();

//     if (x + radius > innerWidth || x - radius < 0 ) {
//         dx = -dx;
//     }

//     x += dx;
// }

// animate();