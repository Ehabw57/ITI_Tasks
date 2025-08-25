# The SOLID Principle
It is a set of five **object-oriented** programming principles introduced by Robert Martin or know as  Uncle Bob).
They do help the code to be more flexible , mintainable and scalable.

## So what dos the  D stands for?
It stands for Dependency inversion which mean that we should seprate high level classes that depends on other low level ones from each other by using an abstraction class.

### What the hell does this mean ?
Okay to understand this better lets first implement a code that doesn't follow the, imagine we have a class `Game`
this class depends on tow other subclassed `Player` and `Enemey` the depends on both of these subclasses so we can just instantiate both of them in out `Game constructor()` 
```js
class Player {
  attack() {
    console.log('Player is attacking')
  }
}
class Enemy {
  attack() {
    console.log('Enemy is attacking')
  }
}
class Game {
  constructor() {
    this.attacker = new Player()
  }
}
const game = new Game()
game.attacker.attack()

```
This is not the best way to do this, if you want to switch from **player** to **enemy**  you must return and modify the game constructor which makes a lot of effort on scalable systems, this is a hard coded style.

## Using the DI principle
to apply the DI principle we need to make an abstraction class that will take his attacker as a constructor parameter like below
```js
class Player {
  attack() {
    console.log('Player is attacking')
  }
}

class Enemy {
  attack() {
    console.log('Enemy is attacking')
  }
}

class Game {
  constructor(attacker) {
    this.attacker = attacker  
  }

  start() {
    this.attacker.attack()
  }
}

const game1 = new Game(new Player())
game1.start()
const game2 = new Game(new Enemy())
game2.start() 
```

## Dependency  inversion vs injection
I didn't get it at first but,  is this the same idea as Dependency injection design pattern??
well actaully no both are diffrent things but they serve the same purpose.
#### key diffrences
| key | Dependency Inversion principle (DIP) | Dependency injection (DI) |
|----------|----------|----------|
| what?   | a principle (guideline in SOLID)     |  a design pattern/technique
| Purpose   | what you depend on   | how you apply it
think of it as the the DIP is the concept and the DI is how you apply it in code or DIP is the guide line and DI is how you implement it 

**Thank you, Best wishes Ehab Abdelrady**
 
