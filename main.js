function main() {
  console.log("Hello, World!");
}
function oneoff(){
    document.getElementById("demo").style.display = "none";
    
}
main();

document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.getElementById('myImage');

    if (myImage) {
        myImage.addEventListener('click', function() {
            if (myImage.src.match('pic_bulbon.gif')) {
                myImage.src = 'pic_bulboff.gif';
            } else {
                myImage.src = 'pic_bulbon.gif';
            }
        });
    }
});