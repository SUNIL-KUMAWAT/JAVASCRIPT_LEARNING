
    let tasks = {
        items: [],
        item: {
            id: null,
            description: null
        },
        add: function () {
            var name = document.getElementById("name").value;
            this.item.description = name;
            this.items.push({id: Math.random(), description: name});
            // console.log(this.items);
            this.render();    
        },
        render: function () {
            let name = document.getElementById("name").value;
            if (name == "") {
                alert("enter taxt");
            } else {
                let ul = document.getElementById("ul");
                let li = document.createElement("li");
                li.textContent = name;
                ul.appendChild(li);
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "delete";
                deleteButton.href = "javascript:void(0)";
                li.appendChild(deleteButton);
                    document.getElementById("name").value = "";                
            }
            let deleteButton = document.querySelector("ul");
            deleteButton.addEventListener("click", function (element) {
                let ul = document.getElementById("ul");
                let li = element.target.parentNode;
                ul.removeChild(li);
            });       
        }       
    };
    function sortList() {
        var list = document.getElementById("ul");
        var switching = true;
        while (switching) {
            switching = false;
            var b = list.getElementsByTagName("li");
            for (var i = 0; i < (b.length - 1); i++) {
                var shouldSwitch = false;
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
        function compareName(a, b) {
            const name1 = a.description.toUpperCase();
            const name2 = b.description.toUpperCase();
            let comparison = 0;
            if (name1 > name2) {
                comparison = 1;
            } else if (name1 < name2) {
                comparison = -1;
            }
            return comparison;
        }    
    }
    
