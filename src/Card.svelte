<!-- Card.svelte -->
<script lang="ts">
	type Card = {
		number: string;
		suit: string;
	};
	export let deckLength: number;
	export let cardValue: Card;
	export let handleClick;
	export let currentExcercise: string;
	export let handleReset;

	const suitDic = {
		Espada: '♠',
		Diamante: '♦',
		Corazón: '♥',
		Trébol: '♣',
		Joker: '🤡'
	};

	const getCardNumber = (number: string) => {
		if (number === 'Q' || number === 'K' || number === 'J') {
			return '10';
		}
		if (number === 'A') {
			return '11';
		} else return number;
	};
</script>

{#if cardValue !== undefined}
	<div class="container">
		<p>Do {getCardNumber(cardValue.number)} {currentExcercise}!</p>

		<div class="card">
			<div class="top">
				<div class="icon">
					<div>
						{suitDic[cardValue.suit]}
					</div>
					<div>
						{cardValue.number === '15' ? '' : cardValue.number}
					</div>
				</div>
			</div>
			<div class="mid">
				<div class="icon">
					{suitDic[cardValue.suit]}
				</div>
			</div>
			<div class="bottom">
				<div class="icon">
					<div>
						{suitDic[cardValue.suit]}
					</div>
					<div>
						{cardValue.number === '15' ? '' : cardValue.number}
					</div>
				</div>
			</div>
		</div>

		<button class="button" on:click={handleClick}>Change Card</button>
	</div>
{:else if deckLength === 0}
	<div class="container">
		<p>Let's workout again!</p>
		<div class="initialCard" />
		<button class="button" on:click={handleReset}>Start Over</button>
	</div>
{:else}
	<div class="container">
		<p>Let's workout!</p>
		<div class="initialCard" />
		<button class="button" on:click={handleClick}>Change Card</button>
	</div>
{/if}

<style>
	p {
		font-size: 1.5rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card {
		width: 15rem;
		height: 25rem;
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
		border-radius: 10px;
		margin-bottom: 2rem;
	}
	.initialCard {
		width: 15rem;
		height: 25rem;
		background-color: rgb(129, 196, 255);
		display: flex;
		flex-direction: column;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
		border-radius: 10px;
		margin-bottom: 2rem;
	}
	.top {
		display: flex;
		justify-content: flex-start;
		margin: auto 0;
		margin-top: 0;
		margin-left: 0.2rem;
	}
	.mid {
		display: flex;
		justify-content: center;
		margin: auto 0;
	}
	.bottom {
		display: flex;
		justify-content: flex-end;
		margin: auto 0;
		margin-bottom: 0;
		margin-right: 0.2rem;
	}
	.icon {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		font-size: 2rem;
	}
	.button {
		background-color: #111827;
		border: 1px solid transparent;
		border-radius: 0.75rem;
		box-sizing: border-box;
		color: #ffffff;
		cursor: pointer;
		flex: 0 0 auto;
		font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.5rem;
		padding: 0.75rem 1.2rem;
		text-align: center;
		text-decoration: none #6b7280 solid;
		text-decoration-thickness: auto;
		transition-duration: 0.2s;
		transition-property: background-color, border-color, color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		width: auto;
	}

	.button:hover {
		background-color: #374151;
	}

	.button:focus {
		box-shadow: none;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
</style>
