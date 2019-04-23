import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'
import Portfolio from './components/Portfolio.vue'

export const routes = [
    {path : '' , component : Home},
    {path : '/Stocks', component : Stocks},
    {path : '/Portfolio' , component : Portfolio}
];