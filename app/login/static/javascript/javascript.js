const check = document.querySelector(".check");

check.addEventListener("change",()=>{
    const value = check.value;
    const msg = document.querySelector(".msgemail");
    if(!value.match(/^[\w]+@(gmail.com|um5.ac.ma|um5r.ac.ma)$/)){
        check.style = "box-shadow: 0 0 0 2px orange";
        msg.innerText = "please enter a valid email adress";
    }else{
        check.style = "box-shadow: 0 0 0 2px lightgreen";
        msg.innerText = ""
    }
})