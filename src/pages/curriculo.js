import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProfessionalExperience from '../components/ProfessionalExperience'
import ExtracurricularKnowledge from '../components/ExtracurricularKnowledge'
import styles from './curriculo.module.css'
import { MyAge } from '../components/MyAge'
import { Timeline } from '../components/Timeline'
import { Item } from '../components/Timeline/Item'

const CurriculoPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Currículo" />
    <h1>Rodolfo da Silva Santos</h1>

    <div>
      Brasileiro, Casado, <MyAge /> anos Salvador - BA
    </div>

    <br />

    <div>
      <div className={styles.contactNumber}>
        <strong>Celular:</strong>{' '}<span>+55 71 98366-1106</span>
      </div>
      <div>
        <strong>E­mail:</strong>{' '}<span>contato@rodolfosilva.com</span>
      </div>
      <div>
        <strong>Web:</strong>{' '}<a href='http://rodolfosilva.com'>rodolfosilva.com</a>
      </div>
      <div>
        <strong>GitHub:</strong>{' '}<a href='https://github.com/RodolfoSilva'>github.com/RodolfoSilva</a>
      </div>
    </div>

    <h2 className={styles.subTitle} id="objetivo">Objetivo</h2>

    <p>Desenvolvedor Sênior</p>

    <h2 className={styles.subTitle} id="formação-acadêmica">Formação acadêmica</h2>

    <ul>
      <li>Graduado em Sistemas da Informação
        <ul>
          <li>Faculdade Ruy Barbosa</li>
          <li>Concluído em 2017</li>
        </ul>
      </li>
      <li>Técnico em Tecnologia da Informação
        <ul>
          <li>EEEMBA - Escola de Engenharia Eletromecânica da Bahia</li>
          <li>Concluído em 2011</li>
        </ul>
      </li>
    </ul>

    <h2 className={styles.subTitle} id="conhecimentos-extracurriculares">Conhecimentos extracurriculares</h2>

    <ul>
      <li>
        <ExtracurricularKnowledge
          title='Linguagens de programação'
          description='PHP, Python, JavaScript, Java, Node.js, HTML, CSS'
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Pré-processadores"
          description="SASS, LESS"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title='Banco de Dados'
          description='PostgreSQL, MariaDB/MySQL, SQLite, MongoDB'
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Frameworks/Bibliotecas"
          description="Flask, Django, CodeIgniter, CakePHP, React, React Native, Ionic, Ionic 2, Bootstrap, Express, Angular 2, Angular.js, jQuery, Jinja2/Twig/Swig"
        />
      </li>
    </ul>

    <h2 className={styles.subTitle} id="experiência-profissional">Experiência profissional</h2>

    <Timeline>
      <Item
        title="Agilize - Contabilidade Online"
        subTitle="Software engineer"
        startAt="2016-07-01T03:00:00.000Z"
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
  </Layout>
)

export default CurriculoPage
