function upbuy() {
    let t=good2(upprice,e,upe)
    if (money>=t) {
        money-=t
        upgrades++
        upe+=7
    }
}