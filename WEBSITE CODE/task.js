//JS FILE

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');

//Re-initializing
box1.style.zIndex = "1";
box2.style.zIndex = "2";
box3.style.zIndex = "1";
box4.style.zIndex = "2";
box5.style.zIndex = "3";

//For box1
box1.onclick = function(){
    var v1 = parseInt(box1.style.zIndex);
    var v2 = parseInt(box5.style.zIndex);
    var v3 = v2+1;
    var v4 = v2-1;
    if(v2 > v1){
        box1.style.zIndex = v3.toString();
    }
    else if(v2 < v1){
        box1.style.zIndex = v4.toString();
    }
}

//For box2
box2.onclick = function(){
    var v1 = parseInt(box2.style.zIndex);
    var v2 = parseInt(box5.style.zIndex);
    var v3 = v2+1;
    var v4 = v2-1;
    if(v2 > v1){
        box2.style.zIndex = v3.toString();
    }
    else if(v2 < v1){
        box2.style.zIndex = v4.toString();
    }
}

//For box3
box3.onclick = function(){
    var v1 = parseInt(box3.style.zIndex);
    var v2 = parseInt(box5.style.zIndex);
    var v3 = v2+1;
    var v4 = v2-1;
    if(v2 > v1){
        box3.style.zIndex = v3.toString();
    }
    else if(v2 < v1){
        box3.style.zIndex = v4.toString();
    }
}

//For box4
box4.onclick = function(){
    var v1 = parseInt(box4.style.zIndex);
    var v2 = parseInt(box5.style.zIndex);
    var v3 = v2+1;
    var v4 = v2-1;
    if(v2 > v1){
        box4.style.zIndex = v3.toString();
    }
    else if(v2 < v1){
        box4.style.zIndex = v4.toString();
    }
}

//For box5 (Center)
box5.onclick = function(){
    box1.style.zIndex = "1";
    box2.style.zIndex = "2";
    box3.style.zIndex = "1";
    box4.style.zIndex = "2";
    box5.style.zIndex = "3";
}