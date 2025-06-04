'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// import { FaUserTie } from 'react-icons/fa'
import { bakers, slugify } from './bakers-data'

// Data for all master bakers, extracted from index.html
// const bakers = [
//   {
//     name: 'Wolfgang Weber',
//     role: 'Mitglied der Geschäftsleitung',
//     since: '1984',
//     department: 'Leitung Nachtschicht',
//     masterSince: '1991',
//     image: '/images/Meister_Wolfgang_Weber_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Wolfgang Weber – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'In meinem Beruf als Bäckermeister liebe ich es, Verantwortung zu übernehmen und jeden Tag hochwertige Backwaren für unsere Gäste herzustellen. Dabei ist es natürlich auch sehr spannend neue Produkte für unser Sortiment zu entwickeln.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Es ist schön für ein Familienunternehmen arbeiten zu können, bei dem wir alle per du sind. Es finden Mitarbeiterevents statt, die uns als papperts-Familie noch enger zusammenschweißen. Zusätzlich bringt mein Beruf immer wieder neue Herausforderungen mit sich, sodass es jederzeit eine gute Abwechslung gibt.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Neben den Vorteilen der persönlichen Weiterentwicklung, wollte ich einfach mein Fachwissen an die nächste Generation weitergeben.',
//       },
//     ],
//   },
//   {
//     name: 'Martin Schiller',
//     role: 'Mitglied der Geschäftsleitung',
//     since: '2008',
//     department: 'Leitung Tagschicht',
//     masterSince: '2003',
//     image: '/images/Meister_Martin_Schiller_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Martin Schiller – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Als Bäcker gibt es einfach keinen Stillstand. Ganz im Gegenteil: Mein Beruf lebt von ständigem Fortschritt, da die Kundenerwartungen an unser Backwaren-Sortiment unverändert hoch sind. Wir haben somit immer wieder neue spannende Möglichkeiten und Chancen.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Ganz einfach gesagt: weil es nie bei uns langweilig wird. Man merkt einfach, dass in unserer Backstube alles Hand in Hand geht und jeder alles für unser Handwerk gibt, um die Brötchen, Brote & Co. von morgen mit viel Liebe herzustellen.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Natürlich ist eine Weiterbildung wie die Meisterprüfung ein ambitioniertes Ziel, um in Zukunft auch sein Gehalt aufzubessern. Neben dem finanziellen Aspekt, hat mich aber auch die Herausforderung gereizt, um mein Wissen noch weiter zu vertiefen.',
//       },
//     ],
//   },
//   {
//     name: 'Thilo Müller',
//     role: '',
//     since: '1987',
//     department: 'Brot Nachtschicht',
//     masterSince: '1991',
//     image: '/images/Meister_Thilo_Mueller_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Thilo Müller – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'In unserem Bäckerhandwerk bieten wir nicht nur eine reichhaltige Auswahl an beliebten Backwaren, sondern überraschen unsere Kunden auch mit ständig neuen, kreativen Produkten. Diese kontinuierliche Innovationsfreude schafft nicht nur eine spannende Vielfalt, sondern stellt uns als Bäckermeister auch vor fortlaufend spannende Herausforderungen. Es wird als Bäcker also nie langweilig!',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Ich schätze die Arbeit hier sehr. Wir scheuen als Bäckerei nicht davor zurück, in unserer Backstube kreativ zu werden und neue Backwaren zu kreieren. Besonders beeindruckend finde ich, dass sich unsere Bäckerei nicht nur ambitionierte Ziele setzt, sondern diese mit echtem Teamgeist und Entschlossenheit auch konsequent umsetzt. Pappert geht überdies weit über den beruflichen Rahmen hinaus und setzt sich auch aktiv für das Wohlbefinden seiner Mitarbeiter ein – ein schönes Beispiel dafür ist unser traditionelles Oktoberfest, das nicht nur ein geselliges Highlight ist, sondern auch den Zusammenhalt unter uns Kollegen stärkt.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Das Absolvieren meiner Meisterprüfung war für mich eine persönliche Herausforderung, angetrieben von dem Wunsch, meine fachlichen Qualifikationen als Bäcker so zu erweitern, um mehr Verantwortung in unserer Backstube zu übernehmen.',
//       },
//     ],
//   },
//   {
//     name: 'Bernd Gerhardt',
//     role: '',
//     since: '2015',
//     department: 'Brötchen',
//     masterSince: '1992',
//     image: '/images/Meister_Bernd_Gerhardt_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Bernd Gerhardt – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Ich liebe es, Bäcker zu sein, weil der Beruf ständig hohe Ansprüche an meine Fähigkeiten stellt. Man ist also immer gefordert! Er erfordert aber nicht nur handwerkliches Geschick, sondern auch ein gutes Gespür für Geschmack und Qualität.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Mit über 150 Fachgeschäften und knapp 1.900 Mitarbeitern zählt papperts vermutlich zu den größeren Unternehmen in der Region. Das bringt für mich als Mitarbeiter eine gewisse berufliche und private Sicherheit. Außerdem schätze ich die Tradition, die mit unserer Familienbäckerei seit 1928 verbunden ist. Es ist etwas Besonderes, Teil einer langjährigen Geschichte zu sein und unser Handwerk immer wieder neuen jungen Generationen weiterzugeben.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Die Entscheidung, die Meisterprüfung abzulegen, war für mich eine Investition in meine berufliche Zukunft. Die Weiterbildung bot mir nochmals ein tieferes Verständnis für die feinen Nuancen unserer Backwaren, sondern auch die Möglichkeit, meine Fähigkeiten und Kenntnisse als Bäcker auf ein noch höheres Level zu bringen.',
//       },
//     ],
//   },
//   {
//     name: 'Bernd Müller',
//     role: '',
//     since: '2008',
//     department: 'Leitung Brot Tagschicht',
//     masterSince: '2007',
//     image: '/images/Meister_Bernd_Mueller_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Bernd Müller – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Es gibt viele Gründe, warum ich gerne Bäcker bin. Zum einen erfordert es eine gewisse Kreativität, aber auch viel Verständnis für Handwerk und fachliches Wissen, um Brot, Gebäck und andere Backwaren herzustellen.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Das Verhältnis zwischen den Kollegen und der Geschäftsleitung ist einfach sehr positiv. Es wird viel Wert darauf gelegt, auch neue Projekte und Ideen zu fördern. Außerdem wird man bei der beruflichen Weiterbildung unterstützt – bei mir zum Beispiel als Brotsommelier im Jahr 2020. Es ist toll, Teil eines Familienunternehmens zu sein, das sich immer Ziele setzt und dabei in ihre Mitarbeiter investiert.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Neben dem persönlichen Aspekt, dass ich mich gerne weiterbilde, trage ich auch als Bäckermeister zur Erhaltung und Weitergabe traditioneller Backtechniken sowie Rezepten bei. Zudem kann ich mit der Meisterprüfung die Qualität von handwerklich hergestellten Backwaren nochmals fördern.',
//       },
//     ],
//   },
//   {
//     name: 'Thorsten Weber',
//     role: '',
//     since: '2014',
//     department: 'Feingebäck',
//     masterSince: '2008',
//     image: '/images/Meister_Thorsten_Weber_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Thorsten Weber – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Mich faszinieren einfach die großen Stückzahlen, die wir täglich in unserer Backstube für unsere Gäste produzieren dürfen. Hierzu bedarf es regelmäßig einer sorgfältigen Organisation und Planung im Vorfeld.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Das persönliche Verhältnis zu Kollegen geht sogar bis hoch in die Geschäftsführung. Man spürt einfach, das Pappert wirklich ein Familienunternehmen ist. Hinzu kommt das große Angebot an Mitarbeiter-Benefits, die ich wirklich gerne in Anspruch nehme.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Mit der Meisterprüfung konnte ich meine Fähigkeiten sowie Expertise im Bäckerhandwerk erweitern. Das bietet mir nicht nur bessere berufliche Chancen, sondern ich konnte auch noch mehr Verantwortung bei Pappert übernehmen.',
//       },
//     ],
//   },
//   {
//     name: 'Florian Martin',
//     role: '',
//     since: '2004',
//     department: 'Leitung Konditorei',
//     masterSince: '2016',
//     image: '/images/Meister_Florian_Martin_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Florian Martin – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Das Arbeiten in einem funktionierenden Team sowie die Planung und Organisation der Produktionsabläufe.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Bei Pappert wird Familienunternehmen gelebt und man kann aktiv an der Gestaltung der Zukunft teilhaben.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Nachdem ich die Konditor- und Bäcker-Ausbildung abgeschlossen hatte, hatte ich bereits mit meinen Anfang 20 Jahren die Chance bekommen als Abteilungsleiter zu arbeiten. So war für mich der nächste logische Schritt die Meisterprüfung zu machen, um mich fachlich und persönlich weiterzubilden.',
//       },
//     ],
//   },
//   {
//     name: 'Sebastian Wiegand',
//     role: '',
//     since: '2016',
//     department: 'Brot Nachtschicht',
//     masterSince: '2023',
//     image: '/images/Meister_Sebastian_Wiegand_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Sebastian Wiegand – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Mich fasziniert das Ergebnis, welches man am Ende des Tages sieht. Es ist schön zu wissen, dass wir Menschen mit unseren Backwaren glücklich machen.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Der lockere Umgang mit Kollegen und Vorgesetzten, sowie die täglich Herausforderungen in meinem Job.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Es war eine wunderbare Möglichkeit, mein bereits vorhandenes Wissen im Bäckerhandwerk weiter zu vertiefen und mir zugleich viel Neues anzueignen. Natürlich erfüllt es mich auch mit Stolz, meine Expertise als Bäckermeister künftig an die kommenden Generationen weiterzugeben. Zudem freue ich mich darauf, mehr Verantwortung im Team zu übernehmen und meine Fachkompetenz zum Wohle des Unternehmens einzubringen.',
//       },
//     ],
//   },
//   {
//     name: 'Maximilian Pappert',
//     role: '',
//     since: '2018',
//     department: 'Brot',
//     masterSince: '2024',
//     image: '/images/Meister_Max_Pappert_der_Baeckerei_Pappert_aus_Poppenhausen-1536x1248.jpg',
//     alt: 'Max Pappert – Bäckermeister der Bäckerei Pappert aus Poppenhausen',
//     statements: [
//       {
//         label: 'Was mag ich besonders an meinem Job:',
//         text: 'Was ich an meinem Job als Bäcker besonders liebe, ist die unglaubliche Vielseitigkeit. Kein Tag gleicht dem anderen, und wir haben die Möglichkeit, in unserer Arbeit in der Backstube wirklich kreativ zu sein. Es ist einfach toll, das Ergebnis unserer Mühe direkt vor Augen zu haben – unsere gebackenen Brote. Und mal ehrlich: Es riecht hier nicht nur unglaublich gut, es schmeckt auch einfach.',
//       },
//       {
//         label: 'Warum arbeite ich gerne bei Pappert:',
//         text: 'Kurzum: Weil wir ein Familienunternehmen nicht nur auf dem Papier sind, sondern es wirklich leben. Mein Vater Bernd ist bereits die 7. Generation von Bäckern der pappertschen Familien, und für mich war es selbstverständlich, dann auch in diese Fußstapfen zu treten. Es fühlt sich einfach richtig an, ein Teil dieser Geschichte zu sein und das Handwerk, das unsere Familie schon so lange prägt, mit Leidenschaft weiterzuführen.',
//       },
//       {
//         label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
//         text: 'Die Entscheidung, die Meisterprüfung abzulegen, kam für mich aus dem Wunsch heraus, meine Fähigkeiten und Kenntnisse weiter zu verbessern. Ich wollte mich der Herausforderung stellen und noch tiefer in das Handwerk eintauchen. Unser Beruf entwickelt sich ständig weiter, und es ist mir wichtig, immer auf dem neuesten Stand zu sein. Die Meisterprüfung war aber auch ein toller Schritt für mich persönlich, um das Beste aus mir und meiner Arbeit herauszuholen.',
//       },
//     ],
//   },
// ]

