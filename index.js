var myApp = new Vue(
    {
        el: "#app",
        data: {clicks: 5, total: 0, itemsOrdered: 0,
        items :
        [
            {name: 'Hair Cut', desc : 'A dapper hair cut to help you look your best while being the best', quantity: 10, ordered : 0, price : 10 , imgSrc : 'images/haircut.jpg'},
            {name: 'Beard Trim', desc : 'A dapper beard trim to help you tame your wild mane with style and class', quantity: 12, ordered : 0, price : 5, imgSrc : 'images/trim.jpg'},
            {name: 'Hot Towel', desc : 'A dapper hot towel to help you relax for the day ahead while feeling awesome', quantity: 20, ordered : 0, price : 3, imgSrc : 'images/towel.jpg'},
            {name: 'Warm Shave', desc : 'Im sorry the weight of being a man was too much for you to bare, maybe next time', quantity: 20, ordered : 0, price : 5, imgSrc : 'images/shave.jpg'},
            {name: 'Manly Cologne', desc : 'A dapper scent of wood and musk to add to you charm to your daily scent', quantity: 25, ordered : 0, price : 2, imgSrc : 'images/colonge.jpg'},
            {name: 'Shoe Shine', desc : 'A dapper shoe shie to help you look your best as you walk around town', quantity: 15, ordered : 0, price : 3, imgSrc : 'images/shine.jpg'},
            {name: 'Beard Styling', desc : 'A dapper style for your most manly facial feature from one of our top stylest', quantity: 5, ordered : 0, price : 20, imgSrc : 'images/style.jpg'},
            {name: 'Hair Wash', desc : 'A dapper shampoo and condition for your head to help you feel your best', quantity: 10, ordered : 0, price : 10, imgSrc : 'images/wash.jpg'},
            {name: 'Manly Facial', desc : 'A dapper facial made from manly ingrediants so you dont fell like a sissy', quantity: 5, ordered : 0, price : 8, imgSrc : 'images/face.jpg'}
        ]
            
        },
        methods : {addItem(item){ if (item.quantity > 0){item.quantity--; item.ordered++; item.total += item.price;  this.total += item.price; this.itemsOrdered++}},
                removeItem(item){ if (item.ordered > 0){item.quantity++; item.ordered--; item.total -= item.price;  this.total -= item.price; this.itemsOrdered--}}}

    }
)
