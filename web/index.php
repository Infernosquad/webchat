<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <title>Web chat</title>
    <style type="text/css">
        input{
            margin-top:10px;
        }
    </style>
    <script type="text/javascript" src="js/jquery-2.0.2.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
    <a href="https://github.com/Infernosquad/webchat">
        <img style="position: absolute; top: 0; right: 0; border: 0;" 
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" 
        alt="Fork me on GitHub">
    </a>
    <div class="container">

        <div class="page-header">
            <h1>Welcome to web chat!</h1>
        </div>

        <div class="well" id="login">
            <input id="username-input" type="text" class="input-large input-error" placeholder="Enter your username">
            <button id="button" class="btn btn-medium btn-success"
            type="submit">
                <i class="icon-ok icon-white"></i> Enter
            </button>
            <span id="error" style="color:#e74c3c;"></span>
        </div>
        
        <form id="comment" class="well" style="display:none;">
            <b id="username">Username: </b>
            <input id="post" type="text" class="span9" placeholder="Enter your message">
            <button id="send" class="btn btn-medium btn-primary" type="submit">
                <i class="icon-ok icon-white"></i> Enter
            </button>
        </form>

        <div id="chat"></div>
        <span style="display:none;" id="connected" class="label label-info"><i
        class="icon-user icon-white"></i> </span>
        <span style="display:none;" id="message" class="label label-important"><i
        class="icon-user icon-white"></i> </span>

    </div>
</body>
</html>

