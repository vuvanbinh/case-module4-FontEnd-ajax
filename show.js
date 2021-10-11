function showAllClasses() {
    $.ajax({
        url: 'http://localhost:8080/classes',
        type: "GET",
        success: function (data) {
            let result = "<option value=''>--Chọn--</option>";
            for (let i = 0; i < data.length; i++) {
                result += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("classes").innerHTML = result;
        }
    })
}


function showStudentByClassesId() {

    let classesId = $('#classes').val();
    $.ajax({
        url: 'http://localhost:8080/user/findAllStudentByClassesId/' + classesId,
        type: "GET",
        success: function (data) {
            let result = "<option value=''>--Chọn--</option>";
            for (let i = 0; i < data.length; i++) {
                result += `<option value="${data[i].id}">${data[i].fullName}</option>`
            }
            document.getElementById("users").innerHTML = result;
            document.getElementById("success").innerHTML="";
        }
    })
}


function showAllSubject(){
    $.ajax({
        url: 'http://localhost:8080/subject',
        type: "GET",
        success: function (data) {
            let result = "";
            for (let i = 0; i < data.length; i++) {
                result += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            document.getElementById("subject").innerHTML = result;
        }
    })
}


function logOutConfirm(){
    if (confirm("Xác nhận logout:")) {
        window.sessionStorage.removeItem('TOKEN_KEY');
        window.sessionStorage.removeItem('ID_KEY');
        window.sessionStorage.removeItem('NAME_KEY');
        window.sessionStorage.removeItem('AVATAR_KEY');
        window.sessionStorage.removeItem('ROLE_KEY');
        window.sessionStorage.removeItem('CLASSES_ID');
        window.location.href = 'login.html';
    }else return;
}





