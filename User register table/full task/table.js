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
        document.querySelector("#usernameloc").innerHTML = "Enter valid username";
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

let register = {
    userdetails: [],
    details: {
        name: '',
        username: '',
        email: '',
        number: '',
        isStatus: 'InActive',
        password: '',
        date: ''
    },
    editId: null,
    filteredUsers: [],

    addUser: function () {
        var name = document.querySelector("#name").value;
        var username = document.querySelector("#username").value;
        var email = document.querySelector("#email").value;
        var number = document.querySelector("#number").value;
        var password = document.querySelector("#password").value;

        var d = new Date();
        var date = d.getDate() + "-" + (
            d.getMonth() + 1
        ) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        this.details = {
            id: Date.now(),
            name: name,
            username: username,
            email: email,
            number: number,
            password: password,
            isStatus: 'InActive',
            date: date,
        }
        //if edit id set do not genrate new id and created date
        var isEdit = this.editId;
        if (isEdit) {
            this.edit()
            this.cancelEdit()
        } else {
            this.add();
        }
        //reset form
        document.getElementById('user-form').reset();
        console.log(this.userdetails);
    },

    edit: function () {
        //keep id, date and status same
        this.userdetails = this.userdetails.map(item => this.editId == item.id ? {
            id: item.id,
            name: this.details.name,
            username: this.details.username,
            email: this.details.email,
            number: this.details.number,
            password: this.details.password,
            isStatus: item.isStatus,
            date: item.date,
        } : item)
        //reset edit id
        this.editId = null
        this.render()
    },

    add: function () {
        this.userdetails.push(this.details);
        this.render();
    },

    render: function () {
        let table = document.querySelector("#js-table");  //clear table and replace with empty tbody       
        const old_tbody = document.querySelector("#table-body")
        const new_tbody = document.createElement('tbody');
        table.replaceChild(new_tbody, old_tbody)
        new_tbody.setAttribute("id", "table-body");
        let users = this.userdetails;
        users.forEach(user => {
            tableRow = new_tbody.insertRow();
            cellName = tableRow.insertCell();
            cellUsername = tableRow.insertCell();
            cellEmail = tableRow.insertCell();
            cellNumber = tableRow.insertCell();
            cellStatus = tableRow.insertCell();
            cellCreated = tableRow.insertCell();
            cellAction = tableRow.insertCell();

            tableRow.setAttribute('id', user.id)
            cellName.innerHTML = `${user.name}`;
            cellUsername.innerHTML = `${user.username}`;
            cellEmail.innerHTML = `${user.email}`;
            cellNumber.innerHTML = `${user.number}`;
            cellStatus.innerHTML = `${user.isStatus}`;
            cellCreated.innerHTML = `${user.date}`;

            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class","deleteButton");           
            deleteButton.innerHTML = "Delete";
            let editButton = document.createElement("button");
            editButton.setAttribute("class","editButton");
            editButton.innerHTML = "Edit";
            let viewButton = document.createElement("button");
            viewButton.setAttribute("class","viewButton");
            viewButton.innerHTML = "View";
            let changeStatusButton = document.createElement("button");
            changeStatusButton.setAttribute("class","changeStatusButton");
            if (user.isStatus == 'InActive') {
                changeStatusButton.innerHTML = "InActive";
            } else {
                changeStatusButton.innerHTML = "Active";
            }
            cellAction.append(deleteButton, editButton, viewButton, changeStatusButton);
            deleteButton.onclick = () => {
                this.delete(user.id)
            }
            editButton.onclick = () => {
                this.setEdit(user)
            }
            viewButton.onclick = () => {
                this.view(user)
            }
            changeStatusButton.onclick = () => {
                this.changeStatus(user)
            }
        });

    },
    delete: function (id) {
        this.userdetails = this.userdetails.filter(d => d.id != id);
        this.render();
    },

    setEdit: function (user) {
        this.editId = user.id;
        this.setForm(user);
        document.getElementById("cancel-button").classList.add("showButton");
        document.getElementById("cancel-button").classList.remove("hideButton");
        document.getElementById("add-button").classList.add("showButton");
        document.getElementById("add-button").classList.remove("hideButton");
        document.getElementById("add-button").value = 'Save'
    },

    setForm: function (user) {
        document.getElementById("name").value = user.name;
        document.getElementById("username").value = user.username;
        document.getElementById("email").value = user.email;
        document.getElementById("number").value = user.number;
        document.getElementById("password").value = user.password;
    },

    view: function (user) {
        this.setForm(user)
        document.getElementById("cancel-button").classList.add("showButton");
        document.getElementById("cancel-button").classList.remove("hideButton");
        document.getElementById("add-button").classList.add("hideButton");
        document.getElementById("add-button").classList.remove("showButton");
        document.getElementById("add-button").value = 'Register'

    },

    cancelEdit: function () {
        document.getElementById('user-form').reset();
        this.editId = null;
        document.getElementById("cancel-button").classList.remove("showButton");
        document.getElementById("cancel-button").classList.add("hideButton");
        document.getElementById("add-button").classList.add("showButton");
        document.getElementById("add-button").classList.remove("hideButton");
        // document.getElementById("add-button").classList.remove("hideButton")

        document.getElementById("add-button").value = 'Register'
    },

    changeStatus: function (user) {
        this.userdetails = this.userdetails.map(d => {
            let newStatus = '';
            if (d.id == user.id) {
                if (d.isStatus == 'InActive') {
                    newStatus = 'Active'
                } else {
                    newStatus = 'InActive'
                }

                return { ...d, isStatus: newStatus }
            } else {
                return d;
            }
        })
        this.render()
    },

   
    search: function() {
        let search = document.querySelector('#js-search').value.toUpperCase();
        let table = document.querySelector('#js-table');
        let tr = table.getElementsByTagName('tr');
        for(var i = 0; i< tr.length; i++){
            let td = tr[i].getElementsByTagName('td')[0];
            if(td) {
                let value = td.textContent || td.innerHTML;
                if(value.toUpperCase().indexOf(search) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "None";
                }
            }
        }
        
    }
}


