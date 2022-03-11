function log() {
    jk1=document.getElementById("inp1").value;
    jk2=document.getElementById("inp2").value;
   localStorage.setItem("v1",jk1);
   localStorage.setItem("v2",jk2);
   window.location="game_page.html";
}