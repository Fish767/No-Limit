var b=document.getElementById("body"),
    t=document.getElementById("title"),
    e=0,
    money=10,
    generators=[0,0,0,0,0,0,0,0,0,0],
    bought=[0,0,0,0,0,0,0,0,0,0],
    bchk=[0,0,0,0,0,0,0,0,0,0],
    ge=[0,0,0,0,0,0,0,0,0,0],
    fps=30,
    dn=Date.now(),
    upgrades=1,
    aub=false,
    autobuyer=false,
    price=[10,40,90,160,250,360,490,640,810,1000],
    pe=[0,0,0,0,0,0,0,0,0,0],
    upprice=100,
    upe=0;
b.innerHTML="<div  id=\"money\"></div><div id=\"gbox\"></div><div id=\"upgrader\" onclick=\"upbuy()\">Upgrade: "+Math.pow(10,upgrades)*100+"</div><div id=\"autobuyer\" onclick=\"autobuy()\">Autobuyer: "+Math.pow(10,10)+"</div><div id=\"download\" onclick=\"getdownloadinfo()\">Download</div>"
for (let i=0; i<generators.length; i++) {
    document.getElementById("gbox").innerHTML+="<div id=\"generators"+i+"\" onclick=\"buy("+i+")\"><div id=\"r"+i+"\"></div><div id=\"c"+i+"\"></div><div id=\"n"+i+"\"></div></div>"
}




//(Math.pow(1000,Math.floor(bought[num]/10)))