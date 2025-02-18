var box1 = document.querySelector(".BOX1"),
box2 = document.querySelector(".BOX2"),
box3 = document.querySelector(".BOX3"),
box4 = document.querySelector(".BOX4"),

Back = document.querySelector(".Back"),
Next = document.querySelector(".Next")

currentIndexBox = 0,
currentIndexBox1 = 0,
currentIndexBox2 = 0,
currentIndexBox3 = 0,
currentIndexBox4 = 0

box1.querySelector("a").href = "https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia"
box2.querySelector("a").href = "https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/"
box3.querySelector("a").href = "https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/"
box4.querySelector("a").href = "https://www.ecologica.org.br/bioenergia/"

document.addEventListener("DOMContentLoaded",function(){    
    
    TIMERS();
})

function TIMERS(){
    Alterna1 = setInterval(() => {
        AlternaBOX1(1)
    }, 10000)
    Alterna2 = setInterval(() => {
        AlternaBOX2(1)
    }, 10000)
    Alterna3 = setInterval(() => {
        AlternaBOX3(1)
    }, 10000)
    Alterna4 = setInterval(() => {
        AlternaBOX4(1)
    }, 10000)
}

function clearTIMERS(){
    clearInterval(Alterna1)
    clearInterval(Alterna2)
    clearInterval(Alterna3)
    clearInterval(Alterna4)
}

function BackVoltar(){
    currentIndexBox1--;
    currentIndexBox2--;
    currentIndexBox3--;
    currentIndexBox4--;

    AlternaBOX1(0);
    AlternaBOX2(0);
    AlternaBOX3(0);
    AlternaBOX4(0);

    clearTIMERS();
    TIMERS();
}

function NextAvancar(){
    currentIndexBox1++;
    currentIndexBox2++;
    currentIndexBox3++;
    currentIndexBox4++;

    AlternaBOX1(0);
    AlternaBOX2(0);
    AlternaBOX3(0);
    AlternaBOX4(0);

    clearTIMERS();
    TIMERS();
}



function AlternaBOX1(value){
    if(value === 1){currentIndexBox1++}

    if(currentIndexBox1 > 2){
        currentIndexBox1 = 0;
    }
    if(currentIndexBox1 < 0){
        currentIndexBox1 = 2;
    }
    box1.querySelector("h2").style.color = "white";
    box1.querySelector("p").style.color = "white";
    box1.querySelector("p").style.fontWeight = "initial";
    if(currentIndexBox1 === 0){
        box1.querySelector("h2").textContent = "Instituto Perifa Sustentável"
        box1.querySelector("p").textContent = "Ativista do Instituto Perifa Sustentável dá espaço à instalação de painéis solares no meio de comunidade."
        box1.style.backgroundImage = "url('https://ciclovivo.com.br/wp-content/uploads/2021/07/energia-solar-periferia-sustentavel-1.jpg')";
        box1.querySelector("a").href = "https://ciclovivo.com.br/planeta/energia/periferia-sustentavel-inaugura-a-1a-micro-geradora-de-energia-solar-da-quebrada/#:~:text=A%201%C2%AA%20Micro%20Geradora%20de%20Energia%20Solar%20da,de%20autonomia%20em%20energia%20limpa%20e%20totalmente%20sustent%C3%A1vel."
    }else if(currentIndexBox1 === 1){
        box1.querySelector("h2").textContent = "Gambá"
        box1.querySelector("h2").style.color = "black";
        box1.querySelector("p").textContent = "A Organização Gambá distribuiu balas doces na rua como forma de provocação à reflexão sobre energia nuclear na Bahia."
        
        box1.style.backgroundImage = "url('http://www.gamba.org.br/wp-content/uploads/2011/12/DSCN2712.jpg')";
        box1.querySelector("a").href = "https://www.gamba.org.br/noticias/gamba-provoca-baianos-e-turistas-a-refletirem-sobre-o-nuclear-na-bahia"
    }else{
        box1.querySelector("h2").textContent = "IEMA"
        box1.querySelector("h2").style.color = "black";
        box1.querySelector("p").textContent = "IEMA empreita a instalação de 70 sistemas fotovoltaicos em 65 comunidades do Território Indígena Xingu, na porção Sul da Amazônia brasileira."
        box1.querySelector("p").style.color = "black";
        box1.querySelector("p").style.fontWeight = "bold";
        box1.style.backgroundImage = "url('https://energiaeambiente.org.br/wp-content/uploads/2019/10/xingusolar-768x768.png')";
        box1.querySelector("a").href = "https://energiaeambiente.org.br/produto/avaliacao-de-impacto-socioambiental-da-introducao-de-sistemas-fotovoltaicos-no-territorio-indigena-do-xingu"
    }
}
    
