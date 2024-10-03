var room = [
    {
        id: "RM1",
        name: "Deluxe Room",
        img: "room1.png",
        price: 150, // Adjusted price in USD
    },
    {
        id: "RM2",
        name: "Suite Room",
        img: "room2.png",
        price: 250, // Adjusted price in USD
    },
    {
        id: "RM3",
        name: "Executive Room",
        img: "room3.png",
        price: 300, // Adjusted price in USD
    },
    {
        id: "RM4",
        name: "Standard Room",
        img: "room4.png",
        price: 200, // Adjusted price in USD
    },
    {
        id: "RM5",
        name: "Family Room",
        img: "room5.png",
        price: 400, // Adjusted price in USD
    },
    {
        id: "RM6",
        name: "Presidential Suite",
        img: "room6.png",
        price: 500, // Adjusted price in USD
    },
    {
        id: "RM7",
        name: "Luxury Suite",
        img: "room7.png",
        price: 350, // Adjusted price in USD
    },
    {
        id: "RM8",
        name: "Penthouse",
        img: "room8.png",
        price: 450, // Adjusted price in USD
    },
];
// đẩy mảng room vào local
function Save(){
    localStorage.setItem('listRoom', JSON.stringify(room));
}

// lấy sản phẩm 
function load(){
    room = JSON.parse(localStorage.getItem('listRoom'));
} 

// xuất sản phẩm ra html
if (localStorage.getItem("listRoom") != null) {
    load();
}
Save();

var listLocal = function(){
    var listroom = "";
    for (var i in room){
        var data = JSON.parse(JSON.stringify(room[i]));
        var listroom = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listroom += '<div class="card room p-2" styte="width:auto">'; 
        listroom += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listroom += '<div class="card-title room-title text-center h5" >' + data.name + '</div>';
        listroom += '<div class="price text-center h6">' + data.price + '₫</div>';
        listroom += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listroom += '<a>';
        listroom += '<i class="fas fa-cart-plus"></i>';
        listroom += '</a>';
        listroom += '</span>';
        listroom += '</div>';
        listroom += '</div>';

        document.getElementById("banchay").innerHTML += listroom;
    }
    Save();
}

listLocal();
