<template>
   <div>
       <div>
            <div class="two">
                <div class="three" v-show="bmw_act">
                        BMW <span>(price : {{bmw_price}} | Quantity : {{bmw_q}})</span> <br><br><br><br>
                        <input type="number" min="0" placeholder="Quantity" v-model="bmw_sell_number">
                        <button @click="sell_bmw">Sell</button>
                </div>
                <div class="three" v-show="google_act">
                        Google <span>(price : {{google_price}} | Quantity : {{google_q}})</span> <br><br><br><br>
                        <input type="number" min="0" placeholder="Quantity" v-model="google_sell_number">
                        <button @click="sell_google">Sell</button>
                </div>
            </div>
            <div class="two">
                <div class="three" v-show="yahoo_act">
                        Yahoo <span>(price : {{yahoo_price}} | Quantity : {{yahoo_q}})</span> <br><br><br><br>
                        <input type="number" min="0" placeholder="Quantity" v-model="yahoo_sell_number">
                        <button @click="sell_yahoo">Sell</button>
                </div>
                <div class="three" v-show="apple_act">
                        Apple <span>(price : {{apple_price}} | Quantity : {{apple_q}})</span> <br><br><br><br>
                        <input type="number" min="0" placeholder="Quantity" v-model="apple_sell_number">
                        <button @click="sell_apple">Sell</button>
                </div>
            </div>
        </div>

        <div v-show="products">
            <p class="empty"> Opps .. You have no Products!!</p>
        </div>
   </div>
</template>

<script>
export default {
    computed : {
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
        bmw_act(){
            if(this.bmw_q > 0)
                return true
            else return false
        },
        google_act(){
            if(this.google_q > 0)
                return true
            else return false
        },
        yahoo_act(){
            if(this.yahoo_q > 0)
                return true
            else return false
        },
        apple_act(){
            if(this.apple_q > 0)
                return true
            else return false
        },
    },
    data(){
        return {
            bmw_sell_number : '',
            google_sell_number : '',
            yahoo_sell_number : '',
            apple_sell_number : '',
            products : true
        }
    },
    methods : {
        sell_bmw(){
            if(Number(this.bmw_sell_number) > this.$store.state.bmw_q)
            {
                this.$store.state.funds += this.$store.state.bmw_q * this.bmw_price
                this.$store.state.bmw_q = 0;
                this.bmw_sell_number = ''   
            }else {
                this.$store.state.bmw_q -= Number(this.bmw_sell_number);
                this.$store.state.funds += Number(this.bmw_sell_number) * this.bmw_price
                this.bmw_sell_number = ''
            }
        },
        sell_google(){
            if(Number(this.google_sell_number) > this.$store.state.google_q)
            {
                this.$store.state.funds += this.$store.state.google_q * this.google_price
                this.$store.state.google_q = 0;
                this.google_sell_number = ''
            }else {
                this.$store.state.google_q -= Number(this.google_sell_number);
                this.$store.state.funds += Number(this.google_sell_number) * this.google_price
                this.google_sell_number = ''
            }
        },
        sell_yahoo(){
            if(Number(this.yahoo_sell_number) > this.$store.state.yahoo_q)
            {
                this.$store.state.funds += this.$store.state.yahoo_q * this.yahoo_price
                this.$store.state.yahoo_q = 0;
                this.yahoo_sell_number = ''
            }else {
                this.$store.state.yahoo_q -= Number(this.yahoo_sell_number);
                this.$store.state.funds += Number(this.yahoo_sell_number) * this.yahoo_price
                this.yahoo_sell_number = ''
            }
        },
        sell_apple(){
            if(Number(this.apple_sell_number) > this.$store.state.apple_q)
            {
                this.$store.state.funds += this.$store.state.apple_q * this.apple_price
                this.$store.state.apple_q = 0;
                this.apple_sell_number = ''
            }else {
                this.$store.state.apple_q -= Number(this.apple_sell_number);
                this.$store.state.funds += Number(this.apple_sell_number) * this.apple_price
                this.apple_sell_number = ''
            }
        }
    },
    mounted(){
        if(this.bmw_q > 0 || this.google_q > 0 || this.yahoo_q > 0 || this.apple_q > 0)
        {
            this.products = false;
        }else {
            this.products = true;
        }
    },
    updated(){
        if(this.bmw_q > 0 || this.google_q > 0 || this.yahoo_q > 0 || this.apple_q > 0)
        {
            this.products = false;
        }else {
            this.products = true;
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
        width: 45%;
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
    .empty{
        font-size: 40px;
        text-align: center;
        margin-top: 100px;

    }
</style>