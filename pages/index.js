import Head from 'next/head';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Modal from '../components/Modal';
    var data = [

    {

    of:"0282349", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    setor: "Impressão",
    status: "Imprimindo",

    },
    {
      
    of:"0285544", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    setor: "Impressão",
    status: "Imprimindo",

    },
    {

    of:"0285545", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    setor: "PCP",
    status: "Aguardando",

    },
    {

    of:"0285569", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    setor: "Talhação",
    status: "Enfestando",

    },
    {

    of:"0285678", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    setor: "Conferência",
    status: "Conferindo Partes",

    },
    {

    of:"0282366", 
    referencia: "0323344",
    img: "/images/0323344.jpg",
    impressora: "Mimaki",
    prioridade_num: "3",
    setor: "Revisão",
    status: "Revisando Peças",

    },
    {
      
    of:"0285645", 
    referencia: "0211234",
    img: "/images/0211234.jpg",
    impressora: "Firejet",
    prioridade_num: "2",
    setor: "Sublimação",
    status: "Transferindo",

    },
    {

    of:"0285533", 
    referencia: "0332277",
    img: "/images/0332277.jpg",
    impressora: "Mimaki",
    prioridade_num: "1",
    setor: "Impressão",
    status: "Aguardando",

    },
    {

    of:"0285599", 
    referencia: "0336544",
    img: "/images/0336544.jpg",
    impressora: "Mimaki",
    prioridade_num: "4",
    setor: "Sublimação",
    status: "Aguardando",

    },
    {

    of:"0285609", 
    referencia: "0518263",
    img: "/images/0518263.jpg",
    impressora: "Mimaki",
    prioridade_num: "2",
    setor: "Aumoxarifado",
    status: "Separando Aviamentos",

    },


  ];
  
export default function Home() {
  
    return (
    <>

        <Layout>
            <Card ofs={data}/>
            <Modal/>
        </Layout>
    </>
  )
}
