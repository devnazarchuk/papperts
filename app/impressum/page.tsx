'use client'

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">IMPRESSUM</h1>

      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <section>
          <h2 className="mb-4 text-xl font-semibold">papperts GmbH</h2>
          <p>Bürgermeister-Ebert-Straße 38</p>
          <p>36124 Eichenzell</p>
          <div className="mt-4">
            <p>Fon: +49 (0)66 58 96 01 0</p>
            <p>Fax: +49 (0)66 58 96 01 20</p>
            <p>
              E-Mail:&nbsp;
              <a
                href="mailto:service@papperts.de"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                service@papperts.de
              </a>
            </p>
            <p>www.papperts.de</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Vertretungsberechtigte Geschäftsführer</h2>
          <p>Bernd Pappert, Manfred Klüber</p>
          <div className="mt-4">
            <p>Registergericht: Fulda</p>
            <p>Registernummer: HRB 8391</p>
            <p>St.-Nr.: 018 241 03195</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Konzeption, Gestaltung und technische Umsetzung
          </h2>
          <p>S/COMPANY – Die Markenagentur GmbH</p>
          <p>
            <a
              href="https://www.s-company.de"
              target="_blank"
              rel="noopener"
              className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
            >
              www.s-company.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Verweise & Links</h2>
          <p className="mb-4">
            Mit Urteil vom 12. Mai 1998 – 312 O 85/98 – &quot;Haftung für Links&quot; hat das
            Landgericht Hamburg entschieden, dass man durch die Anbringung eines Links die Inhalte
            der gelinkten Seite ggfs. mit zu verantworten hat.
          </p>
          <p className="mb-4">
            Dies kann – so das Gericht – nur dadurch verhindert werden, dass man sich ausdrücklich
            von diesen Inhalten distanziert. Hiermit distanzieren wir uns ausdrücklich von allen
            Inhalten aller gelinkten Seiten auf dieser Website und machen uns diese Inhalte nicht zu
            eigen.
          </p>
          <p>Diese Erklärung gilt für alle auf der Website angebrachten Links.</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Streitschlichtung</h2>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener"
              className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
            >
              {' '}
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
            verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Haftung für Inhalte</h2>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p className="mb-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Haftung für Links</h2>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>
          <p className="mb-4">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
            überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Das Impressum ist auch auf folgenden Seiten gültig:
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <a
                href="https://www.facebook.com/papperts"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                www.facebook.com/papperts
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fitnessbaecker"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                www.facebook.com/fitnessbaecker
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/baeckerei_pappert"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                www.instagram.com/baeckerei_pappert
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCONK8AduFQUjauxdQgfPwuQ"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                www.youtube.com/channel/UCONK8AduFQUjauxdQgfPwuQ
              </a>
            </li>
            <li>
              <a
                href="http://papperts.tumblr.com"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                http://papperts.tumblr.com
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@papperts_baeckerei"
                target="_blank"
                rel="noopener"
                className="text-[#D72638] hover:underline dark:text-[#FFA5A5]"
              >
                https://www.tiktok.com/@papperts_baeckerei
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
