<script>
	import WeatherFooter from '../../components/weather-footer.svelte';
	import WeatherIcon from '../../components/weather-icon.svelte';
	import { onMount } from 'svelte';

	import { getWeatherFrom } from '../../services/+weather.js';

	let message = 'Loading...';
	let isLoading = true;

	export let data;
	let obj;
	onMount(async () => {
		try {
			const res = await getWeatherFrom(data.country);
			obj = res;
			isLoading = false;
			// console.log(res);
		} catch (error) {
			// isLoading = true;
			message = 'error';
			console.log(error)
		}
	});
</script>

<section>
	{#if isLoading}
		<p>{message}</p>
	{:else}
		<h2>{obj.locationName}</h2>
		<h1>{obj.country}</h1>
		<h3>{obj.temperature}°</h3>
		<h4>{obj.localtime}</h4>
		<h5>{obj.conditionText}</h5>
		<WeatherIcon text={obj.conditionText} icon={obj.conditionIcon} />
		<WeatherFooter windSpeed={obj.windSpeed} humidity={obj.humidity} feelsLike={obj.feelsLike} />
	{/if}
</section>

<style>
	p {
		font-size: 2rem;
		margin: auto;
		text-align: center;
		position: absolute;
		bottom: 50%;
		left: 0;
		right: 0;
		color: var(--text1);
		font-size: 2.5rem;
	}
	section {
		padding: 16px;
	}
	h1 {
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--text2);
		text-transform: uppercase;
	}
	h2 {
		padding: 16px 0 0;
		font-weight: 500;
		font-size: 1.2rem;
		color: var(--text2);
	}
	h3 {
		font-size: 6rem;
		font-weight: 600;
		color: var(--text1);
	}
	h4 {
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--text2);
	}
	h5 {
		font-size: 1.5rem;
		color: var(--text1);
	}
</style>
