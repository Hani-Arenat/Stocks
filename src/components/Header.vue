<template>
    <div class="container">
        <div class="Menu">
            <ul>
                <li><span><router-link style="text-decoration: none;" to="/">Stock Trader</router-link></span></li>
                <li><router-link style="text-decoration: none;" to="/Portfolio">Portfolio</router-link></li>
                <li><router-link style="text-decoration: none;" to="/Stocks">Stocks</router-link></li>
            </ul>
            <ul class="secondMenu">
                <li class="hovering" @click="endDay">End day</li>
                <li class="hovering" @click="saveData">Save Data</li>
                <li class="hovering" @click="loadData">Load Data</li>
                <li>Funds : ${{funds}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  
    computed : {
        funds(){
            return this.$store.state.funds;
        },
        bmw_price(){
            return this.$store.state.bmw_price;
        },
        google_price(){
            return this.$store.state.google_price;
        },
        yahoo_price(){
            return this.$store.state.yahoo_price;
        },
        apple_price(){
            return this.$store.state.apple_price;
        },
        bmw_q(){
            return this.$store.state.bmw_q;
        },
        google_q(){
            return this.$store.state.google_q;
        },
        yahoo_q(){
            return this.$store.state.yahoo_q;
        },
        apple_q(){
            return this.$store.state.apple_q;
        },
    },

    methods : {
        randomGenerator(){
            let num = Math.floor(Math.random()*20) + 1;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            return num;
        },
        endDay(){
            console.log(this.randomGenerator())

            if(this.$store.state.bmw_price < 20){
                    this.$store.state.bmw_price += 20; 
            }
             if(this.$store.state.google_price < 20){
                    this.$store.state.google_price += 20; 
            }
             if(this.$store.state.yahoo_price < 20){
                    this.$store.state.yahoo_price += 20; 
            }
             if(this.$store.state.apple_price < 20){
                    this.$store.state.apple_price += 20; 
            }

            this.$store.state.bmw_price += this.randomGenerator(); 
            this.$store.state.google_price += this.randomGenerator(); 
            this.$store.state.yahoo_price += this.randomGenerator(); 
            this.$store.state.apple_price += this.randomGenerator(); 

        },
      
        saveData(){
            
            this.$http.put('https://final-project-122.firebaseio.com/data.json',
                [
                    {bmw_price : this.bmw_price},
                    {google_price : this.google_price},
                    {yahoo_price : this.yahoo_price},
                    {apple_price : this.apple_price},
                    {bmw_q : this.bmw_q},
                    {google_q : this.google_q},
                    {yahoo_q : this.yahoo_q},
                    {apple_q : this.apple_q},
                ])
                .then( resp => {
                    console.log(resp.status + '  ' + resp.statusText)
                }).catch(error => {
                    console.log('error')
                });
        },
        refreshData(s , n){
               
               if(s == 'bmw_price')
               {
                   this.$store.state.bmw_price = n

               }else if(s == 'google_price') {
                   this.$store.state.google_price = n

               }else if(s == 'yahoo_price') {
                   this.$store.state.yahoo_price = n

               }else if(s == 'apple_price') {
                   this.$store.state.apple_price = n

               }else if(s == 'bmw_q') {
                   this.$store.state.bmw_q = n

               }else if(s == 'google_q') {
                   this.$store.state.google_q = n

               }else if(s == 'yahoo_q') {
                   this.$store.state.yahoo_q = n

               }else if(s == 'apple_q') {
                   this.$store.state.apple_q = n

               }
        },
        loadData(){
            
            this.$http.get('https://final-project-122.firebaseio.com/data.json')
                .then( resp => {
                    const arr = Object.values(resp.data)
                    console.log(arr)
                   
                    for(let r in arr){
                       this.refreshData(Object.keys(arr[r]).toString() , Number(Object.values(arr[r])));
                    } 
                    
                }).catch(error => {
                    console.log(error.message)
                });
        }
    }
}
</script>

<style scoped>
    ul {
        display: inline;
        font-family: 'arial';
        font-weight: bold;
        text-decoration: blink;
    }
    ul li {
        display: inline;
        margin: 0px 12px 0px 0px;
        
    }
    .secondMenu {
        margin-left: 700px;
        
    }
    .Menu {
        border : 1px solid black;
        padding: 10px 5px 10px 5px;
        background-color: #ededf8;
    }
    span {
        font-weight: bolder;
        font-size: 22px;
    }
    .hovering:hover{
        cursor: pointer;
        color: blue;
    }
   

</style>
