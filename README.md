# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# SparkEnergy

## ODS 7: Energia limpa e acessível

## Integrantes: <a href="https://github.com/ArthurRFerr">Arthur Rodrigues Ferreira</a>, <a href="https://github.com/BernardoSCavalc">Bernardo Seijas Cavalcante</a>, <a href="https://github.com/gabmarussi">Gabriel Henrique Coelho Marussi</a>, <a href="https://github.com/IsraelRibeiro05">Israel Ribeiro Ramos</a>, <a href="https://github.com/ViniSantos09">Vinicius dos Santos Ribeiro</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/dolemes/">David de Oliveira Lemes</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco de Souza Escobaro</a>, <a href="https://github.com/2024-2-MCC2/Projeto10">Katia Milani Lara Bossi</a>, <a href="https://github.com/2024-2-MCC2/Projeto10">Renata Muniz do Nascimento</a>, <a href="https://www.linkedin.com/in/victorbarq/">Victor Rosetti Quiroz</a>

## Descrição

<p align="center">
<img src="imagens/SparkEnergy (Sem Fundo).png" alt="SparkEnergy" border="0">
  Image by <a href="https://github.com/2024-2-MCC2/Projeto10">SparkEnergy</a> <a rel="license" href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY-SA 4.0</a>
</p>


A SparkEnergy visa promover o acesso universal, confiável e acessível à energia, ouvindo as comunidades sobre suas dificuldades. Alinhando-se ao Objetivo 7.1 da ODS 7 da ONU: 'Garantir o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia. Na SparkEnergy, a conexão vai além da internet, buscando unir pessoas, ideias e soluções para problemas de acesso à energia. O espaço incentiva a troca de experiências, denúncias e sugestões, criando uma rede de apoio entre moradores de diferentes bairros e ajudando a mapear a realidade energética das comunidades.

A solidariedade impulsiona a SparkEnergy, criando um ambiente onde as pessoas podem se apoiar mutuamente. Ao compartilhar experiências e sugestões, cada um contribui para a comunidade e para um movimento global que busca garantir o acesso à energia limpa e acessível. Juntos, podemos construir um futuro mais justo para todos.<br/><br/>

## Status do site
:green_circle: funcionando <br/>
:red_circle: Não funciona <br/>

&emsp; :green_circle: Site: https://sparkenergy.netlify.app/ <br/>
&emsp; :green_circle: API: https://sparkenergy-api.onrender.com<br/>
&emsp; :green_circle:  Banco de Dados no Microsoft Azure<br/><br/>

## <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo" width="24" height="24" style="vertical-align: middle; margin-right: 10px;"> Figma

-<a href="https://www.figma.com/design/vBXU3GXwaO11UcjoACbnU4/PI---SparkEnergy"> Protópico do Projeto</a><br/><br/>

## 🛠 Estrutura de pastas

/Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->Entrega 1<br>
  &emsp;|-->Entrega 2<br>
  &emsp;|-->Entrega 3<br>
  &emsp;|-->Entrega 4<br>
  	&emsp;&emsp;|Documentação.docx<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Frontend<br>
	&emsp;&emsp;|-->Html_Css_Js<br>
    	&emsp;&emsp;|-->React<br>
|.gitignore<br>
|readme.md<br>
<br/>

## 🛠 Instalação

Não há instalação!<br/>
<a href="https://sparkenergy.netlify.app/">Link do nosso site</a><br/>
<br/>

## 💻 Configuração para Desenvolvimento

Para abrir este projeto você necessita das seguintes ferramentas:

-<a href="https://code.visualstudio.com/download"> Visual Studio Code</a><br/>
-<a href="https://pt-br.react.dev"> React</a><br/>
-<a href="https://nodejs.org/pt/download/prebuilt-installer/current"> Node.js</a><br/>
-<a href="https://dev.mysql.com/downloads/workbench"> MySQL Workbench</a><br/><br/>


### Projeto em React

