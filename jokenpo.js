/**
 * Jokenpo game class
 *
 * Holds the entire game data and logic.
 */
var Jokenpo = function() {

  /* Possible choices */
  this.possible_weapons = ['rock', 'paper', 'scissors'];

  /* User weapon */
  this.user_weapon = null;

  /* PC weapon */
  this.pc_weapon = null;


  /**
   * This method is responsible to get the user weapon
   */
  this.getUserWeapon = function() {
    var typed_weapon;

    while (this.possible_weapons.indexOf(typed_weapon) < 0) {
      typed_weapon = this.askUserWeapon();

      if (this.possible_weapons.indexOf(typed_weapon) < 0) {
        alert("You chose a wrong weapon.");
      }
    }

    this.user_weapon = typed_weapon;
  }

  /**
   * This method is responsible to ask user for a valid weapon
   */
  this.askUserWeapon = function() {
    var message = 'CHOICE YOUR WEAPONS [';

    for(input_option in this.possible_weapons) {
      message += this.possible_weapons[input_option];

      if (input_option < (this.possible_weapons.length - 1)) {
        message += '/';
      }
    }

    message += ']:';

    return prompt(message);
  }

  this.writeResults = function(message, win) {
    if (win === true) {
      title_message = "You win! \\o/";
    }
    else if (win === false) {
      title_message = "You lost. :(";
    }
    else {
      title_message = "Wow it's a tie. 0o";
    }

    document.write('<h1>' + title_message + '</h1>');

    document.write('<ul><li>User weapon: <strong>' + this.user_weapon + '</strong></li>');
    document.write('<li>PC weapon: <strong>' + this.pc_weapon + '</strong></li></ul>');

    if (win === false) {
      document.write("<p>I'm sorry man. But you can still try again.</p>");
    }
    else {
      document.write('<p>' + message + '</p>');
    }
    document.write('<p><a href="javascript:window.location.reload();">Play again.</a></p>');
  }

  /**
   * The game itself. It will randomize the weapons and print the results.
   */
  this.doJokenpo = function() {
    this.getUserWeapon();

    // Randomize something between 0 and 1, and multiply it for possible weapons
    this.pc_weapon = this.possible_weapons[Math.floor(Math.random() * this.possible_weapons.length)];

    // Let's go to fight!
    if (this.user_weapon == this.pc_weapon) {
      this.writeResults('You chose the same weapon of PC.');
    }
    else if (this.user_weapon == 'rock') {
      if (this.pc_weapon == 'scissors') {
        this.writeResults("Your rock destroyed the PC's scissors! You really rocks!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
    else if (this.user_weapon == 'paper') {
      if (this.pc_weapon == 'rock') {
        this.writeResults("Your paper just wrJokenpoed the entire rock! You're cool!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
    else if (this.user_weapon == 'scissors') {
      if (this.pc_weapon == 'paper') {
        this.writeResults("Your scissors just cut every paper! You've tore it all!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
  }

  this.doJokenpo();
}
