const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCart() {
            this.cart.pop()
        }
    },
}) 