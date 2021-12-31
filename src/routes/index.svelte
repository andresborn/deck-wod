<script lang="ts">
	import Card from '../Card.svelte';
	const deck = [
		{ suit: 'Trébol', number: 'A' },
		{ suit: 'Trébol', number: '2' },
		{ suit: 'Trébol', number: '3' },
		{ suit: 'Trébol', number: '4' },
		{ suit: 'Trébol', number: '5' },
		{ suit: 'Trébol', number: '6' },
		{ suit: 'Trébol', number: '7' },
		{ suit: 'Trébol', number: '8' },
		{ suit: 'Trébol', number: '9' },
		{ suit: 'Trébol', number: '10' },
		{ suit: 'Trébol', number: 'J' },
		{ suit: 'Trébol', number: 'Q' },
		{ suit: 'Trébol', number: 'K' },
		{ suit: 'Corazón', number: 'A' },
		{ suit: 'Corazón', number: '2' },
		{ suit: 'Corazón', number: '3' },
		{ suit: 'Corazón', number: '4' },
		{ suit: 'Corazón', number: '5' },
		{ suit: 'Corazón', number: '6' },
		{ suit: 'Corazón', number: '7' },
		{ suit: 'Corazón', number: '8' },
		{ suit: 'Corazón', number: '9' },
		{ suit: 'Corazón', number: '10' },
		{ suit: 'Corazón', number: 'J' },
		{ suit: 'Corazón', number: 'Q' },
		{ suit: 'Corazón', number: 'K' },
		{ suit: 'Espada', number: 'A' },
		{ suit: 'Espada', number: '2' },
		{ suit: 'Espada', number: '3' },
		{ suit: 'Espada', number: '4' },
		{ suit: 'Espada', number: '5' },
		{ suit: 'Espada', number: '6' },
		{ suit: 'Espada', number: '7' },
		{ suit: 'Espada', number: '8' },
		{ suit: 'Espada', number: '9' },
		{ suit: 'Espada', number: '10' },
		{ suit: 'Espada', number: 'J' },
		{ suit: 'Espada', number: 'Q' },
		{ suit: 'Espada', number: 'K' },
		{ suit: 'Diamante', number: 'A' },
		{ suit: 'Diamante', number: '2' },
		{ suit: 'Diamante', number: '3' },
		{ suit: 'Diamante', number: '4' },
		{ suit: 'Diamante', number: '5' },
		{ suit: 'Diamante', number: '6' },
		{ suit: 'Diamante', number: '7' },
		{ suit: 'Diamante', number: '8' },
		{ suit: 'Diamante', number: '9' },
		{ suit: 'Diamante', number: '10' },
		{ suit: 'Diamante', number: 'J' },
		{ suit: 'Diamante', number: 'Q' },
		{ suit: 'Diamante', number: 'K' },
		{ suit: 'Joker', number: '15' },
		{ suit: 'Joker', number: '15' }
	];
	const excercises = [
		{ suit: 'Trébol', excercise: 'Squats' },
		{ suit: 'Corazón', excercise: 'Push Ups' },
		{ suit: 'Diamante', excercise: 'Abs' },
		{ suit: 'Espada', excercise: 'Lunges' },
		{ suit: 'Joker', excercise: 'Burpees' }
	];
	type Card = {
		number: string;
		suit: string;
	};
	let currentCard: Card;
	let currentExcercise: string;

	let deckOnInit = deck;
	const getCard = () => {
		const card = deckOnInit[Math.floor(Math.random() * deckOnInit.length)];

		const cardIndex = deckOnInit.findIndex((c) => c.suit === card.suit && c.number === card.number);
		// Remove card from deck
		deckOnInit = deckOnInit.filter((c, idx) => idx !== cardIndex);
		// Set states
		currentCard = card;
		currentExcercise = excercises.find((e) => e.suit === card.suit).excercise;
	};

	const reset = () => {
		deckOnInit = deck;
	};
</script>

<div class="container">
	<h1>Deck of Cards WOD</h1>
	<Card
		cardValue={currentCard}
		deckLength={deckOnInit.length}
		{currentExcercise}
		handleClick={getCard}
		handleReset={reset}
	/>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
	}
</style>
