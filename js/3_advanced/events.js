events            //string sFileScript = "<div class=\"FilePickerWrapper\"><input type=\"button\" value=\"Browse\"  /><INPUT TYPE=\"FILE\" NAME=\"fileBrowser\" ID=\"fileBrowser\"" + disabledScript + "\" TABINDEX=\"" + this.TabIndex.ToString() + "\" onpropertychange=\"" + sScriptCall + "\"></div>";
            string sFileScript = "<div class=\"FilePickerWrapper\"><input type=\"button\" value=\"Browse\" /><input type=\"file\" name=\"fileBrowser\" id=\"fileBrowser\" tabindex=\"" + this.TabIndex.ToString() + "\"" + disabledScript + "/></div>";
            sFileScript += "<script>document.getElementById(\"fileBrowser\").addEventListener(\"change\", function() {var $textBox = $(\"#" + this.m_ctlFileName.ClientID + "\");$textBox.val($(this).val());$textBox.change();}, false);</script>";
            m_oLiteral.Text = sFileScript;


var foo = "bar";
e.addEventListener('whee',function(evt){
  iRespond(evt,foo);
},false);
When a simple closure won't do (because you're latching onto a variable that's changing, such as in a loop) you need to create a new closure over that value:

foo.addEventListener('bar',(function(jim){
  return function(evt){
    iRespond(evt,jim); // Surprise surprise, jim is available here!
  }
})(someValueToBeNamedJim), false);
For example:

var buttons = document.querySelectorAll('button');
for (var i=buttons.length;i--;)}
  buttons[i].addEventListener('click',(function(j){
    return function(){ alert("You clicked on button #"+j); };
  })(i),false);
}

anItem.addEventListener("click", function() {
    iRespond(your arg here);
}, false);
Or, in many cases, you can just reference the this pointer in the event listener to see what object you were called from:

anItem.addEventListener("click", iRespond, false);
Then, in iRespond:

function iRespond() {
    // this points to the item that caused the event so you can 
    // determine which one you are processing and then act accordingly
    // For example, this.id is the id of the object
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind