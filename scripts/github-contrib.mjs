// Baja el calendario de contribuciones de GitHub de Jose y lo guarda en el repo, para que el
// sitio lo dibuje sin pedirle nada a GitHub en tiempo de visita.
// Uso: node scripts/github-contrib.mjs   (requiere `gh` autenticado)
// Sólo guarda conteos por día: los repos privados suman al número pero no se nombran.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const LOGIN = 'joseguzmann';
const gql = (query) => JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`], { encoding: 'utf8' })).data;

const cc = gql(`query { user(login: "${LOGIN}") { contributionsCollection { restrictedContributionsCount contributionCalendar {
  totalContributions weeks { contributionDays { date contributionCount contributionLevel weekday } } } } } }`)
  .user.contributionsCollection;
const cal = cc.contributionCalendar;

const LEVEL = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const weeks = cal.weeks.map((w) => w.contributionDays.map((d) => ({ d: d.date, c: d.contributionCount, l: LEVEL[d.contributionLevel], w: d.weekday })));

// Totales por año calendario, desde el primer año con experiencia.
const years = {};
const now = new Date();
for (let y = 2022; y <= now.getUTCFullYear(); y++) {
  const to = y === now.getUTCFullYear() ? now.toISOString() : `${y}-12-31T23:59:59Z`;
  years[y] = gql(`query { user(login: "${LOGIN}") { contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${to}") {
    contributionCalendar { totalContributions } } } }`).user.contributionsCollection.contributionCalendar.totalContributions;
}

const out = { login: LOGIN, fetchedAt: now.toISOString().slice(0, 10), lastYearTotal: cal.totalContributions, lastYearPrivate: cc.restrictedContributionsCount, weeks, years };
writeFileSync(new URL('../src/data/github-contributions.json', import.meta.url), JSON.stringify(out));
console.log(`ok · ${cal.totalContributions} en el último año · por año:`, years);
