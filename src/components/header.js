import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Helmet from "react-helmet";
import Logo from "../images/expertise/expertise.svg";
import Schriftzug from "../images/expertise/expertise.itana.de.svg";
function Header() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-itana-blue align-baseline">
      <div className="flex flex-wrap items-center justify-between  md:p-8 mr-2 p-4">
        <Helmet>
          <script
            id="usercentrics-cmp"
            data-settings-id="oVM0OC3Mr"
            src="https://app.usercentrics.eu/browser-ui/latest/bundle.js"
            defer
          ></script>
        </Helmet>
        <Link to="/" className=" flex items-center no-underline text-white">
          <img
            src={Logo}
            alt="Icon"
            className="w-16 mr-4 p-2 bg-white rounded-full"
          ></img>
          <img src={Schriftzug} alt="Icon" className="w-48 xl:w-64 mr-4"></img>
        </Link>

        <button
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-white xs:mt-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          <div className="">
            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-4 no-underline text-white"
            >
              Home
            </Link>
            <Link
              to="/beratung/"
              className="block md:inline-block mt-4 md:mt-0 mr-4 no-underline text-white"
            >
              IT-Beratung
            </Link>

            <Link
              to="/kontakt/"
              className="block md:inline-block mt-4 md:mt-0 mr-4 no-underline text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
