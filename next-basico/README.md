* Dentro do aqui _app.jsx que colocaremos os css que serão utilizados de forma global.

* O "_" não tem nenhum significado especial no framework, podemos inclusive criar rotas com underline no nome.

* Diferente de um projeto padrão do react, não temos um arquivo index.html nos projetos de Next.

* Podemos importar o head dentro do next, conforme abaixo:
import Head from 'next/head'
Dessa forma aplicar mudanças em metatags, links, titles...

* Nossas rotas podem ser uma pasta contendo um arquivos index.
pages > rotas > index.html
para acessar fica: 
localhost:3000/rotas 

* As rotas criadas são case sensitive. Por exemplo: 
Se eu criar um arquivo em page chamado "outraRota"
a url deve ser exatamente "outraRota", se usarmos "outrarota" retornará 404.

* Podemos utilizar o componente <Link> do next para navegar entre rotas