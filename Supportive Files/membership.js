function member() {
    let nme = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let phn = document.getElementById("Phone").value;
    document.getElementsByClassName("membership-box")[0].style.display = "none";

    if (nme === "" || mail === "" || phn === "") {
        document.getElementById('member_head').innerHTML = `Please Enter Your Details`;
    } else if (isNaN(phn)) {
        document.getElementById('member_head').innerHTML = `Please Enter Proper Details`;
    } else {
        document.getElementById('member_head').innerHTML = `Congratulations Dear,<br>${nme}<br>You're now a member of TheChef family`;
    }
}