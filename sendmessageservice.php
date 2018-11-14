<?php
session_start();
if(!isset($_SESSION["hassession"]))
{
    print "Invalid session, you have no business here!";
}
else
{
    $watestdb = new PDO('mysql:host=127.0.0.1;dbname=WATest', 'WATestUser1', 'WATestPwd1');
    
    $result = $watestdb -> query("SELECT id FROM selectnick");
    for($i = 0; $i < $result -> rowCount(); $i++)
    {
        $row = $result -> fetch();
        if($row["id"] != session_id())
        {
            $insert = $watestdb -> prepare("INSERT INTO coordinates (tosession, messagex, messagey, fromsession) VALUES (:sessiontarget, :messagex, :messagey, :myid)");
            $insert -> bindValue(":sessiontarget", $row["id"]);
            
            $receivecapsule = json_decode($_POST["message"]);

            
            $insert -> bindValue(":messagex", $receivecapsule -> xc);
                   
            $insert -> bindValue(":messagey", $receivecapsule-> yc);
                    
            $insert -> bindValue(":myid", session_id());
            $insert -> execute();
            $insert = NULL;
        }
    }
    $result -> closeCursor();
    $result = NULL;
    
    //echo($_POST["message"]);    
    print("You have selected: [" .htmlspecialchars($receivecapsule->xc . ", " . $receivecapsule->yc) . "]");
}
?>
