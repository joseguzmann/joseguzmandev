// Aritmética de meses para las previews. Todo sale de kit.experience / kit.asOf.
import { kit } from './preview-kit';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'YYYY-MM' → índice absoluto de mes. */
export const mi = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};

/** Índice absoluto → 'Mar 2025'. */
export const label = (i: number) => `${MONTHS[i % 12]} ${Math.floor(i / 12)}`;

export const fmt = (ym: string | null) => (ym ? label(mi(ym)) : 'present');

/** Meses inclusive: 2024-01 → 2024-03 son 3. */
export const months = (start: string, end: string | null) => mi(end ?? kit.asOf) - mi(start) + 1;

/** 51 → '4 yrs 3 mos'. */
export const spanText = (n: number) => {
  const y = Math.floor(n / 12);
  const m = n % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ');
};

export const duration = (start: string, end: string | null) => spanText(months(start, end));

/** Meses de experiencia sin contar dos veces los solapados (Dynecron corre en paralelo con otros). */
export const totalMonths = (asOf = kit.asOf) => {
  const seen = new Set<number>();
  for (const e of kit.experience) for (let i = mi(e.start); i <= mi(e.end ?? asOf); i++) seen.add(i);
  return seen.size;
};

/** Rango del eje: primer mes de experiencia → asOf. */
export const axisStart = Math.min(...kit.experience.map((e) => mi(e.start)));
export const axisEnd = mi(kit.asOf);
export const axisLen = axisEnd - axisStart + 1;
/** Años que caen dentro del eje, para marcas. */
export const axisYears = Array.from(
  { length: Math.floor(axisEnd / 12) - Math.floor(axisStart / 12) + 1 },
  (_, k) => Math.floor(axisStart / 12) + k,
);

/** Experiencia: los roles vigentes primero (como en el CV), después por inicio, la más reciente primero. */
export const expByRecent = [...kit.experience].sort((a, b) => Number(a.end !== null) - Number(b.end !== null) || mi(b.start) - mi(a.start));

/** "running since Jul 2025" → índice de mes, o null. */
export const runningSince = (status: string) => {
  const m = status.match(/since (\w{3}) (\d{4})/);
  if (!m) return null;
  return Number(m[2]) * 12 + MONTHS.indexOf(m[1]);
};

/** Experiencia en orden cronológico (la más vieja primero), como los spans de una traza. */
export const chrono = [...kit.experience].sort((a, b) => mi(a.start) - mi(b.start));
