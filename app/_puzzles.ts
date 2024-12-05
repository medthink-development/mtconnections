import { Category } from "./_types";

export const puzzles: { id: number; categories: Category[] }[] = [
  {
    id: 1, // Puzzle 1
    categories: [
      {
        category: 'A FEW “FAVORITE THINGS,” SINGULAR',
        items: ["GOOSE", "SNOWFLAKE", "PACKAGE", "MITTEN"],
        level: 1,
      },
      {
        category: "HOLIDAY INDULGENCE",
        items: ["CELEBRATION", "CONSUMPTION", "VACATION", "LIBATION"],
        level: 2,
      },
      {
        category: "GENERATIVE AI COMPONENTS",
        items: ["EXPERIMENTATION", "VALIDATION", "INTEGRATION", "SCALING"],
        level: 3,
      },
      {
        category: "EAT WITH GUSTO",
        items: ["SCARF", "GOBBLE", "FEAST", "SHOVEL"],
        level: 4,
      },
    ],
  },
  {
    id: 2, // Puzzle 2
    categories: [
      {
        category: "MEDCOM OMNICHANNEL FORMATS",
        items: ["APP", "EMAIL", "WEBSITE", "BOOTH"],
        level: 1,
      },
      {
        category: "HOLIDAY RETAIL STAPLES",
        items: ["GREETING CARD", "CANDY", "LIGHTS", "TINSEL"],
        level: 2,
      },
      {
        category: "SEEN AT A CHRISTMAS MARKET",
        items: ["VENDOR", "CRAFT", "STALL", "PASTRY"],
        level: 3,
      },
      {
        category: "LAST WORD OF HOLIDAY SONG",
        items: ["BELLS", "WONDERLAND", "ROCK", "RIDE"],
        level: 4,
      },
    ],
  },
  {
    id: 3, // Puzzle 3
    categories: [
      {
        category: "HOLIDAY SPIRIT HALLMARKS",
        items: ["WONDERMENT", "SURPRISE", "GENEROSITY", "CHEER"],
        level: 1,
      },
      {
        category: "KEY AGENCY ATTRIBUTES",
        items: ["CREATIVITY", "INNOVATION", "INSIGHTS", "COLLABORATION"],
        level: 2,
      },
      {
        category: "MOVIES WITH HOLIDAY/WINTRY NAMES",
        items: ["ELF", "FROZEN", "PEPPERMINT", "SCROOGE"],
        level: 3,
      },
      {
        category: "___________ SNAP",
        items: ["COLD", "CINNAMON", "FINGER", "GINGER"],
        level: 4,
      },
    ],
  },
];