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
           }
        else
        {
           xc = txto[txto_l-10];
           yc = txto[txto_l-7];
           c = xc.toString() + yc.toString(); 
        }


         switch (c)
         {
            case "11":
                f11r();
                break;

            case "12":
                f12r();
                break;

            case "13":
                f13r();
                break;

            case "21":
                f21r();
                break;

            case "22":
                f22r();
                break;

            case "23":
                f23r();
                break;

            case "31":
                f31r();
                break;

            case "32":
                f32r();
                break;

            case "33":
                f33r();
                break;

            default:
                 alert("Something is wrong");
                 break;
            }
        }
    }
}














function rt()
{
    let tb1 = document.getElementById("xcoordinate");
    let tb2 = document.getElementById("ycoordinate");
    let elec = tb1.value + tb2.value;
    
    switch (elec){
        case "11":
            f11();
            break;
    
        case "12":
            f12();
            break;
        
        case "13":
            f13();
            break;
        
        case "21":
            f21();
            break;
    
        case "22":
            f22();
            break;
        
        case "23":
            f23();
            break;
            
        case "31":
            f31();
            break;
    
        case "32":
            f32();
            break;
        
        case "33":
            f33();
            break;
            
        default:
             alert("Your coordinates are wrong");
            
    }

    ajaxOutForClickFireButton();
}





function f11 (){
    document.getElementById('b11').style.backgroundColor = "green";
    sendMessageB("1","1");
}

function f12 (){
    document.getElementById('b12').style.backgroundColor = "green";
    sendMessageB("1","2");
}

function f13 (){
    document.getElementById('b13').style.backgroundColor = "green";
    sendMessageB("1","3");
}

function f21 (){
    document.getElementById('b21').style.backgroundColor = "green";
    sendMessageB("2","1");
}

function f22 (){
    document.getElementById('b22').style.backgroundColor = "green";
    sendMessageB("2","2");
}

function f23 (){
    document.getElementById('b23').style.backgroundColor = "green";
    sendMessageB("2","3");
}

function f31 (){
    document.getElementById('b31').style.backgroundColor = "green";
    sendMessageB("3","1");
}

function f32 (){
    document.getElementById('b32').style.backgroundColor = "green";
    sendMessageB("3","2");
}

function f33 (){
    document.getElementById('b33').style.backgroundColor = "green";
    sendMessageB("3","3");
}


function f11r(){
    document.getElementById('b11').style.backgroundColor = "red";
}

function f12r (){
    document.getElementById('b12').style.backgroundColor = "red";
}

function f13r (){
    document.getElementById('b13').style.backgroundColor = "red";
}

function f21r (){
    document.getElementById('b21').style.backgroundColor = "red";
}

function f22r (){
    document.getElementById('b22').style.backgroundColor = "red";
}

function f23r (){
    document.getElementById('b23').style.backgroundColor = "red";
}

function f31r (){
    document.getElementById('b31').style.backgroundColor = "red";
}

function f32r (){
    document.getElementById('b32').style.backgroundColor = "red";
}

function f33r (){
    document.getElementById('b33').style.backgroundColor = "red";
}
