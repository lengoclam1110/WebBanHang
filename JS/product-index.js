var product = [
    {
        id: "Woman01",
        name: "Áo vest dạ",
        img: "female1.png",
        price_sale: 180.000,
        price: 120.000,
    },
    {
        id: "Woman02",
        name: "Chân váy dây rút",
        img: "female2.png",
        price_sale: 180.000,
        price: 130.000,
    },
    {
        id: "Woman03",
        name: "Đầm(A) tay lững",
        img: "female3.png",
        price_sale: 220.000,
        price: 190.000,
    },
    {
        id: "Woman04",
        name: "Set Vest da bò",
        img: "female4.png",
        price_sale: 190.000,
        price: 160.000,
    },
    {
        id: "Woman05",
        name: "Chân váy Jeans",
        img: "female5.png",
        price_sale: 150.000,
        price: 120.000,
    },
    {
        id: "Woman06",
        name: "Áo khoác Da",
        img: "female6.png",
        price_sale: 300.000,
        price: 250.000,
    },
    {
        id: "Woman07",
        name: "Áo khoác Dạ",
        img: "female7.png",
        price_sale: 200.000,
        price: 200.000,
    },
    {
        id: "Woman08",
        name: "Áo Croptop",
        img: "female8.png",
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
    localStorage.setItem('femaleProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('femaleProduct'));
} 

// Xoá dữ liệu trên localStorage
// localStorage.clear();

// print to html
if (localStorage.getItem("femaleProduct") != null) {
    load();
}
if (localStorage.getItem("femaleProduct") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="item">';
        listProduct += '<a href="#">';
        listProduct += '<div class="card">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<a><img class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'" src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<a class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'"><h5 class="name">'+ data.name +'</h5></a>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</div>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';

        document.getElementById("item").innerHTML += listProduct;
    }
    Save();
}
listLocal();

