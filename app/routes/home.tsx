import type { Route } from "./+types/home";
import { json } from "@remix-run/node";
import { useState } from "react";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "Fun Money Games | Free Financial Literacy Games, Budget Challenges & Printable Worksheets";
  const description =
    "Play free online money games that teach budgeting, saving, investing and smart spending. Great for kids, teens, classrooms, and adults. Includes printable worksheets and step-by-step challenges.";
  const url = "https://funmoneygames.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "money games",
        "budget games for kids",
        "financial literacy games",
        "saving money challenges",
        "allowance tracker printable",
        "investing games online",
        "budget hero game",
        "fun finance activities",
      ].join(", "),
    },
    { rel: "canonical", href: url },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "theme-color", content: "#fef9c3" }, // cheerful gold/yellow
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   UI HELPERS
========================================================= */
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm ${className}`}
  >
    {children}
  </div>
);

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  return (
    <main className="bg-yellow-50 text-yellow-900">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "Fun Money Games",
                url: "https://funmoneygames.com/",
                description:
                  "Free online games and printables that teach money skills: budgeting, saving, investing, spending wisely.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Are the games free to play?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every game and worksheet on Fun Money Games is free to play online with no signup.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do these games work on tablets and phones?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "All games and printables are mobile-friendly and run in any modern browser.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are the games safe for kids?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We design games to be COPPA-safe for classroom and at-home use, with no personal data collection.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ===== TOP BAR ===== */}
      <div className="border-b border-yellow-200 bg-yellow-100/60">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-yellow-700">
          Free to play • Last updated {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-yellow-900">
              Fun & Free Money Games for All Ages
            </h1>
            <p className="text-lg text-yellow-800 leading-relaxed">
              Learn money-smart habits by playing games: budget challenges,
              saving races, investing simulators, and allowance trackers.
              Perfect for classrooms, parents, or anyone who wants to boost
              financial skills while having fun.
            </p>
            <a
              href="#games"
              className="inline-block rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-yellow-900 shadow hover:bg-yellow-300"
            >
              Browse Popular Games ↓
            </a>
          </div>
          <div className="rounded-3xl border border-yellow-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-yellow-900">
              Popular Right Now
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-yellow-800">
              <li>• Budget Hero Challenge</li>
              <li>• Smart Saver Race</li>
              <li>• Allowance Tracker for Kids</li>
              <li>• Invest-or-Bust Simulator</li>
              <li>• Grocery List Price Match</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FEATURED GAMES GRID ===== */}
      <section id="games" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold text-yellow-900">
          Featured Learning Games
        </h2>
        <p className="mt-2 text-yellow-800">
          Play directly in your browser -no installs or sign-ups needed.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Budget Hero", "Learn to balance income vs. expenses"],
            ["Smart Saver Race", "Beat the clock saving $500 in-game currency"],
            ["Invest-or-Bust", "Simulate stock market ups and downs"],
            ["Allowance Tracker", "Teach kids to plan weekly allowance"],
            ["Credit Score Quest", "Unlock rewards by paying bills on time"],
            [
              "Grocery List Match",
              "Compare store prices and save virtual cash",
            ],
          ].map(([title, desc]) => (
            <Card key={title}>
              <h3 className="text-lg font-semibold text-yellow-900">{title}</h3>
              <p className="mt-2 text-sm text-yellow-800">{desc}</p>
              <button className="mt-3 w-full rounded-lg bg-yellow-400 py-2 text-yellow-900 font-medium shadow hover:bg-yellow-300">
                Play Now
              </button>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== LEARNING HUB SECTIONS ===== */}
      <section className="mx-auto max-w-7xl px-4 py-10 space-y-10 leading-relaxed text-yellow-800">
        <Card>
          <h3 className="text-xl font-bold text-yellow-900">
            Financial Literacy Made Fun
          </h3>
          <p className="mt-2">
            We believe learning about money should be as exciting as a game
            night. Our games teach budgeting, saving, credit, and smart spending
            habits in short challenges that reward wise decisions.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-yellow-900">
            Free Printable Worksheets
          </h3>
          <p className="mt-2">
            Teachers and parents can download allowance charts, grocery
            budgeting sheets, and saving-goal trackers to use offline alongside
            our online games.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-yellow-900">
            Classroom & Homeschool Friendly
          </h3>
          <p className="mt-2">
            Games work on Chromebooks, tablets, and smartboards -perfect for
            classroom budgeting lessons, math drills, and after-school clubs.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-yellow-900">
            Advertiser-Friendly Finance Keywords
          </h3>
          <p className="mt-2">
            Topics such as credit, investing, and saving attract premium finance
            advertisers, which means higher-value display ads while keeping the
            site free for users.
          </p>
        </Card>
      </section>

      {/* ================= LONGFORM SEO CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 space-y-10 leading-relaxed text-yellow-800">
        {/* 1. Why Financial Literacy Games Matter */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Why Financial Literacy Games Matter for Kids and Adults
          </h2>
          <p>
            Understanding how money works is a life skill. Many adults admit
            they wish they had learned budgeting, saving, and investing when
            they were young. Financial literacy games bridge that gap by turning
            tricky money concepts into interactive challenges. When learners
            compete to save virtual cash or plan a monthly budget inside a game,
            they retain the lessons better than by reading a textbook.
          </p>
          <p>
            Game-based learning has been shown to improve decision-making,
            critical thinking, and motivation. Our games like{" "}
            <em>Budget Hero</em> or <em>Smart Saver Race</em> use points,
            rewards, and levels to keep players engaged while teaching
            real-world financial habits that translate to smarter choices in
            daily life.
          </p>
        </article>

        {/* 2. Budgeting Games for Classrooms */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Budgeting Games for Classrooms and Homeschool Lessons
          </h2>
          <p>
            Teachers often struggle to make personal-finance units fun. Free
            budgeting games provide an easy classroom activity that only
            requires an internet-connected device. Students can test how
            different expenses affect their monthly budget, learn about fixed
            vs. variable costs, and practice saving toward short-term goals like
            buying a bike or a new phone.
          </p>
          <p>
            Each classroom-friendly game includes built-in scoring so teachers
            can spark friendly competition between groups. Printable worksheets
            let students continue budgeting practice offline and take the
            lessons home to their families.
          </p>
        </article>

        {/* 3. Saving Challenges and Goal Trackers */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Saving Challenges and Digital Goal Trackers
          </h2>
          <p>
            Saving money is more rewarding when you can see progress. The
            <em> Smart Saver Race</em> lets players set a virtual saving goal
            and try to reach it before time runs out. We also provide free
            printable trackers for emergency funds, vacation jars, or even
            school-fundraisers. These visual tools encourage consistency and
            help families celebrate milestones together.
          </p>
          <p>
            Parents can use these challenges as weekly allowance lessons,
            helping kids learn that small amounts saved regularly can grow into
            something meaningful over time.
          </p>
        </article>

        {/* 4. Investing Simulators for Beginners */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Investing Simulators for Beginners and Teens
          </h2>
          <p>
            Investing feels intimidating to beginners, but a simulator game
            removes the risk. Our <em>Invest-or-Bust</em> tool gives players a
            pretend portfolio to try buying and selling stocks as the market
            shifts in real-time scenarios. By watching their virtual gains and
            losses, users learn the basics of diversification, compound growth,
            and why long-term investing usually beats short-term guessing.
          </p>
          <p>
            These lessons prepare teens and young adults to make smarter
            financial decisions later, like choosing between index funds,
            savings accounts, or more aggressive investments.
          </p>
        </article>

        {/* 5. Money Math Skills Through Play */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Strengthening Money Math Skills Through Play
          </h2>
          <p>
            Beyond budgeting, many games also reinforce core math concepts such
            as addition, subtraction, percentages, and unit pricing. For
            example, <em>Grocery List Match</em> challenges players to compare
            store prices, apply discounts, and pick the best deal — all while
            racing against a timer. This improves mental math speed and helps
            children appreciate real-world applications of school lessons.
          </p>
        </article>

        {/* 6. Printables & Offline Activities */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Printable Worksheets and Offline Money Activities
          </h2>
          <p>
            To complement our browser games, Fun Money Games offers a library of
            free printable worksheets: allowance charts, household budget
            planners, and goal-tracking calendars. Teachers and parents can
            download and distribute these at no cost, encouraging students to
            continue practicing even when offline.
          </p>
          <p>
            Offline games include board-style budgeting races and coin-counting
            bingo for younger learners, reinforcing the link between play and
            personal finance skills.
          </p>
        </article>

        {/* 7. Building Long-Term Habits */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Building Long-Term Habits with Consistent Play
          </h2>
          <p>
            Repetition is key to changing behavior. By playing a quick budgeting
            or saving game a few minutes a day, users gradually internalize
            smarter money habits: tracking spending, prioritizing essentials,
            delaying gratification, and celebrating savings milestones. Our goal
            is to make these positive routines second nature.
          </p>
        </article>

        {/* 8. Who We Built This For */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Who Fun Money Games Is Designed For
          </h2>
          <p>
            This platform is built for everyone — parents teaching kids the
            value of a dollar, teachers adding life-skills lessons to math
            class, teens preparing for their first job, college students trying
            to budget, and adults who just want to refresh their
            money-management skills in a fun, low-pressure environment.
          </p>
          <p>
            By combining finance with gaming, we open the door for lifelong
            learning and help reduce money stress for future generations.
          </p>
        </article>
      </section>

      {/* ================= MORE LONGFORM SEO CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 space-y-10 leading-relaxed text-yellow-800">
        {/* 9. Integrating Fun Money Games into a Curriculum */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Integrating Fun Money Games into a Financial Literacy Curriculum
          </h2>
          <p>
            Financial literacy is now a key requirement in many schools and
            after-school programs. Fun Money Games supports these efforts by
            offering browser-based activities that align naturally with math,
            economics, and life-skills lessons. Teachers can assign a budgeting
            game during class to reinforce concepts like fixed versus variable
            expenses, or use the grocery-shopping simulator to highlight unit
            pricing and percentage discounts.
          </p>
          <p>
            The printable worksheets — including budget templates, expense
            trackers, and savings-goal calendars — can be integrated as homework
            assignments or small group exercises. This combination of online
            play and offline practice helps solidify abstract concepts through
            hands-on learning.
          </p>
        </article>

        {/* 10. Developing Money-Saving Habits at Home */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Developing Strong Money-Saving Habits at Home
          </h2>
          <p>
            Parents often look for simple ways to teach children about the value
            of money. Fun Money Games offers saving challenges that encourage
            kids to track allowance spending, set up virtual jars for short-term
            goals, and compete with siblings or friends to reach milestones.
          </p>
          <p>
            These playful competitions encourage discipline, delayed
            gratification, and goal-setting — skills that are proven to help
            reduce debt and improve long-term financial well-being when learned
            early in life.
          </p>
        </article>

        {/* 11. Money Skills for Teens and College Students */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Money Skills for Teens and College Students
          </h2>
          <p>
            Teens and college students often face their first real financial
            choices: opening checking accounts, paying for textbooks, or
            managing part-time income. Our budgeting challenges and investing
            simulators create a safe space to experiment with virtual dollars
            before making decisions with real cash.
          </p>
          <p>
            By practicing in these gamified environments, students learn how
            spending habits affect savings goals, understand how compound
            interest works, and appreciate the benefits of setting aside
            emergency funds early.
          </p>
        </article>

        {/* 12. Benefits for Adults Seeking a Refresh */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Benefits for Adults Seeking to Refresh Their Money Skills
          </h2>
          <p>
            Many adults want to reset their budgets, cut unnecessary spending,
            or get back on track with savings. Fun Money Games provides
            bite-sized scenarios that simulate common household decisions —
            whether that’s planning for a new car purchase, comparing insurance
            plans, or testing the impact of eating out versus cooking at home.
          </p>
          <p>
            These exercises help users visualize the long-term cost of small
            daily habits and motivate them to make incremental changes that add
            up over months and years.
          </p>
        </article>

        {/* 13. How Game Mechanics Improve Learning */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            How Game Mechanics Improve Learning Outcomes
          </h2>
          <p>
            Gamification uses points, levels, achievements, and leaderboards to
            keep learners engaged. Research shows that adding these elements
            increases retention of complex information like interest rates,
            budgeting categories, or repayment schedules.
          </p>
          <p>
            Each Fun Money Game incorporates rewards for consistent play and
            strategic decisions. Players are motivated to repeat sessions,
            reinforcing lessons over time without feeling like they’re studying.
          </p>
        </article>

        {/* 14. Printable Budget Templates & Worksheets */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Printable Budget Templates and Free Worksheets
          </h2>
          <p>
            Our free downloads include weekly allowance charts for kids,
            envelope-style budget templates, and goal-tracking calendars for
            short- or long-term savings. Teachers can use these as in-class
            exercises, and families can post them on the fridge to encourage
            shared accountability.
          </p>
          <p>
            These resources pair well with the online calculators, bridging the
            gap between virtual lessons and real-life money management.
          </p>
        </article>

        {/* 15. Saving vs. Spending Challenges */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Fun Saving-vs-Spending Challenges
          </h2>
          <p>
            One of our most popular modules is the Saving-vs-Spending Challenge,
            where players receive a virtual paycheck and must allocate funds
            toward rent, utilities, entertainment, and savings. Each decision
            impacts the game outcome, showing in real-time how overspending on
            non-essentials affects savings targets.
          </p>
          <p>
            This simple visual experience helps players of all ages understand
            trade-offs, prioritize needs over wants, and appreciate the value of
            emergency funds.
          </p>
        </article>

        {/* 16. Teacher & Parent Testimonials */}
        <article className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-900">
            Teacher and Parent Testimonials
          </h2>
          <p>
            Educators praise Fun Money Games for keeping students engaged during
            personal-finance lessons. Parents often report that their children
            start setting aside allowance money more willingly after playing our
            saving challenges. Testimonials highlight improvements in basic math
            skills, stronger budgeting habits, and increased financial
            confidence.
          </p>
          <p>
            These success stories reflect the power of mixing entertainment with
            practical education.
          </p>
        </article>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold text-yellow-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-yellow-200 rounded-2xl border border-yellow-200 bg-white shadow-sm">
          {[
            [
              "Are the games really free?",
              "Yes. All Fun Money Games are free to play online with no hidden fees or paywalls.",
            ],
            [
              "Do I need to create an account?",
              "No sign-up required. Just pick a game and start playing.",
            ],
            [
              "Do the games collect personal data?",
              "No. We do not store names, emails, or any personal info -safe for classrooms and kids.",
            ],
            [
              "Can I use the games on phones and tablets?",
              "Yes, they are mobile-friendly and optimized for touchscreens.",
            ],
            [
              "Are these games suitable for teaching kids?",
              "Yes. Many are designed for financial literacy education with COPPA-safe standards.",
            ],
            [
              "Do you offer printable materials?",
              "Yes. Free worksheets like allowance trackers and budgeting charts are available to download.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary className="cursor-pointer px-5 py-4 font-medium text-yellow-900">
                {q}
              </summary>
              <div className="px-5 pb-4 text-yellow-800">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-yellow-200 bg-yellow-100/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-yellow-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} FunMoneyGames.com</div>
            <div>Free games & worksheets for learning smart money habits</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
