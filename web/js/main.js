$(document).ready(function(){

    var conn = null;
    var name = null;
    
    //Render various types of comments
    function renderComment (id,data) {
        if(data.type != null) id = 'connected';
        var content = $('#'+id).clone(true).append(data.name);        
        content.removeAttr('style').removeAttr('id').prependTo('#chat');
        //Insert time
        var date = new Date();
        var curDate = date.getHours()+':'+ date.getMinutes() + ':' + date.getSeconds();
        $("<span>\t"+ data.message +
            "</span><span class='badge' style='float:right;'>"+curDate+
            "</span><hr>").insertAfter(content);
    }

    //Start web socket session
    function initChat () {

        //Open connection
        conn = new WebSocket('ws://localhost:8888')
            
        //Event handler for open connection
        conn.onopen = function(e) {
            var data = {"name":name,"message":' has logged in','type':'login'};
            conn.send(JSON.stringify(data));
            renderComment('connected',data);
        };

        //Event handler for message recieving
        conn.onmessage = function(e) {
            var data = JSON.parse(e.data);
            renderComment('message',data);
        };

    }
    
    //Login action
    $('#button').click(function() {
        name = $('#username-input').val();
        //Validate username
        if(name.length < 4){
            $('#username-input').addClass('control-group error');
            $('#error').text('At least 4 characters');
        }else{
            $('#login').fadeOut(500,'linear',function(){
                $('#login').remove();
                $('#username').text(name+': ');
                $('#comment').removeAttr('style');
                initChat();
            });
        }
    });

    //Send message action
    $('#comment').submit(function(e){
        e.preventDefault();
        var $comment = $('#post').val();
        //validate and send comment
        if($comment == 0){
            $('#post').addClass('control-group error');
        }else{
            var data = ({"name":name,"message":$comment});
            conn.send(JSON.stringify(data));
            renderComment('message',data);
            $('#post').val('');
        }
    });

    //Send offline message
    $(window).unload(function(){
        var data = {"name":name,"message":' has gone offline','type':'login'};
        conn.send(JSON.stringify(data));
    });

});
