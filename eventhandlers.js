var firstCall = true;

function ajaxOutForClickFireButton()
{
    let xcoord = document.getElementById("xcoordinate").value;
    let ycoord = document.getElementById("ycoordinate").value;
    let newCapsule = {
        sendx: xcoord,
        sendy: ycoord
    };
     let connect = new MyConnect(newCapsule, "ajajservice", fireButtonResponseHandler);
}

//var xdivobject = document.createElement("div");
//xdivobject.innerHTML = "<br>Coordinate X: ";
//var xdivtext = document.createTextNode("");
//var ydivobject = document.createElement("div");
//ydivobject.innerHTML = "Coordinate Y: ";
//var ydivtext = document.createTextNode("");


function fireButtonResponseHandler(capsule)
{
    if (firstCall)
    {
        firstCall = false;
        xdivobject.appendChild(xdivtext);
        ydivobject.appendChild(ydivtext);
        document.body.appendChild(xdivobject);
        document.body.appendChild(ydivobject);
    }
    xdivtext.nodeValue = capsule.newxcoord;
    ydivtext.nodeValue = capsule.newycoord;
}

