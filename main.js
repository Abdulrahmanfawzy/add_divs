let btn = document.querySelector("#btn");
let tasker = document.querySelector(".tasker");
let form = document.forms[0];

// Add Item

btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    let newItem = `
    <div class="form_inside">

        <button class="del">delete</button>
        <div class="form_flex">
            <div>
                <label for="item">item</label>
                <input type="text">
            </div>
            <div>
                <label for="num1">First Number</label>
                <input type="number" class="num1">
            </div>
            <div class="plus">
                +
            </div>
            <div>
                <label for="num2">Second Number</label>
                <input type="number" class="num2">
            </div>
            <div>
                <input type="checkbox" class="check" readonly>
            </div>
        </div>
        <div class="result_up">
            <input type="number" placeholder="Result" class="result" readonly>
        </div>
    </div>
    `;
    document.querySelector(".tasker").innerHTML += newItem;

})

form.addEventListener("click" , (eve)=>{
    if(eve.target.className == "check"){
        let number1 = eve.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[1].value;
        let number2 = eve.target.parentElement.previousElementSibling.children[1].value;
        let res = eve.target.parentElement.parentElement.nextElementSibling.children[0];
        res.value = +number1 + +number2
    }
})

tasker.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
    }
})