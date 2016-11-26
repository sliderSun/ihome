function logout() {
    $.get("/api/logout", function(data){
        if (0 == data.errno) {
            location.href = "/";
        }
    })
}
// function logout() {
//     if (confirm("您确定要退出控制面板吗？"))
//         top.location = "/login.html";
//     return false;
// }

$(document).ready(function(){
    $.get("/api/profile", function(data){
        if (-1 == data.errno) {
            location.href = "/login.html";
        }
        else if (0 == data.errno) {
            $("#user-name").html(data.data.name);
            $("#user-mobile").html(data.data.mobile);
            if (data.data.avatar) {
                $("#user-avatar").attr("src", data.data.avatar);
            }
        }
    })
})