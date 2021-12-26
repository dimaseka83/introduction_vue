app.component('review-form', {
    template:
    /*html*/
    `    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input type="text" name="" id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select name="" id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="questions">Would you recommend this product? </label>
        <textarea id="questions" v-model="questions"></textarea>

        <input type="submit" class="button" value="submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            questions: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.name === null || this.review === '' || this.rating === null || this.questions === null) {
                alert('Review is incomplete. Please fill out every field')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                questions: this.questions
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null,
            this.questions = ''
        }
    },
})