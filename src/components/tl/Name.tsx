"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { useStoryOptions } from "./StoryController";

interface Props {
    first?: boolean;
    last?: boolean;
}

function Name({ first, last }: Props) {
    console.log("NAME");
    const { storyOptions } = useStoryOptions();
    // const [storyOptions] = useLocalStorage("ushio__storyOptions__18TRIP", null);
    let nameOption = "both";
    if (first && !last) nameOption = "first";
    if (!first && last) nameOption = "last";
    const name =
        nameOption === "first"
            ? storyOptions.options.firstName
            : nameOption === "last"
            ? storyOptions.options.lastName
            : `${storyOptions.options.firstName} ${storyOptions.options.lastName}`;

    return <>{name}</>;
}

export default Name;
