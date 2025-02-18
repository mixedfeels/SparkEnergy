function saveData() {
    // Esssa função vai salvar os dados que o usuário colocar

    /*
    const nomeCompleto = document.getElementById("nomeCompleto").value.trim()
    const email = document.getElementById("email").value.trim()
    const nomeSocial = document.getElementById("nomeSocial").value.trim()
    const uf = document.getElementById("uf").value
    const cidade = document.getElementById("cidade").value.trim()
    const idade = document.getElementById("idade").value
    const telefone = document.getElementById("telefone").value.trim()
    const celular = document.getElementById("celular").value.trim()

    const inputText = document.getElementById("inputTextTeste").value.trim()
    const inputSelect = document.getElementById("inputSelectTeste").value

    const radios = document.querySelectorAll('input[name="radioGroupForm"]')

    let selectedRadio = null;

    for (const radio of radios) {
        if (radio.checked) {
            selectedRadio = radio.value;
            break;
        }
    }

    const values = {
        nomeCompleto: nomeCompleto,
        email: email,
        nomeSocial: nomeSocial,
        uf: uf,
        cidade: cidade,
        idade: idade,
        telefone: telefone,
        celular: celular,
        inputText: inputText,
        inputSelect: inputSelect,
        inputRadio: selectedRadio
    };
    */


    const formInput = document.querySelectorAll(".mainForm input, .mainForm selecet")
    // querySelectorAll -> Vai selecionar todos os elementos dentro do container com a class '.mainForm'

    const values = {}
    // Criando um objeto vazio

    formInput.forEach( input => {
        // Vai iterar como elemento que ele tiver armazenado na variável
        if (input.name){
            // Vai verificar se o input tem um atributo 'nome'
            if (input.type === 'radio' && input.checked) {
                // Vai pegar o input do tipo 'radio' e verificar se ele está marcado
                values[input.name] = input.value.trim()
                // object[Key name] = valor que essa chave vai receber
                // .name -> vai ser o name que eu coloquei no HTML
            }
            else if (input.type !== 'radio') {
                // Se não for um input do tipo 'radio'
                values[input.name] = input.value.trim()
            }
        }
    })


    localStorage.setItem("userData", JSON.stringify(values)) // SOLUÇÃO TEMPORÁRIA (EU ACHO)

    /*

    * localStorage -> é uma API web que perimiti armazenar pares de "key-value" no lado do site, ele vai ser salvo no navegador do cliente e vai ficar lá até ele limpa o cache do navegador .

    * setItem -> é um método para  'object' do -LocalStorage- que permiti salvar dados.
         São passados dois argumentos:
             setItem(Key, value) 
             - Key = "userData"
             - Value = JSON.stringfy(values)
    
    * "useData" -> é a 'Key'.
    
    * JSON.stringfy(values) -> vai converter o objeto 'value' para um JSON string, por que o localStorage só armazenar dados nesse formato.

    */
}


function restoreFormData() {
    // Essa função vai restorar os dados quando o usuário quiser voltar do posterior a essa
    const savedData = JSON.parse(localStorage.getItem("userData"))
    // JSON.parse -> Vai converter the JSON sting("userData") para object

    if(savedData) {
        Object.keys(savedData).forEach( key =>{
            /*
            * Object.keys("name") -> Vai returna um array com todas as key dentro de "userdata":
                EX: userdata = {name: 'Jonh', age: '24'} -> ['name', 'age']

            * forEach -> vai executar uma função para cada key que ele pegar do array do Object.keys("userData")
            */
            
            
            const radio = document.querySelector(`.mainForm input[name="${key}"][value="${savedData[key]}"]`)

            if (radio) {
                radio.checked = true;
            }

            const input = document.querySelector(`.mainForm [name="${key}"]`)
            if (input && input.type !== 'radio') {
                input.value = savedData[key] || ""
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", restoreFormData)

function saveAndNavigate() {
    saveData()
    window.location.href = "formSaveData1.html"
}





