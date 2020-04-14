function buy(num) {
    let f=good2(price[num],e,pe[num]);
    if (money>=f) {
        money-=f
        generators[num]++
        bought[num]++
        bchk[num]++
        if (bchk[num]>=10) {
            bchk[num]-=10
            pe[num]+=2
        }
    }
}