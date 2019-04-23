<template>
    
        <div class="parent">
            <h1>Trade or View Your Portfolio</h1>
            <p>you may save &amp; laod your data</p>
            <p>click on 'End Day' to begin new Day!</p>
            <hr>
            <h2>Your Funds is : ${{ funds }}</h2>
        </div>
        
    
</template>

<script>
export default {
    computed : {
        funds() {
            return this.$store.state.funds;
        }
    }
}
</script>

<style scoped>
    .parent{
        border : 1px solid black;
        margin-top: 40px;
        font-family: 'arial';
    }
    h1,p,h2 {
        margin-left: 40px;
    }
    p{
        font-weight: bolder;
    }

    .one {
        border : 1px solid red;
        width: 100%;
        height : 700px;
    }
    
</style>