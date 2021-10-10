let app = new Vue ({
    el: "#app",
    data: {

        /*
        message: "Hello, It's lesson of practise for VueJS!",

        // МАССИВЫ
        items: [ 
            { title: "Apple"},
            {title: "Samsung"} 
            ] */

        storeName: "The Store",
        btn: {
            title: "BUY IT NOW",
            isDark: true
        },

        products: [
            
            {
                title: "Iphone XR",
                price: 750,
                link: "shukrangarayev.ru",
                img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-11-red.png"
            },

            {
                title: "Iphone 11 PRO",
                price: 1000,
                link: "shukrangarayev.ru",
                img: "https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png"
            },

            {
                title: "Iphone 11 Gray 256GB",
                price: 850,
                link: "shukrangarayev.ru",
                img: "https://static-www.o2.co.uk/sites/default/files/iphone-13-blue-sku-header-141021.png"
            }



            ]
    }

    /*
        // ФУНКЦИИ
    methods: {
        cleanMessage: function () {

            this.message = "";
        },

        reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
        }
    } */
});