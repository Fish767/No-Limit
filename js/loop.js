function loop() {
    let r=good2((generators[0]*Math.floor(bought[0]/10+1))/fps*(Date.now()-dn)*Math.pow(1.5,upgrades),e,ge[0])
    money+=r
    for (let i=1; i<generators.length; i++) {
        let f=good2((generators[i]*Math.floor(bought[i]/10+1)/fps*(Date.now()-dn))*Math.pow(1.5,upgrades),ge[i-1],ge[i])
        generators[i-1]+=f
    }
    fix()
    t.innerText="No Limit "+Math.floor(money)+"e"+e
    document.getElementById("money").innerText=Math.floor(money)+"e"+e
    for (let i=0; i<generators.length; i++) {
        document.getElementById("r"+i).innerText="Amount: "+Math.floor(generators[i])+"e"+ge[i]
        document.getElementById("c"+i).innerText="Cost: "+Math.ceil(price[i])+"e"+pe[i]
        document.getElementById("n"+i).innerText="Bought: "+bought[i]
        let j=good2(price[i],e,pe[i]);
        if (money>=j) {
            document.getElementById("generators"+i).classList.add("buy")
        }else {
            document.getElementById("generators"+i).classList.remove("buy")
        }
    }
    document.getElementById("upgrader").innerText="Upgrade: "+upprice+"e"+upe
    let o=good2(upprice,e,upe)
    if (money>=o) {
        document.getElementById("upgrader").classList.add("buy")
    }else {
        document.getElementById("upgrader").classList.remove("buy")
    }
    let p=good(Math.pow(10,10))
    if (money>=p&&aub===false) {
        document.getElementById("autobuyer").classList.add("buy")
    }else {
        document.getElementById("autobuyer").classList.remove("buy")
    }
    dn=Date.now()
    if (autobuyer===true) {
        for (let i=0; i<generators.length; i++) {
            buy(i)
        }
        upbuy()
    }
}

setInterval(loop, fps)