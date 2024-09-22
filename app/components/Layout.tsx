import { Link } from "@remix-run/react";
import React from "react";
import GitHubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-8">
      <div className="mx-auto max-w-5xl bg-white p-6 rounded-md">
        <header>
          <div className="flex justify-between items-center">
            <Link to="/" rel="home">
              <h1 className="text-4xl font-semibold text-gray-800">
                Rodolfo Silva
              </h1>
              <h2 className="text-sm text-gray-500">Software engineer</h2>
            </Link>

            <nav className="print:hidden">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    to="/"
                    aria-label="Ir para página inicial"
                    title="Início"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/curriculo"
                    aria-label="Veja o meu Currículo"
                    title="Currículo"
                  >
                    Currículo
                  </Link>
                </li>
                <li>
                  <a
                    href={`https://github.com/rodolfosilva`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Veja o meu Github"
                    title="Veja o meu GitHub"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/ro_dolfosilva`}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Veja o meu Twitter"
                    title="Veja o meu Twitter"
                  >
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer
          role="contentinfo"
          className="text-center text-sm text-gray-500 mt-8"
        >{`© ${currentYear}`}</footer>
      </div>
    </div>
  );
}
