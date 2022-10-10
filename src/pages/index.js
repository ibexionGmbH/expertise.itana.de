import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Logo from "../images/expertise/expertise.svg";

const Section = () => (
  <div className="py-12 bg-white">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <img src={Logo} alt="Icon" className="w-16 mr-4 float-right" />

        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          IT-Gutachten vom Sachverständigenbüro Weißleder
        </h1>
        <p className="mt-4 max-w-7xl text-xl leading-7 text-gray-500 lg:mx-auto text-left">
          Unser Leistungsspektrum umfasst Analyse, Beweissicherung, Expertisen,
          EDV-Gutachten, Wertgutachten, Schiedsgutachten und Mediation.Im
          Auftrag von Gerichten, Versicherungen und privatwirtschaftlichen
          Auftraggebern erarbeiten wir IT-Gutachten in den Bereichen:
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mt-10 lg:mt-0">
            <div className="flex">
              <div className="ml-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Kompetenzen
                </h2>

                <ul className="list-disc mt-2 text-base leading-6 text-gray-500">
                  <li>
                    Beratung bei der Erstellung von Pflichtenheften von
                    IT-Projekten
                  </li>
                  <li>
                    Beratung für die Planung und den Betrieb von IT-Systemen
                    sowie deren Umfeld
                  </li>
                  <li>Schadenfeststellung nach Ursache, Umfang und Höhe:</li>
                  <li>
                    Ursachen: Brand, Wasser, Überspannung/Blitz, Fehlbedienung,
                    unsachgemäße Handhabung, Transport
                  </li>
                  <li>
                    Auswirkungen: Hardware, Software, Betriebsunterbrechungen,
                    sonstige Schäden
                  </li>
                  <li>
                    Bewertung, Schadenmanagement, Schadensprävention,
                    Risikoanalysen
                  </li>
                  <li>
                    Erstellung von Gutachten für Gerichte, Versicherungen und
                    Firmen
                  </li>
                  <li>
                    Schlichtung und Mediation bei problematischen IT-Projekten
                  </li>
                  <li>
                    Untersuchungen von Server-, Storage, RAID-Systemen und
                    aktiven Netzwerkkomponenten
                  </li>
                  <li>
                    Sicherheit in Netzen (Firewalls, Router, Server, Clients)
                  </li>
                  <li>
                    Untersuchung von Apple Mac OS X, Microsoft Windows und
                    Linux/UNIX-Systemen.
                  </li>
                  <li>
                    Überprüfung von Geldspielgeräten gemäß §7 SpielV zur
                    Verlängerung der Aufstelldauer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex">
              <div className="ml-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Computer Forensik
                </h2>
                <div className="text-base leading-6 text-gray-500">
                  <p className="mt-2 ">
                    Unter Computer Forensik wird die Untersuchung von Vorfällen
                    im Zusammenhang mit IT-Systemen verstanden. Mit Hilfe
                    forensischer Untersuchungen werden Spuren erfasst und
                    sichergestellt, die zur Aufklärung von Tatbeständen dienen
                    und Täter überführen können. Forensische Untersuchungen
                    beziehen unter anderem Datenträger, Speicherinhalte und
                    Netzwerkverkehr ein. Folgende Grundsätze sind bei jeder
                    forensischen Untersuchung von jedem Gutachter zwingend zu
                    berücksichtigen:
                  </p>
                  <ul className="list-disc ">
                    <li>Datenverluste minimieren</li>
                    <li>Nach Möglichkeit alle vorhandenen Daten aufzeichnen</li>
                    <li>Nichts verändern</li>
                    <li>Analysen stets auf Kopien durchführen</li>
                    <li>Ergebnisse reproduzierbar präsentieren</li>
                  </ul>
                  <p className="mt-2">
                    Untersuchungen nach diesen Grundsätzen werden von uns im
                    Straf- und Zivilverfahren, sowie für private Auftraggeber
                    durchgeführt. Sollten Sie Fragen dazu haben oder Hilfe
                    benötigen stehen wir Ihnen gerne mit Rat und Tat zur
                    Verfügung.
                  </p>
                  <p className="mt-2">
                    Computerforensik oder digitale Forensik ist heute auch bei
                    der Bekämpfung „herkömmlicher“ Verbrechen von erheblicher
                    Bedeutung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex">
              <div className="ml-4">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Leistungsspektrum
                </h2>
                <ul className="list-disc text-gray-500">
                  <li>Hardware</li>
                  <li>Software</li>
                  <li>Datenschutz</li>
                  <li>Beweissicherung</li>
                  <li>E-Mail</li>
                  <li>Internet</li>
                  <li>Telekommunikation</li>
                  <li>Datensicherung</li>
                  <li>Mobile Geräte</li>
                  <li>RAID Systeme</li>
                  <li>Storage</li>
                  <li>Server</li>
                  <li>Firewall</li>
                  <li>Appliance</li>
                  <li>Router</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function index() {
  return (
    <Layout>
      <SEO
        title="IT Gutachten🥈 Beweissicherung | IT Forensik - Itana GmbH"
        description="IT-Gutachten im Auftrag von Gerichten und Versicherungen ✅ professionell und diskret ✅ Spurenanalyse, Beweissicherung ✅ Jetzt anrufen ☎️ +49 711 49066 450"
      />
      <Section />
    </Layout>
  );
}
