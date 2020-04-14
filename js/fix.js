function fix() {
    if (money>10) {
        money/=10
        e++
    }
    if (money<1&&money>0) {
        money*=10
        e--
    }
    for (let i=0; i<generators.length; i++) {
        if (generators[i]>=10) {
            generators[i]/=10
            ge[i]++
        }
    }
    for (let i=0; i<price.length; i++) {
        if (price[i]>=10) {
            price[i]/=10
            pe[i]++
        }
    }
    if (upprice>1) {
        upprice/=10
        upe++
    }
}

function good(num) {
    let f=num;
    for (let i=0; i<e; i++) {
        f/=10
    }
    return (f);
}

function good2(num, num2, num3) {
    let f=num;
    let g=num3-num2
    if (g<0) {
        for (let i=g; i<0; i++) {
            f/=10
        }
    }
    if (g>0) {
        for (let i=g; i>0; i--) {
            f*=10
        }
    }
    
    return (f);
}