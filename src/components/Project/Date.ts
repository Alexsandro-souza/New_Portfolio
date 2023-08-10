import {compras,
    gerenciador,
    portfolio,
    previsaoDoTempo,
    rastreador} from  '../../assets/img/index';


type typesProjects = {
    Title: string;
    Text: string;
    Github: string;
    Deploy: string;
}[];

export const ProjectsSlider : typesProjects = [
    {Title : 'Gerenciador financeiro', Text : 'Nesse projeto enfrentei os desafios de aplicar o aprendizado de Typescript. Apesar de momentos de bloqueios, encarei-os como oportunidades de aprender mais.', Github : 'https://github.com/Alexsandro-souza/gerenciador_de_despesas', Deploy : 'https://gerencie-suas-despesas.vercel.app/'},

    {Title : 'Previsão do tempo', Text : 'Esse foi o primeiro projeto em que consumir dados de uma API, utilizei foi a OpenWeather. Aprendi estudando a aula do ilustríssimo Matheus Battisti', Github : 'https://github.com/Alexsandro-souza/Previsao_do_tempo', Deploy : 'https://previsao-do-tempo-as3tg1llm-alexsandro-souza.vercel.app/'},

    {Title : 'Rastreador correios', Text : 'Este projeto foi parte de um desafio pessoal no qual meu objetivo era criar, de forma independente, um rastreador de pacotes dos Correios.', Github : 'https://github.com/Alexsandro-souza/Rastreamento_correios', Deploy : 'https://rastreamento-correios-ten.vercel.app/'},

    {Title : 'Portfólio', Text : 'Neste projeto, optei por apresentar alguns dos projetos que já concluí, demonstrando também a aplicação dos conhecimentos que adquiri ao longo de outras experiências.', Github : 'https://github.com/Alexsandro-souza/New_Portfolio', Deploy : ''},

    {Title : 'Carrinho de compras', Text : 'Nesse projeto tinha como objetivo cria um CRUD, utilizando apenas JavaScript, Css e HTML', Github : 'https://github.com/Alexsandro-souza/Aula/tree/master/carrinhoCompras', Deploy : 'https://aula-alexsandro-souza.vercel.app/'}
]


export const ImgSlider = [
    gerenciador,
    previsaoDoTempo,
    rastreador,
    portfolio,
    compras,        
    ]