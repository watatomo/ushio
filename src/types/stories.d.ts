type Series = "18TRIP" | "enstars" | "prsk";

interface StoryOptions18TRIP {
    firstName: string;
    lastName: string;
    gender: "male" | "female";
}

type StoryOptions =
    | { series: "18TRIP"; options: StoryOptions18TRIP }
    | {
          series: "enstars";
          options: never;
      }
    | {
          series: "prsk";
          options: never;
      };

interface Chapters {
    href: string | number;
    label: string;
    none?: boolean;
    name?: string;
}

interface Section {
    title?: string;
    chapters: Chapters[];
}
