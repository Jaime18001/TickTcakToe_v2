function setNick()
{
    let nickname = document.getElementById("textbox").value;
    alert(nickname);
    document.getElementById("dabutton").disabled = true;
    document.getElementById("textbox").disabled = true;
    let connect = new selectnickname(nickname, "savenick", document.body);
    setTimeout(timedMessageFetch, 1000); 
}

class selectnickname extends XMLHttpRequest
{
    constructor (message, target, appendto)
    {
        super();
        this.appendResultTo = appendto;
        this.onreadystatechange = this.ajaxin;
        this.open("POST", target+ ".php", true);
        this.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.send("message=" + encodeURI(message));   
    }

    ajaxin()
    {
        if (this.readyState === 4)
        {
            if (this.status === 200)
            {
                let newdiv = document.createElement("div");
                let texttodiv = document.createTextNode(this.responseText);
                newdiv.appendChild(texttodiv);
                this.appendResultTo.appendChild(newdiv);
               
            }
            else
            {
                alert("Opps...something failed...");
            }
        }
    }
}

class MyConnect extends XMLHttpRequest
{
    constructor(sendcapsule, target, resulthandler)
    {
        super();
        this.handleResultsWith = resulthandler;
        this.onreadystatechange = this.ajaxin;
        this.open("POST", target+ ".php", true);
        this.setRequestHeader("Content-type", "application/json");
        let jsonout = JSON.stringify(sendcapsule);
        this.send(jsonout);
    }

    ajaxin()
    {   
        if (this.readyState === 4)
        {
            if(this.status === 200)
            {
                let responsecapsule = null;
                try
                {
                    responsecapsule = JSON.parse(this.responseText);
                }
                catch(exception)
                {
                    alert("This is not JSON: " + this.responseText);
                }
                if (responsecapsule != null) this.handleResultsWith(responsecapsule);
            }
            else
            {
                alert("Whooopse... something failed");
            }
        }
    }
}

function sendMessageB(xc,yc)
{ 
    coordinate = {"xc" : xc, "yc": yc};
    var message = JSON.stringify(coordinate);
    let connect = new selectnickname(message, "sendmessageservice", document.body);
 }

function timedMessageFetch()
{
    
    if (document.getElementById("dabutton").disabled === true)
    {
        let connect = new selectnickname("NOP", "getmessageservice", document.body);
        dd();        
        setTimeout(timedMessageFetch, 500);
    }
}

function cc(nb, c, s)
{
    $(document).ready(function(){
       $(nb).css("background-color",c);
       $(nb).text(s);
       $(nb).css("font-size", "60px");
    });
    sendMessageB(nb[2], nb[3]);
}

function dd()
{

    l = -1;
    a = document.getElementsByTagName("div");
    l += document.getElementsByTagName("div").length;

    if (a[l].innerText !== "")
    {
        let txto = a[l].innerText;
        let txto_l = txto.length - 1;
        
        console.log(txto.length[txto_l-11]);
        if (txto[txto_l] === "." || txto[txto_l-5] === ".")
        {
           if (txto[txto_l] === ".")
           {
            xc = txto[txto_l-5];
            yc = txto[txto_l-2];
            c = xc.toString() + yc.toString();
            nb = '#b' + c;
            cc (nb, 'red', 'O');
           }
            else
            {
               xc = txto[txto_l-10];
               yc = txto[txto_l-7];
               c = xc.toString() + yc.toString(); 
               nb = '#b' + c;
               cc (nb, 'red', 'O');
            }
        
        }
    }
}
function rt()
{
    if (document.getElementById("textbox").disabled == true )
    {
        let tb1 = document.getElementById("xcoordinate");
        let tb2 = document.getElementById("ycoordinate");
        let elec = tb1.value + tb2.value;
        if (elec == "11" || elec == "12" || elec == "13" || elec == "21" || elec == "22" || elec == "23" || elec == "31" || elec == "32" || elec == "33")
        {
            let nb = "#b" + elec;
            cc(nb, "green", "X");
            ajaxOutForClickFireButton();
        }
        else
        {
            alert("Insert the cordinates in the textboxes or click a botton")
        }
    }
    else
    {
        alert("Select your nickname!");
    }
}

function cc(nb, c, s)
{
    $(document).ready(function(){
       $(nb).css("background-color",c);
       $(nb).text(s);
       $(nb).css("font-size", "60px");
    });
    if (c == 'green')
    {
    sendMessageB(nb[2], nb[3]);
    }
}
