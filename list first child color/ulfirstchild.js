var length = document.querySelectorAll('ul').length;
var ulLength = length - 1;
function firstchild(index) {
    if (index <= length) {
        let li = document.querySelectorAll('li:first-child');
        li[index].style.color = "red";
        firstchild(index - 1);
    }
    return;
}
 // function firstchild() {
        //     for (let index = 0; index < 10; index++) {
                
        //         document.querySelectorAll('ul li:first-child')[index].style.color = 'red';
        //     }
        // }
