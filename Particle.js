class Particle
{
    costructor(x,y,r)
    {
        var options = 
        {
            resistance:0.4,
            isStatic:false
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}