Para acessar e continuar com o desenvolvimento no projeto em react, siga o passo a passo:</br><br/>
1. Baixe o arquivo do repositório (.zip ou .rar) e descompacte-o.<br/>
	- Opcional:<br/>
		   &emsp;&emsp;1.1. Baixe o git na sua máquina <br/>
		   &emsp;&emsp;1.2. Abra o Terminal em uma pasta adequada<br/>
		   &emsp;&emsp;1.3. Use `git clone https://github.com/ViniSantos09/SparkEnergy_SiteFullStack.git` 
3. Abra o Visual Studio Code e o projeto nele.
4. Abra um novo terminal e siga os passos abaixo:

	- FrontEnd:
	  
	    ```bash
	    cd src/Frontend/react
	    ```       
	    ```bash
	    npm install 
	    ```         
	    ```bash
	    npm start
	    ```
	    - OBS: pode aparecer avisos no terminal, mas apenas os ignore.

4. Crie um outro terminal para rodar o backend:

	- BackEnd:
	    
	    ```bash
	    cd src/Backend
	    ```       
	    ```bash
	    npm install
	    ```    
	    ```bash
	    npm run devStart
	    ```    
		- OBS: Ainda não vai funcionar pois o banco de dados não foi criado ainda.
5. Criar a conexão com o banco de dados localmente

 	1. Tenha o MySQL baixado na sua máquina, para fazer a conexão use: MySQLWorkbench(recomendado) ou Terminal.</br>
 	2. Vá na sua conexão principal e crie um banco de dados chamado `sparkenergydb`</br>
 	3. No VSCode, vá em `Backend/src/config/config.json`</br>
	4. Em "development" coloque essas credenciais:</br>
		- username: root</br>
		- password: senha do mysql na sua máquina.</br>
		- database: sparkenergydb</br>
		- host: localhost</br>

6. Reinicie o servidor
7. Veja se no terminal do servidor aparece "Server running on port 3002"
    
    Assim que o site for aberto no navegador, ele estará pronto para navegação e acesso ao banco de dados.<br/><br/>


## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2024-2-MCC2/Projeto10">SparkEnergy</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2024-2-MCC2/Projeto10">FECAP - Arthur Rodrigues Ferreira, Bernardo Seijas Cavalcante, Gabriel Henrique Coelho Marussi, Israel Ribeiro Ramos, Vinicius dos Santos Ribeiro</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>
<br/>

## 🎓 Referências

Aqui estão todas as referências usadas no projeto.

### ONGs e Sites de Inspirações
1. <a href="https://revolusolar.org.br">Revolusolar</a> 
2. <a href="https://www.sociedadedosol.org.br">Sociedade do Sol</a>
3. <a href="https://doe.greenpeace.org.br">Greenpeace Brasil</a>
4. <a href="https://www.litrodeluz.com">Litro de Luz Brasil</a>
5. <a href="https://www.ecologica.org.br">Instituto Ecológica</a>
6. <a href="https://www.dompixote.org">Instituto Dom Pixote</a>
7. <a href="https://www.instagram.com/perifasustentavel/">Instituto Perifa Sustentável</a>
8. <a href="https://energia.wwf.org.br"> World Wide Fund for Nature (WWF)</a>
9. <a href="https://www.gamba.org.br">Grupo Ambientalista da Bahia (GAMBA)</a>
10. <a href="https://ipe.org.br">Instituto de Pesquisas Ecológicas (IPE)</a>
11. <a href="https://iema.es.gov.br">Instituto Estadual de Meio Ambiente e Recursos Hídricos (IEMA)</a>
12. <a href="https://amigosdobem.org">Amigos Do Bem - Instituicao Nacional Contra a Fome e a Miseria</a>
13. <a href="https://ongverde.org">ONG Verde - Educação Ambiental, Agroecologia e Energias Renováveis</a>


### Bibliotecas

1. <a><a href="https://pt-br.react.dev/reference/react">React</a> - Documentação do React usada para auxíliar no sintaxe e inspiração de códigos.</a> 
2. <a><a href="https://openai.com/index/chatgpt/">ChatGPT</a> - Inteligência artificial usada para auxíliar na geração de códigos e assistência técnica.</a>
