'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'

import { useLanguageStore } from '@/app/store/languageStore'

import { bakers, slugify } from '../bakers-data'

type Translations = {
  de: {
    backToOverview: string
    department: string
    since: string
    masterSince: string
    roles: {
      management: string
    }
    departments: {
      nightShift: string
      dayShift: string
      bread: string
      breadNightShift: string
      breadDayShift: string
      rolls: string
      pastry: string
      confectionery: string
    }
    statements: {
      jobLove: string
      pappertLove: string
      masterExam: string
    }
    statementTexts: {
      [key: string]: {
        jobLove: string
        pappertLove: string
        masterExam: string
      }
    }
  }
  en: {
    backToOverview: string
    department: string
    since: string
    masterSince: string
    roles: {
      management: string
    }
    departments: {
      nightShift: string
      dayShift: string
      bread: string
      breadNightShift: string
      breadDayShift: string
      rolls: string
      pastry: string
      confectionery: string
    }
    statements: {
      jobLove: string
      pappertLove: string
      masterExam: string
    }
    statementTexts: {
      [key: string]: {
        jobLove: string
        pappertLove: string
        masterExam: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    backToOverview: 'Zurück zur Übersicht',
    department: 'Abteilung',
    since: 'Bei Pappert seit',
    masterSince: 'Bäckermeister seit',
    roles: {
      management: 'Mitglied der Geschäftsleitung',
    },
    departments: {
      nightShift: 'Leitung Nachtschicht',
      dayShift: 'Leitung Tagschicht',
      bread: 'Brot',
      breadNightShift: 'Brot Nachtschicht',
      breadDayShift: 'Leitung Brot Tagschicht',
      rolls: 'Brötchen',
      pastry: 'Feingebäck',
      confectionery: 'Leitung Konditorei',
    },
    statements: {
      jobLove: 'Was mag ich besonders an meinem Job',
      pappertLove: 'Warum arbeite ich gerne bei Pappert',
      masterExam: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen',
    },
    statementTexts: {
      'Wolfgang Weber': {
        jobLove:
          'In meinem Beruf als Bäckermeister liebe ich es, Verantwortung zu übernehmen und jeden Tag hochwertige Backwaren für unsere Gäste herzustellen. Dabei ist es natürlich auch sehr spannend neue Produkte für unser Sortiment zu entwickeln.',
        pappertLove:
          'Es ist schön für ein Familienunternehmen arbeiten zu können, bei dem wir alle per du sind. Es finden Mitarbeiterevents statt, die uns als papperts-Familie noch enger zusammenschweißen. Zusätzlich bringt mein Beruf immer wieder neue Herausforderungen mit sich, sodass es jederzeit eine gute Abwechslung gibt.',
        masterExam:
          'Neben den Vorteilen der persönlichen Weiterentwicklung, wollte ich einfach mein Fachwissen an die nächste Generation weitergeben.',
      },
      'Martin Schiller': {
        jobLove:
          'Als Bäcker gibt es einfach keinen Stillstand. Ganz im Gegenteil: Mein Beruf lebt von ständigem Fortschritt, da die Kundenerwartungen an unser Backwaren-Sortiment unverändert hoch sind. Wir haben somit immer wieder neue spannende Möglichkeiten und Chancen.',
        pappertLove:
          'Ganz einfach gesagt: weil es nie bei uns langweilig wird. Man merkt einfach, dass in unserer Backstube alles Hand in Hand geht und jeder alles für unser Handwerk gibt, um die Brötchen, Brote & Co. von morgen mit viel Liebe herzustellen.',
        masterExam:
          'Natürlich ist eine Weiterbildung wie die Meisterprüfung ein ambitioniertes Ziel, um in Zukunft auch sein Gehalt aufzubessern. Neben dem finanziellen Aspekt, hat mich aber auch die Herausforderung gereizt, um mein Wissen noch weiter zu vertiefen.',
      },
      'Thilo Müller': {
        jobLove:
          'In unserem Bäckerhandwerk bieten wir nicht nur eine reichhaltige Auswahl an beliebten Backwaren, sondern überraschen unsere Kunden auch mit ständig neuen, kreativen Produkten. Diese kontinuierliche Innovationsfreude schafft nicht nur eine spannende Vielfalt, sondern stellt uns als Bäckermeister auch vor fortlaufend spannende Herausforderungen. Es wird als Bäcker also nie langweilig!',
        pappertLove:
          'Ich schätze die Arbeit hier sehr. Wir scheuen als Bäckerei nicht davor zurück, in unserer Backstube kreativ zu werden und neue Backwaren zu kreieren. Besonders beeindruckend finde ich, dass sich unsere Bäckerei nicht nur ambitionierte Ziele setzt, sondern diese mit echtem Teamgeist und Entschlossenheit auch konsequent umsetzt. Pappert geht überdies weit über den beruflichen Rahmen hinaus und setzt sich auch aktiv für das Wohlbefinden seiner Mitarbeiter ein – ein schönes Beispiel dafür ist unser traditionelles Oktoberfest, das nicht nur ein geselliges Highlight ist, sondern auch den Zusammenhalt unter uns Kollegen stärkt.',
        masterExam:
          'Das Absolvieren meiner Meisterprüfung war für mich eine persönliche Herausforderung, angetrieben von dem Wunsch, meine fachlichen Qualifikationen als Bäcker so zu erweitern, um mehr Verantwortung in unserer Backstube zu übernehmen.',
      },
      'Bernd Gerhardt': {
        jobLove:
          'Ich liebe es, Bäcker zu sein, weil der Beruf ständig hohe Ansprüche an meine Fähigkeiten stellt. Man ist also immer gefordert! Er erfordert aber nicht nur handwerkliches Geschick, sondern auch ein gutes Gespür für Geschmack und Qualität.',
        pappertLove:
          'Mit über 150 Fachgeschäften und knapp 1.900 Mitarbeitern zählt papperts vermutlich zu den größeren Unternehmen in der Region. Das bringt für mich als Mitarbeiter eine gewisse berufliche und private Sicherheit. Außerdem schätze ich die Tradition, die mit unserer Familienbäckerei seit 1928 verbunden ist. Es ist etwas Besonderes, Teil einer langjährigen Geschichte zu sein und unser Handwerk immer wieder neuen jungen Generationen weiterzugeben.',
        masterExam:
          'Die Entscheidung, die Meisterprüfung abzulegen, war für mich eine Investition in meine berufliche Zukunft. Die Weiterbildung bot mir nochmals ein tieferes Verständnis für die feinen Nuancen unserer Backwaren, sondern auch die Möglichkeit, meine Fähigkeiten und Kenntnisse als Bäcker auf ein noch höheres Level zu bringen.',
      },
      'Bernd Müller': {
        jobLove:
          'Es gibt viele Gründe, warum ich gerne Bäcker bin. Zum einen erfordert es eine gewisse Kreativität, aber auch viel Verständnis für Handwerk und fachliches Wissen, um Brot, Gebäck und andere Backwaren herzustellen.',
        pappertLove:
          'Das Verhältnis zwischen den Kollegen und der Geschäftsleitung ist einfach sehr positiv. Es wird viel Wert darauf gelegt, auch neue Projekte und Ideen zu fördern. Außerdem wird man bei der beruflichen Weiterbildung unterstützt – bei mir zum Beispiel als Brotsommelier im Jahr 2020. Es ist toll, Teil eines Familienunternehmens zu sein, das sich immer Ziele setzt und dabei in ihre Mitarbeiter investiert.',
        masterExam:
          'Neben dem persönlichen Aspekt, dass ich mich gerne weiterbilde, trage ich auch als Bäckermeister zur Erhaltung und Weitergabe traditioneller Backtechniken sowie Rezepten bei. Zudem kann ich mit der Meisterprüfung die Qualität von handwerklich hergestellten Backwaren nochmals fördern.',
      },
      'Thorsten Weber': {
        jobLove:
          'Mich faszinieren einfach die großen Stückzahlen, die wir täglich in unserer Backstube für unsere Gäste produzieren dürfen. Hierzu bedarf es regelmäßig einer sorgfältigen Organisation und Planung im Vorfeld.',
        pappertLove:
          'Das persönliche Verhältnis zu Kollegen geht sogar bis hoch in die Geschäftsführung. Man spürt einfach, das Pappert wirklich ein Familienunternehmen ist. Hinzu kommt das große Angebot an Mitarbeiter-Benefits, die ich wirklich gerne in Anspruch nehme.',
        masterExam:
          'Mit der Meisterprüfung konnte ich meine Fähigkeiten sowie Expertise im Bäckerhandwerk erweitern. Das bietet mir nicht nur bessere berufliche Chancen, sondern ich konnte auch noch mehr Verantwortung bei Pappert übernehmen.',
      },
      'Florian Martin': {
        jobLove:
          'Das Arbeiten in einem funktionierenden Team sowie die Planung und Organisation der Produktionsabläufe.',
        pappertLove:
          'Bei Pappert wird Familienunternehmen gelebt und man kann aktiv an der Gestaltung der Zukunft teilhaben.',
        masterExam:
          'Nachdem ich die Konditor- und Bäcker-Ausbildung abgeschlossen hatte, hatte ich bereits mit meinen Anfang 20 Jahren die Chance bekommen als Abteilungsleiter zu arbeiten. So war für mich der nächste logische Schritt die Meisterprüfung zu machen, um mich fachlich und persönlich weiterzubilden.',
      },
      'Sebastian Wiegand': {
        jobLove:
          'Mich fasziniert das Ergebnis, welches man am Ende des Tages sieht. Es ist schön zu wissen, dass wir Menschen mit unseren Backwaren glücklich machen.',
        pappertLove:
          'Der lockere Umgang mit Kollegen und Vorgesetzten, sowie die täglich Herausforderungen in meinem Job.',
        masterExam:
          'Es war eine wunderbare Möglichkeit, mein bereits vorhandenes Wissen im Bäckerhandwerk weiter zu vertiefen und mir zugleich viel Neues anzueignen. Natürlich erfüllt es mich auch mit Stolz, meine Expertise als Bäckermeister künftig an die kommenden Generationen weiterzugeben. Zudem freue ich mich darauf, mehr Verantwortung im Team zu übernehmen und meine Fachkompetenz zum Wohle des Unternehmens einzubringen.',
      },
      'Maximilian Pappert': {
        jobLove:
          'Was ich an meinem Job als Bäcker besonders liebe, ist die unglaubliche Vielseitigkeit. Kein Tag gleicht dem anderen, und wir haben die Möglichkeit, in unserer Arbeit in der Backstube wirklich kreativ zu sein. Es ist einfach toll, das Ergebnis unserer Mühe direkt vor Augen zu haben – unsere gebackenen Brote. Und mal ehrlich: Es riecht hier nicht nur unglaublich gut, es schmeckt auch einfach.',
        pappertLove:
          'Kurzum: Weil wir ein Familienunternehmen nicht nur auf dem Papier sind, sondern es wirklich leben. Mein Vater Bernd ist bereits die 7. Generation von Bäckern der pappertschen Familien, und für mich war es selbstverständlich, dann auch in diese Fußstapfen zu treten. Es fühlt sich einfach richtig an, ein Teil dieser Geschichte zu sein und das Handwerk, das unsere Familie schon so lange prägt, mit Leidenschaft weiterzuführen.',
        masterExam:
          'Die Entscheidung, die Meisterprüfung abzulegen, kam für mich aus dem Wunsch heraus, meine Fähigkeiten und Kenntnisse weiter zu verbessern. Ich wollte mich der Herausforderung stellen und noch tiefer in das Handwerk eintauchen. Unser Beruf entwickelt sich ständig weiter, und es ist mir wichtig, immer auf dem neuesten Stand zu sein. Die Meisterprüfung war aber auch ein toller Schritt für mich persönlich, um das Beste aus mir und meiner Arbeit herauszuholen.',
      },
    },
  },
  en: {
    backToOverview: 'Back to Overview',
    department: 'Department',
    since: 'At Pappert since',
    masterSince: 'Master Baker since',
    roles: {
      management: 'Member of Management',
    },
    departments: {
      nightShift: 'Night Shift Management',
      dayShift: 'Day Shift Management',
      bread: 'Bread',
      breadNightShift: 'Bread Night Shift',
      breadDayShift: 'Bread Day Shift Management',
      rolls: 'Rolls',
      pastry: 'Pastry',
      confectionery: 'Confectionery Management',
    },
    statements: {
      jobLove: 'What I particularly love about my job',
      pappertLove: 'Why I enjoy working at Pappert',
      masterExam: 'What motivated me to take the master exam',
    },
    statementTexts: {
      'Wolfgang Weber': {
        jobLove:
          "As a master baker, I love taking responsibility and producing high-quality baked goods for our guests every day. It's also very exciting to develop new products for our range.",
        pappertLove:
          "It's great to work for a family business where we're all on first-name terms. There are employee events that bring us closer together as the papperts family. Additionally, my job always brings new challenges, so there's always good variety.",
        masterExam:
          'Besides the advantages of personal development, I simply wanted to pass on my expertise to the next generation.',
      },
      'Martin Schiller': {
        jobLove:
          "As a baker, there's simply no standstill. Quite the opposite: my profession thrives on constant progress, as customer expectations for our baked goods range remain high. This gives us exciting new opportunities and chances time and again.",
        pappertLove:
          "Simply put: because it never gets boring here. You can really feel that everything in our bakery works hand in hand, and everyone gives their all for our craft to make tomorrow's rolls, bread & co. with lots of love.",
        masterExam:
          "Of course, further education like the master exam is an ambitious goal to improve one's salary in the future. Besides the financial aspect, I was also attracted by the challenge to deepen my knowledge even further.",
      },
      'Thilo Müller': {
        jobLove:
          'In our baking craft, we not only offer a rich selection of popular baked goods but also surprise our customers with constantly new, creative products. This continuous joy of innovation not only creates exciting variety but also presents us as master bakers with continuously exciting challenges. It never gets boring as a baker!',
        pappertLove:
          "I really value the work here. As a bakery, we're not afraid to be creative in our bakery and create new baked goods. I'm particularly impressed that our bakery not only sets ambitious goals but also implements them consistently with real team spirit and determination. Pappert goes far beyond the professional framework and actively promotes the well-being of its employees – a beautiful example of this is our traditional Oktoberfest, which is not only a social highlight but also strengthens the cohesion among us colleagues.",
        masterExam:
          'Completing my master exam was a personal challenge for me, driven by the desire to expand my professional qualifications as a baker to take on more responsibility in our bakery.',
      },
      'Bernd Gerhardt': {
        jobLove:
          "I love being a baker because the profession constantly demands high standards of my abilities. You're always challenged! But it requires not only craftsmanship but also a good sense of taste and quality.",
        pappertLove:
          "With over 150 specialty stores and nearly 1,900 employees, papperts is probably one of the larger companies in the region. This brings a certain professional and private security for me as an employee. I also appreciate the tradition associated with our family bakery since 1928. It's something special to be part of a long history and to pass on our craft to new young generations time and again.",
        masterExam:
          'The decision to take the master exam was an investment in my professional future. The further education not only gave me a deeper understanding of the fine nuances of our baked goods but also the opportunity to take my skills and knowledge as a baker to an even higher level.',
      },
      'Bernd Müller': {
        jobLove:
          'There are many reasons why I enjoy being a baker. On one hand, it requires creativity, but also a lot of understanding of craftsmanship and technical knowledge to make bread, pastries, and other baked goods.',
        pappertLove:
          "The relationship between colleagues and management is simply very positive. There's a lot of emphasis on promoting new projects and ideas. Additionally, you're supported in professional development – in my case, for example, as a bread sommelier in 2020. It's great to be part of a family business that always sets goals and invests in its employees.",
        masterExam:
          'Besides the personal aspect of wanting to further my education, as a master baker I also contribute to preserving and passing on traditional baking techniques and recipes. Moreover, with the master exam, I can further promote the quality of handcrafted baked goods.',
      },
      'Thorsten Weber': {
        jobLove:
          "I'm simply fascinated by the large quantities we get to produce daily in our bakery for our guests. This regularly requires careful organization and planning in advance.",
        pappertLove:
          "The personal relationship with colleagues goes all the way up to management. You can really feel that Pappert is truly a family business. Additionally, there's the great range of employee benefits that I really enjoy taking advantage of.",
        masterExam:
          'With the master exam, I was able to expand my skills and expertise in the baking craft. This not only offers me better career opportunities but also allowed me to take on more responsibility at Pappert.',
      },
      'Florian Martin': {
        jobLove:
          'Working in a functioning team as well as planning and organizing production processes.',
        pappertLove:
          'At Pappert, family business is lived and you can actively participate in shaping the future.',
        masterExam:
          'After completing my confectioner and baker training, I already had the chance to work as a department head in my early 20s. So the next logical step for me was to take the master exam to further my education professionally and personally.',
      },
      'Sebastian Wiegand': {
        jobLove:
          "I'm fascinated by the result you see at the end of the day. It's nice to know that we make people happy with our baked goods.",
        pappertLove:
          'The relaxed relationship with colleagues and superiors, as well as the daily challenges in my job.',
        masterExam:
          'It was a wonderful opportunity to further deepen my existing knowledge in the baking craft while also learning much new. Of course, it also fills me with pride to pass on my expertise as a master baker to future generations. Moreover, I look forward to taking on more responsibility in the team and contributing my expertise for the benefit of the company.',
      },
      'Maximilian Pappert': {
        jobLove:
          "What I particularly love about my job as a baker is the incredible variety. No day is the same, and we have the opportunity to be really creative in our work in the bakery. It's simply great to have the result of our efforts right before our eyes – our baked breads. And honestly: it not only smells incredibly good here, it also tastes simply amazing.",
        pappertLove:
          "In short: because we're not just a family business on paper, but we really live it. My father Bernd is already the 7th generation of bakers in the Pappert family, and for me it was natural to follow in these footsteps. It simply feels right to be part of this history and to continue the craft that has shaped our family for so long with passion.",
        masterExam:
          "The decision to take the master exam came from my desire to further improve my skills and knowledge. I wanted to face the challenge and dive even deeper into the craft. Our profession is constantly evolving, and it's important to me to always be up to date. The master exam was also a great step for me personally to get the best out of myself and my work.",
      },
    },
  },
}

export default function BakerDetailPage() {
  const { slug } = useParams() as { slug: string }
  const language = useLanguageStore((state) => state.language)
  const baker = bakers.find((b) => slugify(b.name) === slug)
  if (!baker) return notFound()

  const getTranslatedRole = (role: string) => {
    if (role === 'Mitglied der Geschäftsleitung') {
      return translations[language].roles.management
    }
    return role
  }

  const getTranslatedDepartment = (department: string) => {
    const deptMap: Record<string, keyof typeof translations.de.departments> = {
      'Leitung Nachtschicht': 'nightShift',
      'Leitung Tagschicht': 'dayShift',
      Brot: 'bread',
      'Brot Nachtschicht': 'breadNightShift',
      'Leitung Brot Tagschicht': 'breadDayShift',
      Brötchen: 'rolls',
      Feingebäck: 'pastry',
      'Leitung Konditorei': 'confectionery',
    }
    return translations[language].departments[deptMap[department] || 'bread']
  }

  const getTranslatedStatementLabel = (label: string) => {
    if (label.includes('Was mag ich besonders an meinem Job')) {
      return translations[language].statements.jobLove
    }
    if (label.includes('Warum arbeite ich gerne bei Pappert')) {
      return translations[language].statements.pappertLove
    }
    if (label.includes('Was hat mich dazu bewegt meine Meisterprüfung abzulegen')) {
      return translations[language].statements.masterExam
    }
    return label
  }

  const getTranslatedStatementText = (name: string, label: string) => {
    const bakerTranslations = translations[language].statementTexts[name]
    if (!bakerTranslations) return ''

    if (label.includes('Was mag ich besonders an meinem Job')) {
      return bakerTranslations.jobLove
    }
    if (label.includes('Warum arbeite ich gerne bei Pappert')) {
      return bakerTranslations.pappertLove
    }
    if (label.includes('Was hat mich dazu bewegt meine Meisterprüfung abzulegen')) {
      return bakerTranslations.masterExam
    }
    return ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-2xl rounded-[25px] bg-white/90 p-6 shadow-lg dark:bg-[#232323]/90">
        <Link
          href="/about/master-bakers"
          className="mb-4 inline-block text-[#EE0A24] hover:underline"
          aria-label={translations[language].backToOverview}
        >
          ← {translations[language].backToOverview}
        </Link>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Image
            src={baker.image}
            alt={baker.alt}
            width={256}
            height={256}
            className="h-64 w-64 rounded-2xl border-4 border-[#FAD2E1] object-cover shadow-md dark:border-[#2a2a2a]"
            priority={baker.name === 'Wolfgang Weber'}
          />
          <div className="flex-1">
            <h1
              className="mb-2 text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {baker.name}
            </h1>
            {baker.role && (
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                {getTranslatedRole(baker.role)}
              </p>
            )}
            <div className="mb-4 flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
              {baker.department && (
                <span>
                  <strong>{translations[language].department}:</strong>{' '}
                  {getTranslatedDepartment(baker.department)}
                </span>
              )}
              <span>
                <strong>{translations[language].since}:</strong> {baker.since}
              </span>
              <span>
                <strong>{translations[language].masterSince}:</strong> {baker.masterSince}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          {baker.statements.map((s, idx) => (
            <div key={idx}>
              <span className="font-semibold text-[#EE0A24] dark:text-[#EE0A24]">
                {getTranslatedStatementLabel(s.label)}:
              </span>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {getTranslatedStatementText(baker.name, s.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
