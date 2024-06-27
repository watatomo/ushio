type Series = "18TRIP" | "enstars" | "prsk";

type Option18TRIPGender = "male" | "female";

interface StoryOptions18TRIP {
    ushio__18TRIP__firstName?: string;
    ushio__18TRIP__lastName?: string;
    ushio__18TRIP__gender?: Option18TRIPGender;
}

interface StoryOptions extends StoryOptions18TRIP {}

interface Chapters {
    href: string | number;
    label: string | number;
    none?: boolean;
    name?: string;
}

interface Section {
    title?: string;
    chapters: Chapters[];
}
