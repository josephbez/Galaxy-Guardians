export default class Enemy {
    constructor(x, y, imageNumber, difficulty) {
      this.x = x;
      this.y = y;
      this.width = 44;
      this.height = 32;

      this.difficulty = difficulty;
  
      this.image = new Image();
      this.image.src = `images/enemy${imageNumber}.png`;
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
    move(xVelocity, yVelocity) {
      this.x += xVelocity;
      this.y += yVelocity;
    }
  
    collideWith(sprite) {

    const collisionWidth = this.width * (this.difficulty === 'hard' ? 1.5 : 1);
    const collisionHeight = this.height * (this.difficulty === 'hard' ? 1.5 : 1);

      if (
        this.x + this.width > sprite.x &&
        this.x < sprite.x + sprite.width &&
        this.y + this.height > sprite.y &&
        this.y < sprite.y + sprite.height
      ) {

        return true;
      } else {
        return false;
      }
    }
  }
