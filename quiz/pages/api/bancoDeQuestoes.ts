import RespostaModel from "@/model/resposta";
import QuestaoModel from "../../model/questao";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como  "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(101, 'Qual é o maior planeta do nosso sistema solar?', [
        RespostaModel.errada('Marte'),
        RespostaModel.errada('Vênus'),
        RespostaModel.errada('Júpiter'),
        RespostaModel.certa('Saturno'),
    ]),
    new QuestaoModel(102, 'Qual elemento químico tem o símbolo "O"?', [
        RespostaModel.errada('Ouro'),
        RespostaModel.errada('Prata'),
        RespostaModel.errada('Ferro'),
        RespostaModel.certa('Oxigênio'),
    ]),
    new QuestaoModel(103, 'Quem foi o primeiro presidente do Brasil?', [
        RespostaModel.errada('Getúlio Vargas'),
        RespostaModel.errada('Juscelino Kubitschek'),
        RespostaModel.errada('Tancredo Neves'),
        RespostaModel.certa('Marechal Deodoro da Fonseca'),
    ]),
    new QuestaoModel(104, 'Qual é o rio mais longo do mundo?', [
        RespostaModel.errada('Rio Nilo'),
        RespostaModel.errada('Rio Amazonas'),
        RespostaModel.errada('Rio Amarelo'),
        RespostaModel.certa('Rio Nilo'),
    ]),
    new QuestaoModel(301, 'Qual é o maior deserto do mundo?', [
        RespostaModel.errada('Saara'),
        RespostaModel.errada('Deserto do Atacama'),
        RespostaModel.errada('Deserto do Kalahari'),
        RespostaModel.certa('Antártica'),
    ]),
    new QuestaoModel(302, 'Quem é conhecido como "o pai da psicanálise"?', [
        RespostaModel.errada('B. F. Skinner'),
        RespostaModel.errada('Carl Rogers'),
        RespostaModel.errada('Ivan Pavlov'),
        RespostaModel.certa('Sigmund Freud'),
    ]),
    new QuestaoModel(303, 'Qual é o país com a maior população do mundo?', [
        RespostaModel.errada('Índia'),
        RespostaModel.errada('Estados Unidos'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('China'),
    ]),
    new QuestaoModel(304, 'Em que ano ocorreu a Independência do Brasil?', [
        RespostaModel.errada('1808'),
        RespostaModel.errada('1822'),
        RespostaModel.errada('1848'),
        RespostaModel.certa('1822'),
    ]),
    new QuestaoModel(305, 'Quem escreveu "Romeu e Julieta"?', [
        RespostaModel.errada('Charles Dickens'),
        RespostaModel.errada('Jane Austen'),
        RespostaModel.errada('Homer'),
        RespostaModel.certa('William Shakespeare'),
    ]),
];

export default questoes;