var product = [
    {
        id: "Man01",
        name: "Áo vest xanh",
        img: "man1.png",
        price_sale: 200.000,
        price: 150.000,
    },
    {
        id: "Man02",
        name: "Áo thun tay ngắn",
        img: "man2.png",
        price_sale: 180.000,
        price: 130.000,
    },
    {
        id: "Man03",
        name: "Quần túi hộp Kaki",
        img: "man3.png",
        price_sale: 220.000,
        price: 190.000,
    },
    {
        id: "Man04",
        name: "Quần dài Kaki",
        img: "man4.png",
        price_sale: 190.000,
        price: 160.000,
    },
    {
        id: "Man05",
        name: "Áo khoác Kaki",
        img: "man5.png",
        price_sale: 150.000,
        price: 120.000,
    },
    {
        id: "Man06",
        name: "Áo khoác Jumper",
        img: "man6.png",
        price_sale: 300.000,
        price: 250.000,
    },
    {
        id: "Man07",
        name: "Áo phông POLO",
        img: "man7.png",
        price_sale: 200.000,
        price: 200.000,
    },
    {
        id: "Man08",
        name: "Áo tay dài POLO",
        img: "man8.png",
        price_sale: 180.000,
        price: 120.000,
    },
    {
        id: "Man09",
        name: "Quần Short Jean",
        img: "man9.png",
        price_sale: 150.000,
        price: 120.000,
    },
    {
        id: "Man10",
        name: "Áo khoác Nam",
        img: "man10.png",
        price_sale: 300.000,
        price: 250.000,
    },
    {
        id: "Man11",
        name: "Áo sơ mi",
        img: "man11.png",
        price_sale: 200.000,
        price: 200.000,
    },
    {
        id: "Man12",
        name: "Áo khoác Versace",
        img: "man12.png",
        price_sale: 180.000,
        price: 120.000,
    },
];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('manProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('manProduct'));
} 

// Xoá dữ liệu trên localStorage
// localStorage.clear();

// print to html
if (localStorage.getItem("manProduct") != null) {
    load();
}
if (localStorage.getItem("manProduct") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">'+ data.name +'</h5>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';

        document.getElementById("productsMan").innerHTML += listProduct;
    }
    Save();
}
listLocal();

var countProduct = function() {
    var count = 0, i = 0;
    for(var i in product) {
        count++;
        i++;
    }
    document.getElementById("countProductMan").innerHTML = count + " sản phẩm";
}
countProduct();

