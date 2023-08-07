import { Queue } from "./Queue";

// Function to play the hot potato game with given players and the number of tosses (num).
// The function returns the list of eliminated players and the winner of the game.
function hotPotato(players: string[], num: number) {
  // Create a new queue and an array to store eliminated players.
  const queue = new Queue();
  const eliminated = [];

  // Enqueue all players into the queue.
  for (let i = 0; i < players.length; i++) {
    queue.enqueue(players[i]);
  }

  // While there is more than one player in the queue (game continues),
  // perform a toss with "num" iterations.
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // Dequeue the front player and immediately enqueue it back,
      queue.enqueue(queue.dequeue());
    }

    // After "num" tosses, the front player is eliminated from the game.
    eliminated.push(queue.dequeue());
  }

  // At the end of the game, only one player remains in the queue, and that player is the winner.
  // Dequeue that player and return the eliminated players along with the winner.
  return {
    eliminated,
    winner: queue.dequeue(),
  };
}

// List of player names.
const names = ['Felipe', 'Bruno', 'Dani', 'Gustavo', 'Voidela', 'Vini', 'Mateus', 'Victor'];

// Generate a random number between 1 and 200 to determine the number of tosses in the game.
const number = Math.floor(Math.random() * (200 - 1)) + 1;

// Play the hot potato game with the given names and number of tosses.
const result = hotPotato(names, number);

// Print the eliminated players.
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the hot potato game`);
});

// Print the winner of the game.
console.log(`The winner was ${result.winner}`);
