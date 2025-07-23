let container=document.querySelector("#result");
let b1=document.querySelector("button");
let field=document.querySelector("#usdAmount");

b1.addEventListener("click",
    ()=>{
        let str=field.value;
        let num=parseFloat(str);
        if(num===""||num<0){
            alert("enter valid amount");
            return;
        }
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((response)=>response.json())
        .then((data)=>{
            let{rates}=data;
            console.log(rates.INR);
            let total=num*rates.INR;
            container.textContent=`${num} $ = RS ${total}`;
        })
        .catch((error)=>console.log(error));

    }
)