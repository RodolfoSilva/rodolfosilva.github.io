import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProfessionalExperience from '../components/ProfessionalExperience'
import ExtracurricularKnowledge from '../components/ExtracurricularKnowledge'

const CurriculoPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Currículo" />
    <h1>Rodolfo da Silva Santos</h1>

    <p>
      Brasileiro, Casado, {~~(Date.now() / 31557600000 - 22.847592972849647)} anos Salvador - BA
    </p>

    <p>
      <strong>Celular:</strong> +55 71 98366-1106<br />
      <strong>E­mail:</strong> contato@rodolfosilva.com<br />
      <strong>Web:</strong> <a href="http://rodolfosilva.com">rodolfosilva.com</a><br />
      <strong>GitHub:</strong> <a href="https://github.com/RodolfoSilva">github.com/RodolfoSilva</a>
    </p>

    <h3 id="objetivo">Objetivo</h3>

    <p>Desenvolvedor Sênior</p>

    <h3 id="formação-acadêmica">Formação acadêmica</h3>

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

    <h3 id="conhecimentos-extracurriculares">Conhecimentos extracurriculares</h3>

    <ul>
      <li>
        <ExtracurricularKnowledge
          title="Linguagens de programação"
          description="PHP, Python, JavaScript, Java, Node.js, HTML, CSS"
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
          title="IDE"
          description="VS Code, Atom, Sublime Text, VIM, PyCharm"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Banco de Dados"
          description="PostgreSQL, MariaDB/MySQL, SQLite, MongoDB"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Frameworks/Bibliotecas"
          description="Flask, Django, CodeIgniter, CakePHP, React, React Native, Ionic, Ionic 2, Bootstrap, Express, Angular 2, Angular.js, jQuery, Jinja2/Twig/Swig"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Sistema Operacional"
          description="Linux"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Gestor de Projetos"
          description="Jira, Redmine, Stash, GitLab, GitHub, Bitbucket"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Controle de Versão"
          description="GIT, Subversion"
        />
      </li>
      <li>
        <ExtracurricularKnowledge
          title="Ferramentas de Teste"
          description="unittest(Python), PHPUnit, jest, jasmine, karma"
        />
      </li>
    </ul>

    <h3 id="experiência-profissional">Experiência profissional</h3>

    <ul>
      <li>
        <ProfessionalExperience
          company="Agilize - Contabilidade Online"
          period="desde Julho de 2016"
          role="Software engineer"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="Capgemini"
          period="de Julho de 2015 à Junho de 2016"
          role="Consultor de Tecnologia"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="EEEMBA - Escola de Engenharia Eletromecânica Bahia"
          period="de Agosto de 2014 à Junho de 2015"
          role="Programador"
        />
      </li>
      <li>
        <ProfessionalExperience
          company=".COMPOS"
          period="de Novembro de 2012 a Agosto de 2014"
          role="Programador"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="JCL – Tecnologia"
          period="de Julho de 2012 a Novembro de 2012"
          role="Programador"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="EEEMBA - Escola de Engenharia Eletromecânica Bahia"
          period="de Janeiro de 2011 a Julho de 2012 (Estagio/CLT)"
          role="Programador"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="MegaDesign"
          period="de Novembro de 2009 a Dezembro de 2010"
          role="Programador"
        />
      </li>
      <li>
        <ProfessionalExperience
          company="Empacser Soft"
          period="2008"
          role="Programador"
        />
      </li>
    </ul>

    <Link to="/">Ir para página inicial</Link>
  </Layout>
)

export default CurriculoPage
