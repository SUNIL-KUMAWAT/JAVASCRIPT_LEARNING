function formEvent() {
    let b_r = `<br><br>`;
    let inputname = document.querySelector("#name").value;
    document.querySelector("#formEvent").innerHTML = inputname;

    let inputemail = document.querySelector("#email").value;
    document.querySelector("#formEvent").innerHTML = inputname + b_r + inputemail;

    let inputage = document.querySelector("#age").value;
    document.querySelector("#formEvent").innerHTML = inputname + b_r + inputemail + b_r + inputage;

    let inputaddress = document.querySelector("#address").value;
    document.querySelector("#formEvent").innerHTML = inputname + b_r + inputemail + b_r + inputage + b_r + inputaddress;

    let inputradiobutton = document.querySelector("input[type='radio']:checked").value;
    document.querySelector("#formEvent").innerHTML = inputname + b_r + inputemail + b_r + inputage + b_r + inputaddress + b_r + inputradiobutton;

}
function country1() {
    let inputcountry = document.querySelector("#country");
    inputcountry.addEventListener('change', function (event) {
        console.log(event.target.value);
        event.stopPropagation();
        document.querySelector("#countryfind").innerHTML = "selected country is " + event.target.value
    })
}

// let inputcountry = document.querySelector("#country");
// document.querySelector("#country").innerHTML = inputname + b_r + inputemail + b_r + inputage + b_r + inputaddress + b_r + inputradiobutton + b_r + inputcountry;

// let nameEvent = document.querySelector("#formEvent");
// let inputname = document.querySelector("#name").value;
// nameEvent.addEventListener("click", function(){

//     document.querySelector("#formEvent").innerHTML = inputname;
// })

// let button = document.querySelector("p");
// button.onclick = ()=>{
//     let name = document.querySelector("#name").value;
//     let ptag = document.querySelector("#para").innerHTML;
//     console.log(name)
//     document.querySelector("p").innerHTML = ptag + " "+name;
// }

// let button = document.querySelector("#name");
// button.onkeyup = ()=>{
//     let name = document.querySelector("#name").value;
//     let ptag = document.querySelector("#para").innerHTML;
//     console.log(name)
//     document.querySelector("p").innerHTML = ptag + " "+name;
// }

// let button = document.querySelector("#name");
// button.onkeydown = ()=>{
//     let name = document.querySelector("#name").value;
//     let ptag = document.querySelector("#para").innerHTML;
//     console.log(name)
//     document.querySelector("p").innerHTML = ptag + " "+name;
// }
// let button = document.querySelector("#name");
// let ptag = document.querySelector("#para").textContent;
// button.onkeyup = ()=>{
//     let name = document.querySelector("#name").value;

//     console.log(name)

//     document.querySelector("p").innerHTML = ptag +" " +name;
// }

// let button = document.querySelector("#name");

// button.focus = ()=>{
//     let ptag = document.querySelector("#para").textContent;
//     button.style.color = "red";
// }
