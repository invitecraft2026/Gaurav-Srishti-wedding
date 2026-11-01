/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 * Empty strings / arrays = details not provided yet.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Srishti",
    fullName: "Srishti",
    parents: "",
  },

  groom: {
    firstName: "Gaurav",
    fullName: "Gaurav",
    parents: "",
  },

  initials: "S & G",

  /** Human readable date + time */
  date: "Sunday, 8 November 2026",

  dayName: "Sunday",
  dayNumber: "8",
  monthName: "November",
  year: "2026",

  time: "",

  /** Used by countdown + calendar */
  dateISO:"2026-11-08T00:00:00",
  endISO: "",

  welcomeLine: "With the blessings of our elders",

  welcomeTitle: "Wedding Ceremony",

  welcomeJoin: "of",

   venue: {
    name: "Nandanvan Palace Gardens",
    address: "Parijat Grove, Devlok Nagar",
    mapsQuery: "",
  },

  events: [
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "Sunday, 8 November 2026",
      time: "",
      venue: "Nandanvan Palace Gardens",
      icon: "rings",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description: "",

    colors: [
      {
        name: "Ivory",
        hex: "#F8F3E9",
      },
      {
        name: "Champagne",
        hex: "#D9C19C",
      },
      {
        name: "Dusty Rose",
        hex: "#CFA6A3",
      },
      {
        name: "Burgundy",
        hex: "#6B2637",
      },
      {
        name: "Mauve",
        hex: "#A8808A",
      },
      {
        name: "Sage",
        hex: "#A8B09A",
      },
      {
        name: "Warm Brown",
        hex: "#7A5A48",
      },
    ],
  },

  invitationMessage:
    "With the blessings of our elders and the grace of Lord Ganesha, together with our families, we joyfully invite you to celebrate our wedding and share in the love and joy of this sacred beginning.",

  quote: "",

  guestInformation: [],

  /** Optional background music */
  musicSrc: "/willyoustill.mp4",

  footer: {
    signOff: "With Love & Blessings,",
    thanks:
      "We look forward to celebrating this sacred beginning with you.",
  },
} as const;

export type Wedding = typeof wedding;