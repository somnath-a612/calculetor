let input = document.querySelector("#input");
let output = document.querySelector("#output");
let btn = document.querySelectorAll("button");

btn .forEach(btn => {
    btn.addEventListener("click", function () {
        let val = btn.textContent;
        
        if(val === "="){
            try{
                let result = eval(input.value);
                output.value = result;
            } catch {
                input.value = "ERROR";

            }
        } else if (val === "AC"){
            input.value = "";
            output.value = "";
        }else if(val === "D"){
            input.value = input.value.slice(0, -1);
        }else{
            input.value += val;
        }


        

    });
});

document.addEventListener("keydown", (event) => {
    let allowedKey = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","Enter","backspace","Delete"]
    // input.value = event.key;
    if(event.key === "shift"){
        event.preventDefault;
        return;
    }
    if(!allowedKey.includes(event.key)){
        event.preventDefault;
        return;
    }
    if(event.key === "Enter"){
        try{
            output.value = eval(input.value);
        }
        catch{
            input.value = "ERROR";
        }
        
    } else if (event.key === "Delete"){
        input.value = "";
        output.value = "";

    } else if(event.key === "Backspace"){
        input.value = input.value.slice(0, -1);
    }else{
        input.value += event.key;
    }


});
    