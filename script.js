function blockSpecialChar(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 95 || k == 32 || (k >= 48 && k <= 57)||k==43||k==45);
    }
function blockSpecialCharName(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return((k > 64 && k < 91) || (k > 96 && k < 123)|| k == 32 || (k >= 48 && k <= 57)|| k==45||k==95||k==43);
    }
function blockSpecialCharBucket(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return((k > 64 && k < 91) || (k > 96 && k < 123)|| k == 32 || (k >= 48 && k <= 57)|| k==45||k==95||k==43||k==47||k==58);
    }
    function myFun(){
        var a= document.myForm.Letter.value;
        if((a.indexOf('-')==0)){
            document.getElementsByClassName("message").innerHTML=alert("Cannot start with '+','-','_' ");
            return false;
        }        
        else if((a.indexOf('+')==0)){
            document.getElementsByClassName("message").innerHTML=alert("Cannot start with '+','-','_' ");
            return false;
        }        
        else if((a.indexOf('_')==0)){
            document.getElementsByClassName("message").innerHTML=alert("Cannot start with '+','-','_' ");
            return false;        
        }
        else
           return true;
    }
