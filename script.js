const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
genbtn = wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");
genbtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    //console.log(qrValue); 
    qrImage.addEventListener("load", ()=>{
        wrapper.classList.add("active");
    });
    
});