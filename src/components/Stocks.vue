<template>
    <div>
        <div class="two">
                <div class="three">
                    BMW <span>(price : {{bmw_price}})</span> <br><br><br><br>
                    <input type="text" placeholder="number of items" v-model="bmw_number">
                    <button @click="bmw_Buy">Buy</button>
                </div>
                <div class="three">
                    Google <span>(price : {{google_price}})</span> <br><br><br><br>
                    <input type="text" placeholder="number of items" v-model="google_number">
                    <button @click="google_Buy">Buy</button>
                </div>
            </div>
            <div class="two">
                <div class="three">
                    Yahoo <span>(price : {{yahoo_price}})</span> <br><br><br><br>
                    <input type="text" placeholder="number of items" v-model="yahoo_number">
                    <button @click="yahoo_Buy">Buy</button>
                </div>
                <div class="three">
                    Apple <span>(price : {{apple_price}})</span> <br><br><br><br>
                    <input type="text" placeholder="number of items" v-model="apple_number">
                    <button @click="apple_Buy">Buy</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    computed : {
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
        }
        
    },
    data(){
        return {
            bmw_number : '',
            google_number : '',
            yahoo_number : '',
            apple_number : ''
        }
    },
    methods : {
        
        isNumeric(n){
                    
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        wrongNumber(value) {
             if(this.isNumeric(value))
                {
                    if(Number(value) > 0)
                    {
                        return true
                    }else{
                        return false
                    }
                    
                }else {
                    return false;
                }
        },
       bmw_Buy(){
           let total_price = (Number(this.bmw_number) * this.bmw_price);
           
           if(this.wrongNumber(this.bmw_number))
           {
               if(total_price > this.$store.state.funds)
                {
                    alert('Sorry .. your fund not enough, you can try another product or reduce the quantity!!')
                    this.bmw_number = '';
                }else {
                    this.$store.state.bmw_q += Number(this.bmw_number);
                    this.$store.state.funds -= (Number(this.bmw_number) * this.bmw_price)
                    this.bmw_number = '';
                }

           }else{
                    alert('please enter number ... greater then 0 !');
                    this.bmw_number = '';
           }
       },
       google_Buy(){
           let total_price = (Number(this.google_number) * this.google_price);
           
           if(this.wrongNumber(this.google_number))
           {
                if(total_price > this.$store.state.funds)
                {
                    alert('Sorry .. your fund not enough, you can try another product or reduce the quantity!!')
                    this.google_number = '';
                }else {
                    this.$store.state.google_q += Number(this.google_number);
                    this.$store.state.funds -= (Number(this.google_number) * this.google_price)
                    this.google_number = '';
                }
           }else{
                    alert('please enter number ... greater then 0 !');
                    this.google_number = '';
           }
       },
       yahoo_Buy(){
           let total_price = (Number(this.yahoo_number) * this.yahoo_price);
           
           if(this.wrongNumber(this.yahoo_number))
           {
                if(total_price > this.$store.state.funds)
                {
                    alert('Sorry .. your fund not enough, you can try another product or reduce the quantity!!')
                    this.yahoo_number = '';
                }else {
                    this.$store.state.yahoo_q += Number(this.yahoo_number);
                    this.$store.state.funds -= (Number(this.yahoo_number) * this.yahoo_price)
                    this.yahoo_number = '';
                }
           }else{
                    alert('please enter number ... greater then 0 !');
                    this.yahoo_number = '';
           }
       },
       apple_Buy(){
           let total_price = (Number(this.apple_number) * this.apple_price);
           
           if(this.wrongNumber(this.apple_number))
           {
                if(total_price > this.$store.state.funds)
                {
                    alert('Sorry .. your fund not enough, you can try another product or reduce the quantity!!')
                    this.apple_number = '';
                }else {
                    this.$store.state.apple_q += Number(this.apple_number);
                    this.$store.state.funds -= (Number(this.apple_number) * this.apple_price)
                    this.apple_number = '';
                }
           }else{
                    alert('please enter number ... greater then 0 !');
                    this.apple_number = '';
           }
       }
    }
}
</script>

<style scoped>
    .two{
        width: 100%;
        display: inline-flex;

    }
    .three {
        border : 2px solid black;
        width: 50%;
        height: 160px;
        margin: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
    }

    input {
        width: 280px;
        height: 20px;
        border: 2px solid #3853ca;
    }
    button {
        margin-left:50px;
        width: 80px;
        height: 32px;
        font-size: large;
        font-weight: bolder;
        color: #421bb4;
    }
</style>