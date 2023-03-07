<script>
	import { onMount } from 'svelte';

	let link = 'auto%3Aip';

	function handleLink(event) {
		link = event.target.value.toLowerCase()
	}
	function handleKey(event) {
		if (event.key === 'Enter') {
			window.location.replace(`/${link}`);
		}
	}
	onMount(() => {
		try {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(async (position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					const response = await fetch(
						`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
					);
					const data =await  response.json();
					const country = data.countryName.toLowerCase()
					console.log(country);
					link = country
				});
			} else {
				console.log('La geolocalización no es compatible con este navegador.');
			}
		} catch (error) {
			message = 'error';
		}
	});
</script>

<div>
	<h2>Busca el clima de tu pais!</h2>
	<section>
		<input type="text" placeholder="pais" on:input={handleLink} on:keydown={handleKey} />
		<a href={link}> buscar </a>
	</section>
</div>

<style>
	div {
		display: grid;
		padding: 50px;
		place-content: center;
		height: 100%;
	}
	h2 {
		margin-bottom: 50px;
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		color: var(--text1);
	}
	section {
		width: 100%;
		/* background-color: red; */
		display: grid;
		transition: box-shadow, 0.4s;
		/* background-color: var(--fill1); */
	}

	input {
		padding: 10px;
		border-radius: 5px 5px 0 0;
		outline: none;
		border: var(--border1);
		font-size: 1rem;
		background-color: var(--fill2);
		color: var(--text2);
		font-weight: 500;
	}
	a {
		text-align: center;
		border: var(--border1);
		border-top: none;
		background-color: var(--fill1);
		font-size: 1rem;
		text-decoration: none;
		border-radius: 0 0 5px 5px;
		color: #666;
		font-weight: 700;
		/* width: 100%; */
		padding: 10px;
		text-transform: uppercase;
		transition: color, background, 0.4s;
	}
	a:hover {
		background-color: var(--fill3);
		color: var(--text1);
	}
	section:hover {
		box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
	}
</style>
