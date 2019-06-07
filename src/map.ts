interface Map {
  from: string;
  to: string;
  code: number;
}

const DEFAULT_MAP: Map = {
  from: '*',
  to: 'https://www.carlosbaraza.com',
  code: 302
};

const redirects: Map[] = [
  { from: 'baraza.io', to: 'https://www.carlosbaraza.com', code: 301 },
  { from: 'www.baraza.io', to: 'https://www.carlosbaraza.com', code: 301 },
  { from: 'demo.wisertag.com', to: 'https://www.wisertag.com/demo', code: 302 }
];

export function getMap(hostname: string): Map {
  return redirects.find(redirect => redirect.from === hostname) || DEFAULT_MAP;
}
