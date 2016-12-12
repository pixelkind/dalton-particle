
var createParticle = function() {
    return { x: random(-10, 10), y: random(-10, 10), age: 0, speed: random(0.2, 2), startX: random(-360, 360) };
};

var particles = [];
for (var i = 0; i < 200; i++) {
    particles.push(createParticle());
}

var x = 250;
var y = 250;
var particleSize = 4;

var draw = function() {
    background(0, 0, 0);
    noStroke();
    fill(255, 255, 0, 20);
    for (var i in particles) {
        var particle = particles[i];
        ellipse(x + particle.x + sin((particle.startX + particle.age) * 1) * 10, y + particle.y, particleSize, particleSize*2);
        particle.age++;
        particle.y -= particle.speed;
    }
    
    for (var i = particles.length - 1; i >= 0; i--) {
        var particle = particles[i];
        if (particle.age > 50) {
            particles.splice(i, 1);
        }
    }
    
    for (var i = 0; i < 30; i++) {
        particles.push(createParticle());
    }
    
};