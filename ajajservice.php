<?php
session_start();

if(!isset($_SESSION["hassession"]))
{
    print "Naughynaughty";
}

else
{
    $textmessage = file_get_contents('php://input');
    $receivecapsule = json_decode($textmessage);
    $sendcapsule = new stdClass();
    $sendcapsule -> newxcoord = $receivecapsule -> sendx + 1;
    $sendcapsule -> newycoord = $receivecapsule -> sendy - 1;
    print json_encode($sendcapsule);
}
