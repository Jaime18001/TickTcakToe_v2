<?php
session_start();



class coord_o
{
     var $coordx;
     var $coordy;
}

$coord = new coord_o;

$coord -> coordx = "0";
$coord -> coordy = "0";

$return = json_encode($coord);




if (!isset($_SESSION["hassession"]))
{
    print "Invalid session,you have no business here!";
}
else
{
    $watestdb = new PDO('mysql:host=127.0.0.1; dbname=WATest', 'WATestUser1', 'WATestPwd1');
    $result = $watestdb -> prepare("SELECT msgid, messagex, messagey, nickname FROM coordinates, selectnick WHERE fromsession = id AND tosession=:sessionid");
    $result -> bindValue(":sessionid", session_id());
    $result -> execute();
    if($result -> rowCount()> 0)
    {
        $row = $result->fetch();
        print htmlspecialchars($row["nickname"])." fixed: [".htmlspecialchars($row["messagex"]).", ". htmlspecialchars($row["messagey"])."].";
        $deletion = $watestdb -> prepare('DELETE FROM coordinates WHERE msgid=:delid');
        $deletion -> bindValue(":delid", $row["msgid"]);
        $deletion ->execute();
        $deletion = NULL;

        
        
        $coord -> coordx = htmlspecialchars($row["messagex"]);
        $coord -> coordy = htmlspecialchars($row["messagey"]);
        
        $return = json_encode($coord);
        
       
     

     
    }
}
$result -> closeCursor();
$result = NULL;


?>