function AlternaBOX2(value){
    if(value === 1){currentIndexBox2++}

    if(currentIndexBox2 > 2){
        currentIndexBox2 = 0;
    }
    if(currentIndexBox2 < 0){
        currentIndexBox2 = 2;
    }

    if(currentIndexBox2 === 0){
        box2.querySelector("h2").textContent = "Revolusolar"
        box2.querySelector("p").textContent = "Projeto da Revolusolar abastace Museu da Maré com energia solar."
        box2.style.backgroundImage = "url('https://revolusolar.org.br/wp-content/uploads/2023/11/site-foto-mare-projetos-revolusolar-1.jpg')";
        box2.querySelector("a").href = "https://revolusolar.org.br/projetos/"
    }else if(currentIndexBox2 === 1){
        box2.querySelector("h2").textContent = "Greenpeace"
        box2.querySelector("p").textContent = "Greenpeace protesta em plataforma petrolífera da Shell e recebe protesto de US$ 8,6 milhões."
        box2.style.backgroundImage = "url('https://www.greenpeace.org/static/planet4-brasil-stateless/2023/01/741e59c0-01-1024x683.jpg')";
        box2.querySelector("a").href = "https://www.greenpeace.org/brasil/blog/greenpeace-sofre-processo-de-intimidacao-de-shell/"
    }else{
        box2.querySelector("h2").textContent = "Litro de Luz"
        box2.querySelector("p").textContent = "Investimento em energia solar beneficia 62 famílias de nordestinos na região da Morada do Catimbau."
        box2.style.backgroundImage = "url('https://transforma.fbb.org.br/storage/socialtecnologies/403/images/Imagem 04.JPG')";
        box2.querySelector("a").href = "https://www.litrodeluz.com/#:~:text=O%20Litro%20de%20Luz%20utiliza%20materiais%20simples%20para%20tornar%20a"
    }
}

function AlternaBOX3(value){

    if(value === 1){currentIndexBox3++}
    if(currentIndexBox3 > 2){
        currentIndexBox3 = 0;
    }
    if(currentIndexBox3 < 0){
        currentIndexBox3 = 2;
    }

    box3.querySelector("h2").style.color = "white";
    box3.querySelector("p").style.color = "white";
    box3.querySelector("p").style.fontWeight = "initial";
    if(currentIndexBox3 === 0){
        box3.querySelector("h2").textContent = "Sociedade do Sol"
        box3.querySelector("p").textContent = "Sociedade do Sol insiste em investir esforços em sua proposta de Aquecedor Solar de Baixo Custo e na implementação de painéis fotovoltaicos."
        box3.style.backgroundImage = "url('https://static.wixstatic.com/media/2a4eef_9d5c45b867cc4993a80fc987fbe86c08~mv2.jpg/v1/fill/w_448,h_306,al_c,lg_1,q_80,enc_auto/estrutura.jpg')";
        box3.querySelector("a").href = "https://www.sociedadedosol.org.br/fotovoltaico"
    }else if(currentIndexBox3 === 1){
        box3.querySelector("h2").textContent = "Instituto Dom Pixote"
        box3.querySelector("p").textContent = "O Instituto Dom Pixote intenta pioneiramente a instalação do biogestor israelense HomeBiogas® no Brasil."
        box3.style.backgroundImage = "url('https://www.dompixote.org/wp-content/uploads/2018/05/img2-300x300.gif')";
        box3.querySelector("a").href = "https://www.dompixote.org/noticias/conheca-a-homebiogas-e-o-projeto-rio-sustentavel/"
    }else{
        box3.querySelector("h2").textContent = "ONG Verde"
        box3.querySelector("h2").style.color = "black";
        box3.querySelector("p").textContent = "A ONG Verde prepara uma maquete real de seu projeto CASA12Volts que consiste em uma casa 100% alimentada com energia renovável."
        box3.querySelector("p").style.color = "black";
        box3.querySelector("p").style.fontWeight = "bold";
        box3.style.backgroundImage = "url('https://ongverde.org/_media/img/medium/casa12volts-desenho.jpg')";
        box3.querySelector("a").href = "https://ongverde.org/projeto-casa12volts.html/"
    }
}

