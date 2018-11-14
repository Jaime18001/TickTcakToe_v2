<?php
session_start();



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
        
        $deletion = $watestdb -> prepare('DELETE FROM coordinates WHERE msgid=:delid');
        $deletion -> bindValue(":delid", $row["msgid"]);
        $deletion ->execute();
        $deletion = NULL;

       
        
 
     
    }
}
$result -> closeCursor();
$result = NULL;
echo "hola";

?>



