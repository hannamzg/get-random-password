
function getRandomPass(){
    let char  = "0123456789qwertyuiop[]asdfghjkl;'zxcvbnm,./!@#$%^&*()";
    let charLength = 12;
    let ipnTxt = "";
    for(let i=0; i<charLength; i++){
        let randomNum = Math.floor(Math.random() * char.length);
        ipnTxt += char.substring(randomNum, randomNum +1);
    }
    document.getElementById("ipnTxt").value = ipnTxt;
}

function copyTxt(){
    let ipnTxtt = document.getElementById("ipnTxt");
    ipnTxtt.select();
    document.execCommand("copy")

}