function AlternaBOX4(value){
    if(value === 1){currentIndexBox4++}

    if(currentIndexBox4 > 2){
        currentIndexBox4 = 0;
    }
    if(currentIndexBox4 < 0){
        currentIndexBox4 = 2;
    }

    box4.querySelector("h2").style.color = "white";
    box4.querySelector("p").style.color = "white";
    box4.querySelector("p").style.fontWeight = "initial";
    if(currentIndexBox4 === 0){
        box4.querySelector("h2").textContent = "WWF-Brasil"
        box4.querySelector("h2").style.color = "black";
        box4.querySelector("p").textContent = "O projeto RESEX Solar gerou acesso a energia elétrica limpa para comunidades ribeirinhas da Amazonia Legal."
        box4.querySelector("p").style.fontWeight = "bold";
        box4.style.backgroundImage = "url('https://wwfbrnew.awsassets.panda.org/img/_aag3014_126567.jpg')";
        box4.querySelector("a").href = "https://panda.maps.arcgis.com/apps/Cascade/index.html?appid=9dc42b217722439495f5ae5d277a3a2b&_gl=1*90yjwl*_ga*MTQxMzY0MTg0MS4xNzI0ODc3MTUz*_ga_KSP2KDVW5X*MTcyNTE0MDkxMC40LjEuMTcyNTE0MTAzNi42MC4wLjA."
    }else if(currentIndexBox4 === 1){
        box4.querySelector("h2").textContent = "Instituto Ecológica"
        box4.querySelector("p").textContent = "Instituto Ecológica empreita a inauguração de uma usina bioenergética de álcool e ração animal."
        box4.style.backgroundImage = "url('https://www.ecologica.org.br/wp-content/gallery/bioernergia/Bioenergia-3.jpg')";
        box4.querySelector("a").href = "https://www.ecologica.org.br/bioenergia/"
    }else{
        box4.querySelector("h2").textContent = "Amigos do Bem"
        box4.querySelector("p").textContent = "Investimento em energia solar beneficia 62 famílias na região da Morada do Catimbau, no nordeste brasileiro."
        box4.style.backgroundImage = "url('https://www.amigosdobem.org/wp-content/uploads/2022/09/ADRIANA2_nova-1-scaled.jpg')";
        box4.querySelector("a").href = "https://www.amigosdobem.org/investimento-em-energia-solar-beneficia-5-mil-nordestinos-reduz-emissao-de-gas-e-preserva-mais-de-30-mil-arvores/#:~:text=Apenas%20no%20Vale%20do%20Catimbau,%20200%20placas%20solares%20geram%20energia"
    }
}

const carrosselImages = document.querySelector('.carrosel-people')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentIndex = 0

function showImage(index){
    const offset = -index * 110
    carrosselImages.style.transform = `translateX(${offset}%)`
}

prevButton.addEventListener('click', () =>{
    currentIndex = (currentIndex === 0) ? 1 : currentIndex -1
    showImage(currentIndex)
})

nextButton.addEventListener('click', () =>{
    currentIndex = (currentIndex === 1) ? 0 : currentIndex +1
    showImage(currentIndex)
})