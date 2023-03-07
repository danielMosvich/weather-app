<div>
	<slot />
	<a href="/"
		><button
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
				/>
			</svg></button
		></a
	>
</div>

<style>
	:root {
		--fill1: #fff;
		--fill2: #fdfdfd;

		--text1: #272727;
		--text2: #494848;
		--text3: #555;

		--border1: 1px solid rgba(0, 0, 0, 0.2);
		
		--box-shadow1: 0 0 100px rgba(0, 0, 0, 0.1);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--fill1: #161616;
			--fill2: #0a0a0a;
			--fill3: #444444;
			
			--text1: rgb(236, 235, 235);
			--text2: #bbbaba;
			--text3: #969696;
			
			--border1: 1px solid rgba(250, 250, 250, 0.2);
		}
	}
	:global(body) {
		/* box-sizing: border-box; */
		background-color: var(--fill2);
		display: grid;
		place-content: center;
		min-height: 100vh;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		margin: 0;
		padding: 0;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}
	:global(*, *::after, *:before) {
		box-sizing: border-box;
	}
	div {
		aspect-ratio: 9 / 16;
		width: 400px;
		max-width: 100%;
		display: block;
		background-color: var(--fill1);
		box-shadow: var(--box-shadow1);
		border-radius: 8px;
		position: relative;
	}
	@media (max-width:500px){
		div{
			/* aspect-ratio: initial; */
			width: 100vw;
			height: 100vh;
			border-radius: 0;
		}
	}
	button {
		background-color: var(--fill1);
		color: var(--text1);
		display: flex;
		padding: 10px;
		border-radius: 5px;
		border: var(--border1);
		font-size: 1rem;
		position: absolute;
		top: 30px;
		right: 30px;
	}
	svg {
		width: 20px;
	}
</style>
