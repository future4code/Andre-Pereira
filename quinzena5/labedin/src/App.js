import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import { Endereco, Email } from "./components/Contato/Contato";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQErUeVcdJ06zg/profile-displayphoto-shrink_800_800/0/1601901713243?e=1631750400&v=beta&t=nM07kAuh6kt4_XuDxLWHEEeXGj6DQX3nMXfvV1G2G6o"
          nome="André Luiz Gomes Pereira"
          descricao="Analiso e auxilio no desenvolvimento de soluções de projetos de sistemas ERP, levanto requisitos, mapeio processos e realizo modelagem de dados, com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Analiso o desempenho de sistemas implantados, soluciono problemas técnicos e elabora manuais. Estou em fase de transição, buscando melhoria continua na área de tecnologia, no entanto busco oportunidade em Desenvolvimento Front-end React."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <Email
          logoEmail="https://image.flaticon.com/icons/png/512/281/281769.png"
          descricao="andregomesenator@gmail.com"
        />
        <Endereco
          logoEndereco="https://image.flaticon.com/icons/png/512/1041/1041897.png"
          descricao="Rua Aracatu 622, Eixo Sul, Teixeira de Freitas - BA"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGdJgR4mJc_4A/company-logo_200_200/0/1570503076828?e=1634774400&v=beta&t=Peo_BJaA1jUBL-QmCLyGU8XPL45DgKzuiJ_CXyWD0ho"
          nome="Adsoft Gestão Empresarial"
          descricao="Desenvolvendo soluções para o seu dia a dia!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          link="https://www.facebook.com"
          texto="facebook/andrekalel"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          link="https://www.twitter.com"
          texto="@_andreluizgomes"
        />
      </div>
    </div>
  );
}

export default App;
