<!DOCTYPE html>
<html>
<head>
    <title>2048</title>
    <style>
        /* body{
            
        } */
        #game-container{
            background-color: #BBADA0;
            height: 500px;
            width: 500px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .game-row{
            margin-bottom: 15px;
        }
        .game-cell{
            background: rgba(238, 228, 218, 0.35);
            width: 106.25px;
            height: 106.25px;
            margin-right: 15px;
            border-radius: 3px;
            float: left;
        }
        .game-cell:last-child{
            margin-right: 0px;
        }
    </style>
</head>
<body>
    <div id = "game-container">
        <div class = "game-row">
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
        </div>
        <div class = "game-row">
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
        </div>
        <div class = "game-row">
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
        </div>
        <div class = "game-row">
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
            <div class = "game-cell"></div>
        </div>
    </div>
</body>
</html>
