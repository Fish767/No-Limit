let a=document.getElementById("autobuyer")
function autobuy() {
    let p=good(Math.pow(10,10))
    if (money>=p&&aub===false) {
        money-=p;
        autobuyer=true;
        aub=true;
        a.classList.remove("buy")
        a.classList.add("true")
        a.innerText="Autobuyer: ON"
    }else if (aub===true) {
        if (autobuyer===true) {
            autobuyer=false
            a.classList.remove("true")
            a.innerText="Autobuyer: OFF"
        }else {
            autobuyer=true
            a.classList.add("true")
            a.innerText="Autobuyer: ON"
        }
    }
}