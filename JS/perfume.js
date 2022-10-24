var product = [
    {
        id: "Perfume01",
        name: "Nước hoa CK Beauti",
        img: "Perfume1.png",
        price_sale: 200.000,
        price: 150.000,
    },
    {
        id: "Perfume02",
        name: "Nước hoa Valentino",
        img: "Perfume2.png",
        price_sale: 180.000,
        price: 130.000,
    },
    {
        id: "Perfume03",
        name: "Nước hoa CK Eternity",
        img: "Perfume3.png",
        price_sale: 220.000,
        price: 190.000,
    },
    {
        id: "Perfume04",
        name: "Nước hoa Versace Pour",
        img: "Perfume4.png",
        price_sale: 190.000,
        price: 160.000,
    },
    {
        id: "Perfume05",
        name: "Nước hoa CK Eternity",
        img: "Perfume5.png",
        price_sale: 150.000,
        price: 120.000,
    },
    {
        id: "Perfume06",
        name: "Nước hoa Valentia",
        img: "Perfume6.png",
        price_sale: 300.000,
        price: 250.000,
    },
    {
        id: "Perfume07",
        name: "Nước hoa Versace",
        img: "Perfume7.png",
        price_sale: 350.000,
        price: 290.000,
    },
    
];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('perfume', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('perfume'));
} 

// print to html
if (localStorage.getItem("perfume") != null) {
    load();
}
if (localStorage.getItem("perfume") == null) {
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

        document.getElementById("products").innerHTML += listProduct;
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
    document.getElementById("countProductPerfume").innerHTML = count + " sản phẩm";
}
countProduct();


// Xoá dữ liệu trên localStorage
// localStorage.clear();