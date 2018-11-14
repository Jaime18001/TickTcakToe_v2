<?php
session_start();
if (!isset($_SESSION["hassession"]))
{
    print "Naughtynaughty...";
}
else
{
     print "Player: " . htmlspecialchars(strrev($_POST["message"]));
     
     
    $watestdb = new PDO('mysql:host=127.0.0.1;dbname=WATest', 'WATestUser1', 'WATestPwd1');
    $deletion = $watestdb->prepare("DELETE FROM selectnick WHERE id=:sessid");
    $deletion -> bindValue(":sessid", session_id());
    $deletion->execute();
    $deletion = NULL;
    $insert = $watestdb->prepare("INSERT into selectnick (id, nickname) VALUES (:sessid, :nick)");
    $insert -> bindValue(":sessid", session_id());
    $insert -> bindValue(":nick", $_POST["message"]);
    $insert ->execute();
    $insert = NULL;
     
}

//print htmlspecialchars(strrev($_POST["message"]));
?>

