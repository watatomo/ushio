type Series = "18TRIP" | "enstars" | "prsk";

type StoryOptions18TRIP = {
    ushio__18TRIP__firstName?: string;
    ushio__18TRIP__lastName?: string;
    ushio__18TRIP__gender?: "male" | "female";
};

interface StoryOptions extends StoryOptions18TRIP {}

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
