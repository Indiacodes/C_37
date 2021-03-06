class Form {
     constructor(){
          this.greetings = createElement('h2');
          this.input = createInput('Please enter your name');
          this.button = createButton('Join Game');
     }

     display(){
          strokeWeight(5);
          this.input.position(displayWidth/2,displayHeight/2 - 150);     
          this.button.position(displayWidth/2, displayHeight/2 - 50);
          text('Welcome to the car racing game', 250, 150);
          this.button.mousePressed(() => {
               this.input.hide();
               this.button.hide();
               playerCount += 1;

               player.index = playerCount;
               player.name = this.input.value();
               
               player.updatePlayerCount(playerCount);
               player.updatePlayerProfile();

               this.greetings.html("Hello " + this.input.value() + " please wait until other players join");
               this.greetings.position(250, 390);
               
          });
     }

     hide(){
          this.input.hide();
          this.greetings.hide();
          this.button.hide();
     }
}