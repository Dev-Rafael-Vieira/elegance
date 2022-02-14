import Head from 'next/head';
import Layout from '../components/Layout';
import Card from '../components/Card';
    var data = [

    {

    of:"0282349", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    setor: "Impressão",
    status: "Imprimindo",
    cor: "Marmorizado",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {
      
    of:"0285544", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    setor: "Impressão",
    status: "Imprimindo",
    cor: "Azul Animale",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0285545", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    setor: "PCP",
    status: "Aguardando",
    cor: "Happy Flowers",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    obs:"Talhar pontas de rolos primeiro",
    custo_total: "R$ 324,00",

    },
    {

    of:"0285569", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    setor: "Talhação",
    status: "Enfestando",
    cor: "Marmorizado",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0285678", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    setor: "Conferência",
    status: "Conferindo Partes",
    cor: "Leopardo Print",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0282366", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    setor: "Revisão",
    status: "Revisando Peças",
    cor: "Marmorizado",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {
      
    of:"0285645", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    setor: "Sublimação",
    setor_anterior: "PCP",
    status: "Transferindo",
    cor: "Azul Animale",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0285533", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    setor: "Impressão",
    status: "Aguardando",
    cor: "Happy Flowers",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0285599", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    setor: "Sublimação",
    status: "Aguardando",
    cor: "Marmorizado",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },
    {

    of:"0285609", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    setor: "Aumoxarifado",
    status: "Separando Aviamentos",
    cor: "Leopard Print",
    descricao: "BLUSA CIGANINHA COM MANGAS PRINCESA E A AMARRAÇÃO ELEGANTE NO DECOTE COM DETALHE DE BARBICACHO.COMPOSIÇÃO:97% POLIÉSTER 03% ELASTANO estampada com pentilho de ilhós e manga bufante",
    qtd:"72",
    tamanhos:"XGG: 13 | GG: 11 | G: 10 | M: 14 | P: 16 | PP: 8",
    data_entrada:"28/03/2022",
    data_saida:"13/04/2022",
    colecao:"OUTONO",
    fluxo: "PCP | DEP | TAL | SEP | IMP | SUB | COST | EMB",
    variante:"0898",
    consumo_tinta:"0.234ml",
    custo_impressao:"R$ 2,59",
    custo_sublimacao: "R$ 4,50",
    custo_total: "R$ 324,00",
    obs:"Talhar pontas de rolos primeiro",

    },


  ];
  
export default function Home() {
  
    return (
    <>

        <Layout>
            
            <Card ofs={data}/>
        </Layout>
    
    </>
  )
}
