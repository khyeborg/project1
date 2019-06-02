class Pokemon {

	constructor(name, attack, defense, health, type) {
		// assign values to the properties of each Pokemon
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.health = health;
		this.type = type;
		this.initialHelath = health;
	}

	// the takeDamage method
	takeDamage(damage) {
		this.health -= damage;

		// if health of Pokemon goes below 0
		if (this.health < 0) {
			this.health = 0;
		}
	}

	// the attackOpponent method
	attackOpponent(opponent) {
		// calculate decrease in health
		var healthDecrease = this.attack - opponent.defense;

		// make sure decrease in health is at least 1
		if (healthDecrease < 1) {
			healthDecrease = 1;
		}

		// have the opponent Pokemon take the damage
		opponent.takeDamage(healthDecrease);
	}

	// the display method 
	display() {
		// generate the proper string and return it
		return this.name.toUpperCase() + " (" + this.type.toUpperCase() + ") " + this.health + "/" + this.initialHelath;
	}
	
}

