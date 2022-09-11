const search = () => {
    let filter = document.getElementById("search").value.toUpperCase();
    let table = document.getElementById("tbl");
    let tr = table.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvlaue = td.textContent || td.innerHTML;
            if (textvlaue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

const validate = () => {
    var name = document.form.name.value;
    var username = document.form.username.value;
    var number = document.form.number.value;
    var password = document.form.password.value;
    var email = document.form.email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (name == null || name == "" || name.trim() === "") {
        document.querySelector("#nameloc").innerHTML = "Name can't be blank";
        return temp
    } else if (username == null || username == "" || username.trim() === "") {
        document.querySelector("#usernameloc").innerHTML = "Enter valid usernamer";
        return temp;
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        document.querySelector("#emailloc").innerHTML = "Enter valid email";
        return temp;
    } else if (isNaN(number)) {
        document.querySelector("#numloc").innerHTML = "Enter Numeric value only";
        return temp;
    } else if (number.toString().length !== 10) {
        document.querySelector("#numloc").innerHTML = "Enter 10 digit number";
        return temp;
    } else if (number.trim() === "") {
        document.querySelector("#numloc").innerHTML = "Enter 10 digit number";
        return temp;
    } else if (password.toString().length < 6) {
        document.querySelector("#passwordloc").innerHTML = "Password must be at least 6 characters long";
        return temp;
    } else {
        return true;
    }
}

var d = new Date();
var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

adddata = () => {
    var name = document.querySelector("#name").value;
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var number = document.querySelector("#number").value;
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    document.querySelector("#name").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#password").value = "";
    td1.innerHTML = name;
    td2.innerHTML = username;
    td3.innerHTML = email;
    td4.innerHTML = number;
    td5.innerHTML = datestring;
    td6.innerHTML = '<input type="button" name="del" value="Delete" onclick="deleteresister(this);" class="deletebtn">'
    td7.innerHTML = '<input type="button" name="up" value="Update" onclick="updatedata(this);" class="updatebtn">'
    document.querySelector("#tbl").appendChild(tr);
}

const updatedata = (e) => {
    var name = document.querySelector("#name").value;
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var number = document.querySelector("#number").value;
    var s = e.parentNode.parentNode;
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = name;
    td2.innerHTML = username;
    td3.innerHTML = email;
    td4.innerHTML = number;
    td5.innerHTML = datestring;
    td6.innerHTML = '<input type="button" name="del" value="Delete" onclick="deleteresister(this);" class="deletebtn">'
    td7.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpdatedata(this);" class="addupdatebtn">'
    document.querySelector("#tbl").replaceChild(tr, s);
}

const addUpdatedata = (e) => {
    var name = document.querySelector("#name").value;
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var number = document.querySelector("#number").value;
    var s = e.parentNode.parentNode;
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = name;
    td2.innerHTML = username;
    td3.innerHTML = email;
    td4.innerHTML = number;
    td5.innerHTML = datestring;
    td6.innerHTML = '<input type="button" name="del" value="Delete" onclick="deleteresister(this);" class="deletebtn">'
    td7.innerHTML = '<input type="button" name="up" value="Update" onclick="updatedata(this);" class="updatebtn">'
    document.querySelector("#tbl").replaceChild(tr, s);
}

const deleteresister = (e) => {
    var s = e.parentNode.parentNode;
    // console.log(s);
    // console.log(e.parentNode);
    // console.log(s.parentNode);
    // console.log(e);
    s.parentNode.removeChild(s);
}