function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}

function getdownloadinfo() {
    let boughtstr=""
    let gestr=""
    let generatorsstr=""
    let pestr=""
    let pstr=""
    let bchkstr=""
    for (let i=0; i<bought.length; i++) {
        if (i===0) {
            boughtstr+="["+bought[i]+""
        }else  {
            boughtstr+=","+bought[i]+""
        }
        if(i===bought.length-1) {
            boughtstr+="]"
        }
    }
    for (let i=0; i<ge.length; i++) {
        if (i===0) {
            gestr+="["+ge[i]+""
        }else  {
            gestr+=","+ge[i]+""
        }
        if(i===ge.length-1) {
            gestr+="]"
        }
    }
    for (let i=0; i<generators.length; i++) {
        if (i===0) {
            generatorsstr+="["+generators[i]+""
        }else  {
            generatorsstr+=","+generators[i]+""
        }
        if(i===generators.length-1) {
            generatorsstr+="]"
        }
    }
    for (let i=0; i<price.length; i++) {
        if (i===0) {
            pstr+="["+price[i]+""
        }else  {
            pstr+=","+price[i]+""
        }
        if(i===price.length-1) {
            pstr+="]"
        }
    }
    for (let i=0; i<pe.length; i++) {
        if (i===0) {
            pestr+="["+pe[i]+""
        }else  {
            pestr+=","+pe[i]+""
        }
        if(i===pe.length-1) {
            pestr+="]"
        }
    }
    for (let i=0; i<bchk.length; i++) {
        if (i===0) {
            bchkstr+="["+bchk[i]+""
        }else  {
            bchkstr+=","+bchk[i]+""
        }
        if(i===bchk.length-1) {
            bchkstr+="]"
        }
    }
    let yeahiamgonnamakethisnamereallylongfornoreason="money="+money+";e="+e+";autobuyer="+autobuyer+";aub="+aub+";upgrades="+upgrades+";dn="+dn+";bought="+boughtstr+";ge="+gestr+";generators="+generatorsstr+";pe="+pestr+";price="+pstr+";bchk="+bchkstr+";upe="+upe+";upprice="+upprice;
    download(yeahiamgonnamakethisnamereallylongfornoreason,'savefile.js','text/plain')
    prompt("In order to use the save file you need to move it to the js folder of the game files. Make sure to replace the old savefile.js.")
}