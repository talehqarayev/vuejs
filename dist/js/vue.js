let app = new Vue ({
    el: "#app",
    data: {
        message: "Hello, It's lesson of practise for VueJS!"
    },
    methods: {
        cleanMessage: function () {

            this.message = "";
        },

        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});