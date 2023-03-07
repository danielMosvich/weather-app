<script>
    export let windSpeed;
    export let humidity;
    export let feelsLike;
</script>
<footer>
    <div>
        <span>{humidity}%</span>
        <strong>Humidity</strong>
    </div>

    <div>
        <span>{windSpeed} km/h</span>
        <strong>Wind Speed</strong>
    </div>
    
    <div>
        <span>{feelsLike}°</span>
        <strong>Feels Like</strong>
    </div>

</footer>

<style>
    footer{
        border: var(--border1);
        padding: 24px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        bottom: 32px;
        left: 0;
        right: 0;
    }
    span{
        display: block;
        font-weight: 700;
        color:var(--text1);
    }
    strong{
        font-size: 14px;
        color:var(--text2);
        font-weight: 500;
    }
</style>