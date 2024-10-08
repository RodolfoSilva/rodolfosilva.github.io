import React from "react";
// import Layout from '../components/layout';
// import SEO from '../components/SEO';
import MyAge from "../components/MyAge";
import Timeline from "../components/Timeline";
import Item from "../components/TimelineItem";

export default function CurriculoPage() {
  return (
    <>
      <h1 className="text-xl mt-4">Rodolfo da Silva Santos</h1>

      <div className="text-sm text-gray-700">
        Brasileiro, Casado, <MyAge /> anos Salvador - BA
      </div>

      <br />

      <div className="text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="text-gray-800 font-medium">
          <strong className="sm:block text-gray-700 font-normal text-xs">
            Celular:
          </strong>{" "}
          +55 71 98366-1106
        </div>
        <div className="text-gray-800 font-medium">
          <strong className="sm:block text-gray-700 font-normal text-xs">
            E­mail:
          </strong>{" "}
          contato@rodolfosilva.com
        </div>
        <div className="text-gray-800 font-medium">
          <strong className="sm:block text-gray-700 font-normal text-xs">
            Web:
          </strong>{" "}
          <a href="http://rodolfosilva.com">rodolfosilva.com</a>
        </div>
        <div className="text-gray-800 font-medium">
          <strong className="sm:block text-gray-700 font-normal text-xs">
            GitHub:
          </strong>{" "}
          <a href="https://github.com/RodolfoSilva">github.com/RodolfoSilva</a>
        </div>
      </div>

      <h2 className="text-lg text-gray-800 mt-8 mb-4" id="formação-acadêmica">
        Formação acadêmica
      </h2>

      <Timeline>
        <Item
          title="Graduado em Sistemas da Informação"
          subTitle="Faculdade Ruy Barbosa"
          startAt="2012-01-01T03:00:00.000Z"
          endAt="2017-07-01T03:00:00.000Z"
        />
        <Item
          title="Técnico em Tecnologia da Informação"
          subTitle="EEEMBA - Escola de Engenharia Eletromecânica da Bahia"
          startAt="2011-01-01T03:00:00.000Z"
          endAt="2011-12-31T02:59:59.000Z"
        />
      </Timeline>

      <h2
        className="text-lg text-gray-800 mt-8 mb-4"
        id="conhecimentos-extracurriculares"
      >
        Conhecimentos extracurriculares
      </h2>
      <Timeline>
        <Item title="Linguagens de programação">
          JavaScript, Node.js, TypeScript, PHP, GraphQL, Python, Java, HTML, CSS
        </Item>
        <Item title="Pré-processadores">SASS, LESS</Item>
        <Item title="Banco de Dados">
          PostgreSQL, MariaDB/MySQL, SQLite, MongoDB
        </Item>
        <Item title="Frameworks/Bibliotecas">
          React, React Native, TypeORM, TypeGraphQL, Flask, Django, CodeIgniter,
          Typo3FLOW/NeosFLOW, Bootstrap, Express, jQuery
        </Item>
      </Timeline>

      <h2
        className="text-lg text-gray-800 mt-8 mb-4"
        id="experiência-profissional"
      >
        Experiência profissional
      </h2>

      <Timeline>
        <Item
          title="Infleet"
          subTitle="Chief Technology Officer"
          startAt="2021-06-30T03:00:00.000Z"
        />
        <Item
          title="Infleet"
          subTitle="Software engineer"
          startAt="2020-01-01T03:00:00.000Z"
          endAt="2021-06-30T03:00:00.000Z"
        />
        <Item
          title="Agilize - Contabilidade Online"
          subTitle="Software engineer"
          startAt="2016-07-01T03:00:00.000Z"
          endAt="2019-12-31T02:59:59.000Z"
        />
        <Item
          title="Capgemini"
          subTitle="Consultor de Tecnologia"
          startAt="2015-06-06T03:00:00.000Z"
          endAt="2016-07-01T02:59:59.000Z"
        />
        <Item
          title="EEEMBA - Escola de Engenharia Eletromecânica Bahia"
          subTitle="Programador"
          startAt="2014-08-06T03:00:00.000Z"
          endAt="2015-06-29T02:59:59.000Z"
        />
        <Item
          title=".COMPOS"
          subTitle="Programador"
          startAt="2012-11-23T03:00:00.000Z"
          endAt="2014-08-06T02:59:59.000Z"
        />
        <Item
          title="JCL – Tecnologia"
          subTitle="Programador"
          startAt="2012-07-11T03:00:00.000Z"
          endAt="2012-11-18T02:59:59.000Z"
        />
        <Item
          title="EEEMBA - Escola de Engenharia Eletromecânica Bahia"
          subTitle="Programador"
          startAt="2011-01-07T03:00:00.000Z"
          endAt="2012-07-11T02:59:59.000Z"
        />
        <Item
          title="MegaDesign"
          subTitle="Programador"
          startAt="2009-11-01T03:00:00.000Z"
          endAt="2011-01-01T02:59:59.000Z"
        />
        <Item
          title="Empacser Soft"
          subTitle="Programador"
          startAt="2008-01-01T03:00:00.000Z"
          endAt="2009-01-01T02:59:59.000Z"
        />
      </Timeline>
    </>
  );
}
