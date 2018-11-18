var firstCall = true;

function ajaxOutForClickFireButton()
{
    if (document.getElementById("textbox").disabled == true )
    {
        let xcoord = document.getElementById("xcoordinate").value;
        let ycoord = document.getElementById("ycoordinate").value;
        let newCapsule = {
            sendx: xcoord,
            sendy: ycoord
        };
         let connect = new MyConnect(newCapsule, "ajajservice", fireButtonResponseHandler);
     }
     else 
     {
         alert("Select your nickname!")
     }
}


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

