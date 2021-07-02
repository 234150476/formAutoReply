// ==UserScript==
// @name         论坛快捷回复
// @namespace    NewFly
// @version      1.2
// @description  暂时只支持科学刀论坛快捷回复
// @author       NewFly
// @match        https://www.kxdao.net/thread*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


window.autoreply = function (){
    //显示回复窗口
    document.getElementById("post_reply").click();
    //showWindow('reply', 'forum.php?mod=post&action=reply&tid='+tid)
    //在富文本编辑框中输入内容
    window.setTimeout(function(){writetext()},500);
    //提交回复
    window.setTimeout(function(){clicksubmitbutton()}, 500);
}
window.writetext = function (){
    document.getElementById("postmessage").value="超级好用的自动快捷回复";
}
window.clicksubmitbutton = function (){
    document.getElementById("postsubmit").click();
}
document.getElementById("post_reply").insertAdjacentHTML("afterEnd",'<input type="button" value="快捷回复" style="width:80px;height:33px;" onclick="autoreply()"></input>');




    // Your code here...
})();
