// Proyectos personales (los públicos en github.com/joseguzmann). Íconos: los de cada app; el de
// toefl-agents es provisorio.
export type SideProject = { name: string; icon: string; what: string; stack: string; href?: string; status: string };

export const sideProjects: SideProject[] = [
  { name: 'Acta', icon: '/projects/acta.png', what: 'Live meeting transcription that never leaves your Mac', stack: 'Swift · CoreAudio · SpeechAnalyzer · MCP', href: 'https://github.com/joseguzmann/acta', status: 'open source' },
  { name: 'Focus', icon: '/projects/focus.png', what: 'A Pomodoro timer for the macOS menu bar', stack: 'Swift · SwiftUI', href: 'https://github.com/joseguzmann/focus', status: 'open source' },
  { name: 'toefl-agents', icon: '/projects/toefl.svg', what: 'A multi-agent system to practice for the TOEFL', stack: 'LLM agents · multi-agent', status: 'in progress' },
];
