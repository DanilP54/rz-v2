const BASE_INSTINCTS_PATH = "/rz/instincts";
const BASE_INTELLECT_PATH = "/rz/intellect";
const BASE_BALANCE_PATH = "/rz/balance";

export type Segments = "instincts" | "intellect" | "balance";

export type MenuItem = {
  label: string;
  path: string;
};

export type NavigationPanel = {
  segment: Segments;
  about: string;
  menuItems: MenuItem[];
};

export const navigationPanels: NavigationPanel[] = [
  {
    segment: "instincts",
    about:
      "На красном банере, мы подобрали работы авторов, делающих акцент на человеческих инстинктах, где ищется смысл через желание и самоуничтожение. Здесь вы найдете насилие, похоть, нигилизм,черный юмор и тому подобное.",
    menuItems: [
      { label: "Музыка", path: `${BASE_INSTINCTS_PATH}-music` },
      { label: "Фильмы", path: `${BASE_INSTINCTS_PATH}-movie` },
      { label: "Книги", path: `${BASE_INSTINCTS_PATH}-books` },
      { label: "Живопись", path: `${BASE_INSTINCTS_PATH}-art` },
    ],
  },
  {
    segment: "intellect",
    about: "На синнем баннере - наша коллекция образовательных, интеллектульных и интеллегентных работ авторов, нашедших свой смысл и жизненный путь в возвышенном, научном и созидательном. Здесь, Вы найдете оперы, документалки, образовательные лекции, и тому подобное.",
    menuItems: [
      { label: "Музыка", path: `${BASE_INTELLECT_PATH}-music` },
      { label: "Фильмы", path: `${BASE_INTELLECT_PATH}-movie` },
      { label: "Книги", path: `${BASE_INTELLECT_PATH}-books` },
      { label: "Живопись", path: `${BASE_INTELLECT_PATH}-art` },
    ],
  },
  {
    segment: "balance",
    about: "На зелёном баннере, мы собрали сбалансированную коллекцию произведений, где авторы грамотно и умело совмешают в себе направление и идеи, выражая, таким образом, сложные или противоречивые мысли , доступно и ёмко. Здесь Вы найдёте внежанровую музыку и фильмы, эксперементальную живопись и тому подобное.",
    menuItems: [
      { label: "Музыка", path: `${BASE_BALANCE_PATH}-music` },
      { label: "Фильмы", path: `${BASE_BALANCE_PATH}-movie` },
      { label: "Книги", path: `${BASE_BALANCE_PATH}-books` },
      { label: "Живопись", path: `${BASE_BALANCE_PATH}-art` },
    ],
  },
];
