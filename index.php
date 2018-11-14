<?php
session_start();
$_SESSION["hassession"] = true;
?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<html>
    <head>
        <meta charset="UTF-8">
        <title> Tick Tack Toe</title>
        <script type = "text/javascript" src = "Textbox.js"></script>
        <script type = "text/javascript" src = "serviceconnect.js"></script>
        <script type = "text/javascript" src = "eventhandlers.js"></script>
        
     
        
    </head>
    <body id ="bodyid">
        <div>
        <textarea id = "textbox" name = "nickn" onfocus = "deln()" onblur = "insertTextn()">Insert your ninck name here</textarea>
        <style type="text/css">
          #textbox {
            height: 20px;
            width: 295px;
            top: 25px;
            left: 5px;
            position: fixed;
            border-radius: 5px;
            transition: all 500ms ease;
          }
        </style>
        
        <button type = "button" id="dabutton" onClick = "setNick()">Set Nickname</button>
        <style type="text/css">
          #dabutton {
            border: none;
            background: #56ff00;
            color: #000000;
            height: 25px;
            width: 70px;
            top: 25px;
            left: 320px;
            
            font-size: 10px;
            border-radius: 5px;
            position: fixed;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
        <br><br><br>
        
        Select the X coordinate: 
        <textarea id = "xcoordinate" onfocus = "delx()" onblur="insertTextx()"> Insert here </textarea>
        <style type="text/css">
          #xcoordinate {
            height: 20px;
            width: 130px;
            top: 60px;
            left: 170px;
            position: fixed;
            border-radius: 5px;
            transition: all 500ms ease;
          }
        </style>
        
        <br><br>Select the Y coordinate: 
        <textarea id = "ycoordinate" onfocus="dely()" onblur="insertTexty()"> Insert here </textarea>
        <style type="text/css">
          #ycoordinate {
            height: 20px;
            width: 130px;
            top:95px;
            left: 170px;
            position: fixed;
            border-radius: 5px;
            transition: all 500ms ease;
          }
        </style>
        
        
        <button id = "firebutton" onClick = "rt()"> Fire! </button>
        <style type="text/css">
          #firebutton {
            border: none;
            background: #ff0000;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 60px;
            left: 320px;
            
            font-size: 18px;
            border-radius: 5px;
            position: fixed;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
        
        <!--Tic-Tac-Toe-->
        <div>
        <button id = 'b11' onclick = "f11();"> 11 </button>
        <style type="text/css">
          #b11 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 250px;
            left: 10px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
         <button id = 'b12' onclick = "f12();"> 12 </button>
        <style type="text/css">
          #b12 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 250px;
            left: 90px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
       
         <button id = 'b13' onclick = "f13();"> 13 </button>
        <style type="text/css">
          #b13 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 250px;
            left: 170px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
      
        
        <button id = 'b21' onclick = "f21();"> 21 </button>
        <style type="text/css">
          #b21 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 330px;
            left: 10px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
      
         <button id = 'b22' onclick = "f22();">  22 </button>
        <style type="text/css">
          #b22 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 330px;
            left: 90px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
         <button id = 'b23' onclick = "f23();"> 23 </button>
        <style type="text/css">
          #b23 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 330px;
            left: 170px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
      
        <button id = 'b31' onclick = "f31();"> 31 </button>
        <style type="text/css">
          #b31 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 410px;
            left: 10px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
         <button id = 'b32' onclick = "f32();"> 32 </button>
        <style type="text/css">
          #b32 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 410px;
            left: 90px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        
         <button id = 'b33' onclick = "f33();"> 33 </button>
        <style type="text/css">
          #b33 {
            border: none;
            background: #2000FF;
            color: #FCFF00;
            height: 70px;
            width: 70px;
            top: 410px;
            left: 170px;
            
            font-size: 18px;
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            transition: all 500ms ease;
          }
        </style>
        </div>
    </body>
</html>
