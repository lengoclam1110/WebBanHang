
var user =
[
    {
        id: "USER1",
        username: "admin",
        name: "Lê Ngọc Lâm",
        sdt: "0924624326",
        email: "ngoclam2019mt@gmail.com",
        address: "Hàm Thuận Nam",
        password: "1",
        role: "admin"

    },
    {
        id: "USER2",
        username: "lam",
        name: "ngoc lam",
        sdt: "0234567892",
        email: "lam@gmail.com",
        address: "Bình Thuận",
        password: "abc123",
        role: "user"

    },
    {
        id: "USER3",
        username: "ngoclam",
        name: "LÂM",
        sdt: "0123456789",
        email: "LAM@gmail.com",
        address: "PPhan Thiết",
        password: "abc123",
        role: "user"
    }

];

// đẩy mảng user vào local
var saveUser =function (){
    localStorage.setItem('listUser',JSON.stringify(user))
}
//lấy list user 
var loadUser = function(){
    user = JSON.parse(localStorage.getItem('listUser'))
}
if (localStorage.getItem("listUser")!=null){
   loadUser();
}
saveUser();

// Xoá dữ liệu trên localStorage
// localStorage.clear();

// chức năng đăng kí
var checkSignin = function(){
    if ((document.getElementById("hotend").value=="")){
        $(".require-name").css("display","block");
    }else{
        $(".require-name").css("display","none");
    }
    if ((document.getElementById("usernamed").value=="")){
        $(".require-username").css("display","block");
    }else{
        $(".require-username").css("display","none");
    }
    if ((document.getElementById("passwordd").value=="")){
        $(".require-password").css("display","block");
    }else{
        $(".require-password").css("display","none");
    }
    if ((document.getElementById("pass").value==0)){
        $(".require-pass").css("display","block");
    }
    else{
        $(".require-pass").css("display","none");
    }
    if ((document.getElementById("sdtd").value=="")){
        $(".require-sdt").css("display","block");
    }
    else{
        $(".require-sdt").css("display","none");
    }
    if ((document.getElementById("emaild").value=="")){
        $(".require-email").css("display","block");
    }
    else{
        $(".require-email").css("display","none");
    }
    if ((document.getElementById("addressd").value=="")){
        $(".require-address").css("display","block");
    }
    else{
        $(".require-address").css("display","none");
    }
    if ((document.getElementById("hotend").value!="")
        &&(document.getElementById("usernamed").value!="")
        &&(document.getElementById("passwordd").value!="")
        &&(document.getElementById("pass").value!="")
        &&(document.getElementById("sdtd").value!="")
        &&(document.getElementById("emaild").value!="")
        &&(document.getElementById("addressd").value!="")
        ){
        signIn();
   }
}

var signIn = function (){
    var User = {
        id: "USER"+parseInt(user.length+1),
        username: document.getElementById("usernamed").value,
        name: document.getElementById("hotend").value,
        sdt : document.getElementById("sdtd").value,
        password:  document.getElementById("passwordd").value,
        email:  document.getElementById("emaild").value,
        address:  document.getElementById("addressd").value,
        avatar: "avt.png",
        role : "user",
    }
    alert("Đăng kí thành công");
    user.push(User);
    localStorage.setItem('listUser',JSON.stringify(user));
    window.location.reload();
    window.location.href = './login.html';
}

// Xoá dữ liệu trên localStorage
// localStorage.clear();

var signupArr = [];
var saveLogin =function (){
    localStorage.setItem('signup',JSON.stringify(signupArr))
}
     
var loadLogin = function(){
    signupArr = JSON.parse(localStorage.getItem('signup'))
}
if (localStorage.getItem("signup")!=null){
    loadLogin();
}

saveLogin();

var signUp = function(){
    var k=-1;
    // var User1 ="";
    for (var i in user){
        var data = JSON.parse(JSON.stringify(user[i]))

        if (
            ((document.getElementById("name").value == data.username) &&
                (document.getElementById("password").value == data.password)
                && (data.role == "admin")
            )
        ) {
            k = i;
            alert("đăng nhập thành công");

            window.location.href = '../admin/admin.html';
           
        }
        if (
            ((document.getElementById("name").value == data.username) &&
                (document.getElementById("password").value == data.password)
                && (data.role == "user")
            )
        ) {
            
            alert("đăng nhập thành công");
            k=i; 
            window.location.href = '../user/info.html';
                      

            var userLogin = {
                username: document.getElementById("name").value,
                password: document.getElementById("password").value
            }
                      
                        
            signupArr.push(userLogin);

            localStorage.setItem('signup',JSON.stringify(signupArr));
                        
            saveLogin();

        }
    }
    if (k == -1) {
        alert("đăng nhập không thành công");
    }
   
}

function getName () {
    for (var i in user) {
        if(String(user[i].username) == String(signupArr[0].username)) {
            document.getElementById("matkhau").innerHTML='<button class="btn btn-outline-danger" onclick="changePassword('+i+')">Đổi</buttoon>';
            document.getElementById("avt").innerHTML='<img src="../assets/img/'+ user[i].avatar +'" alt="avatar">';
            document.getElementById("name").innerHTML=user[i].name;
            document.getElementById("username").value=user[i].username;
            document.getElementById("hoten").value=user[i].name;
            document.getElementById("sdt").value=user[i].sdt;
            document.getElementById("email").value=user[i].email;
            document.getElementById("diachi").value=user[i].address;
            document.getElementById("update").innerHTML='<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo('+i+')">Cập nhật thông tin</button>';
        }
    }
    document.getElementById("doimk").innerHTML='<button class="mt-3 btn btn-outline-danger"  type="button" data-toggle="modal" data-target="#changePassword">Đổi password</button>';

    document.getElementById("username").setAttribute("disabled","disabled");
  
}
getName();

function updateInfo(i){
    alert("Cập nhật thành công");
    var h = user[i];

    h.name = document.getElementById("hoten").value,
    h.sdt = document.getElementById("sdt").value,
    h.email = document.getElementById("email").value,
    h.address = document.getElementById("diachi").value,

    localStorage.setItem('listUser',JSON.stringify(user));
    window.location.reload();

}

// Thay đổi mật khẩu
function changePassword(i){
    var k = user[i];

    if (document.getElementById("oldpass").value != k.password) {
        alert("mật khẩu cũ không đúng");
    } else {
        if (( document.getElementById("newpass").value == document.getElementById("changepass").value)) {
            alert("đổi mật khẩu thành công");

            k.password = document.getElementById("newpass").value,
            localStorage.setItem('listUser',JSON.stringify(user));
            window.location.reload();
        }
        if (document.getElementById("newpass").value != document.getElementById("changepass").value) {
            alert("nhập lại mật khẩu không đúng");
        }
    }
}


function checkLogin(){

    var check = signupArr;
    
    if (check !=""){
        window.location.href = './user/info.html';
    }
    
    if (check =="")
        {
        window.location.href = './user/login.html';
    }
    
}

function logOut () {
    signupArr = [];
    localStorage.setItem('signup',JSON.stringify(signupArr));
    window.location.href = '../Index.html';
    saveLogin();
}
