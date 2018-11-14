function delx()
{
    document.getElementById("xcoordinate").value = "";
}

function dely()
{
    document.getElementById("ycoordinate").value = "";
}

function deln()
{
    document.getElementById("textbox").value = "";
}

function insertTextx()
{
    if (document.getElementById("xcoordinate").value == "")
    {
        document.getElementById("xcoordinate").value = "Insert here";
    }
}

function insertTexty()
{
    if (document.getElementById("ycoordinate").value == "")
    {
        document.getElementById("ycoordinate").value = "Insert here";
    }
}

function insertTextn()
{
    if (document.getElementById("textbox").value == "")
    {
        document.getElementById("textbox").value = "Insert your ninck name here";
    }
}
