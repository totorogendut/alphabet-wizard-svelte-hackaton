import dogSprite from "$lib/assets/animals/wolf.webp?enhanced";
import bearSprite from "$lib/assets/animals/bear.webp?enhanced";
import birdSprite from "$lib/assets/animals/eagle.jpg?enhanced";
import snakeSprite from "$lib/assets/animals/snake.jpg?enhanced";
import antSprite from "$lib/assets/animals/ant.jpg?enhanced";

export const animalEnemies: Record<string, EnemyStats> = {
  dog: {
    power: 5,
    regeneration: 0.15,
    health: 150,
    speed: 1.5,
    damage: 30,
    armor: 10,
    size: 4,
    spawn: 2,
    resistance: {
      debuff: 10,
      stun: -10,
      fire: -5,
      cold: 5,
      lightning: 0,
      poison: -15,
      physical: 5,
    },
    sprite: dogSprite,
    type: "animal",
    subType: "dog",
  },
  bear: {
    power: 8,
    regeneration: 0.5,
    health: 200,
    speed: 1,
    damage: 40,
    armor: 15,
    size: 6,
    spawn: 1,
    resistance: {
      debuff: 5,
      stun: 10,
      fire: 0,
      cold: 15,
      lightning: -5,
      poison: 10,
      physical: 7,
    },
    sprite: bearSprite,
    type: "animal",
    subType: "bear",
  },
  snake: {
    power: 3,
    regeneration: 0.7,
    health: 100,
    speed: 1.2,
    damage: 60,
    armor: 5,
    size: 3,
    spawn: 3,
    resistance: {
      debuff: -20,
      stun: -25,
      fire: -10,
      cold: -5,
      lightning: 5,
      poison: 25,
      physical: 3,
    },
    sprite: snakeSprite,
    type: "animal",
    subType: "snake",
  },
  bird: {
    power: 3,
    regeneration: 0.1,
    health: 65,
    speed: 1.7,
    damage: 25,
    armor: 2,
    size: 2,
    spawn: 2,
    resistance: {
      debuff: 0,
      stun: -50,
      fire: 20,
      cold: 30,
      lightning: 0,
      poison: -20,
      physical: 3,
    },
    sprite: birdSprite,
    type: "animal",
    subType: "bird",
  },
};
