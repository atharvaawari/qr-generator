
let qrBox = document.getElementById('qrBox');
let qr = document.getElementById('qr');
let qrText = document.getElementById('qrText');
let btn = document.getElementById("btn");
    
    btn.addEventListener('click' , ()=>{
        generateQr();
    })

  function generateQr() {
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

}