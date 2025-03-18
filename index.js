Vue.createApp({
    data() {
        return {
            name: "Jais",
            age: 40,
            atWork: true,
            book: {
                title: "MyBook",
                price: 9.85,
                },
                todolist:[
                    "male","gøre rent","handle ind","lave mad"
                ],
                books:[
                    {title:"MyBook",price:9.85},
                    {title:"MyBook2",price:10.85},
                    {title:"MyBook3",price:11.85},
                ]
            
        }
    },
    methods: {
        save(word) {
           
        }
    }
}).mount("#app")