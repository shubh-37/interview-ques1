var opBtn = document.querySelectorAll(".op-btn");
var num1 = document.querySelector("#number-1");
var num2 = document.querySelector("#number-2");
var output = document.querySelector("#output");

function clickHandler(event){
    var nameAttr = event.target.getAttribute("name");
    var input1 = Number(num1.value);
    var input2 = Number(num2.value);

    if(nameAttr === "add"){
        output.innerText = input1 + input2;
    }else if(nameAttr === "subtract"){
        output.innerText = input1 - input2;
    }else if(nameAttr === "multiply"){
        output.innerText = input1 * input2;
    }else{
        output.innerText = input1/ input2;
    }
}

opBtn.forEach((box)=>{
    box.addEventListener("click",clickHandler);
})
