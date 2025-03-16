import { NavigationSegments } from "@/shared/types/Segments";

export type NavigationLinks = {
  label: string;
  path: string;
};

export type NavigationPanel = {
  segment: NavigationSegments;
  aboutRu: string;
  navigationLinks: NavigationLinks[];
};

export const BASE_INSTINCTS_PATH = "/rz/instincts";
export const BASE_INTELLECT_PATH = "/rz/intellect";
export const BASE_BALANCE_PATH = "/rz/balance";

export const navigationPanelsConfig: NavigationPanel[] = [
  {
    segment: "instincts",
    aboutRu:
      "На красном банере, мы подобрали работы авторов, делающих акцент на человеческих инстинктах, где ищется смысл через желание и самоуничтожение. Здесь вы найдете насилие, похоть, нигилизм, черный юмор и тому подобное.",
    navigationLinks: [
      { path: `${BASE_INSTINCTS_PATH}-movie`, label: "Фильмы" },
      { path: `${BASE_INSTINCTS_PATH}-music`, label: "Музыка" },
      { path: `${BASE_INSTINCTS_PATH}-books`, label: "Книги" },
      { path: `${BASE_INSTINCTS_PATH}-art`, label: "Живопись" },
    ],
  },
  {
    segment: "intellect",
    aboutRu:
      "На синнем баннере - наша коллекция образовательных, интеллектульных и интеллегентных работ авторов, нашедших свой смысл и жизненный путь в возвышенном, научном и созидательном. Здесь, Вы найдете оперы, документалки, образовательные лекции, и тому подобное.",
    navigationLinks: [
      { path: `${BASE_INTELLECT_PATH}-movie`, label: "Фильмы" },
      { path: `${BASE_INTELLECT_PATH}-music`, label: "Музыка" },
      { path: `${BASE_INTELLECT_PATH}-books`, label: "Книги" },
      { path: `${BASE_INTELLECT_PATH}-art`, label: "Живопись" },
    ],
  },
  {
    segment: "balance",
    aboutRu:
      "На зелёном баннере, мы собрали сбалансированную коллекцию произведений, где авторы грамотно и умело совмешают в себе направление и идеи, выражая, таким образом, сложные или противоречивые мысли , доступно и ёмко. Здесь Вы найдёте внежанровую музыку и фильмы, эксперементальную живопись и тому подобное.",
    navigationLinks: [
      { path: `${BASE_BALANCE_PATH}-movie`, label: "Фильмы" },
      { path: `${BASE_BALANCE_PATH}-music`, label: "Музыка" },
      { path: `${BASE_BALANCE_PATH}-books`, label: "Книги" },
      { path: `${BASE_BALANCE_PATH}-art`, label: "Живопись" },
    ],
  },
];