// Helper to create slugs from names
// function slugify(name: string) {
//   return name
//     .toLowerCase()
//     .replace(/ä/g, 'ae')
//     .replace(/ö/g, 'oe')
//     .replace(/ü/g, 'ue')
//     .replace(/ß/g, 'ss')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '')
// }

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring' },
  }),
}

export default function MasterBakersPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      {/* Page header */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Unsere Meister aus der Backstube
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Die Gesichter hinter erstklassigem Handwerk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300"
        >
          Unsere 10 Bäckermeister in der Backstube in Poppenhausen sind wahre Künstler ihres Fachs.
          Mit jahrelanger Erfahrung und einer leidenschaftlichen Hingabe zum Bäckerhandwerk stellen
          Sie Tag für Tag und Nacht für Nacht unsere Vielfalt an Backwaren her. Dabei wenden sie mit
          viel Liebe ihre traditionellen und modernen Backmethoden an, in denen sie unsere
          wertvollen Zutaten genau zu dem verarbeiten, was wir am meisten lieben: Das frische Brot,
          Brötchen, Kuchenstück oder süße Gebäck in den etwa 160 papperts-Fachgeschäften.
          <br />
          Tauchen Sie ein in die Welt des Bäckerhandwerks und lernen Sie unsere Bäckermeister kennen
          – wir geben unserem Rhöner Handwerk ein Gesicht.
        </motion.p>
      </div>
      {/* Responsive grid of baker cards */}
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bakers.map((baker, i) => (
          <motion.div
            key={baker.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="flex flex-col overflow-hidden rounded-[25px] border border-[#FAD2E1] bg-white/90 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-[#2a2a2a] dark:bg-[#232323]/90"
            aria-label={`Bäckermeister: ${baker.name}`}
          >
            {/* Baker image */}
            <Image
              src={baker.image}
              alt={baker.alt}
              width={256}
              height={256}
              className="h-64 w-full rounded-t-[25px] object-cover shadow-md"
              loading={i < 2 ? 'eager' : 'lazy'}
              priority={i === 0}
            />
            {/* Baker main info */}
            <div className="flex flex-1 flex-col p-6">
              <h3
                className="mb-1 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {baker.name}
              </h3>
              <div className="mb-4 flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
                {baker.department && (
                  <span>
                    <strong>Abteilung:</strong> {baker.department}
                  </span>
                )}
                <span>
                  <strong>Bei Pappert seit:</strong> {baker.since}
                </span>
                <span>
                  <strong>Bäckermeister seit:</strong> {baker.masterSince}
                </span>
              </div>
              {/* Mehr Info Button */}
              <Link href={`/about/master-bakers/${slugify(baker.name)}`} passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-auto inline-block rounded-[20px] bg-[#EE0A24] px-6 py-3 text-center text-base font-semibold tracking-wide text-white shadow-md transition-all hover:bg-[#D72638] focus:ring-2 focus:ring-[#EE0A24]/40 focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  aria-label={`Mehr Info zu ${baker.name}`}
                >
                  Mehr Info
                </motion.a>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
