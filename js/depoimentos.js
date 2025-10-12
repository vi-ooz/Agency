let count = 1;
document.getElementById("radio1").checked = true; // 'radio1' é checado por padrão no início.

setInterval(function(){ //A cada 2 segundos, chama a função para mudar para a próxima imagem
    nextImage();
}, 4000);

function nextImage(){
    count++;
    if(count > 4){ 
        count = 1; //Reinicia a contagem se passar do limite (4 slides)
    }
    
    document.getElementById("radio" + count).checked = true; //Seleciona o radio button com o ID correspondente à contagem atual
}

const details = document.querySelectorAll('.details');

details.forEach ((targetDetail) => {
targetDetail.addEventListener('toggle', () => {
    if (targetDetail.open) {
    details.forEach((other) => {
        if (other !== targetDetail) other.open = false;
    });
    }
});
});
