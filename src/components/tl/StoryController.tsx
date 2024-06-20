"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { useLocalStorage } from "@uidotdev/usehooks";
// create a storyOptions context
const StoryOptionsContext = createContext<{ storyOptions: StoryOptions }>({
    storyOptions: {
        series: "18TRIP",
        options: {
            firstName: "Kaede",
            lastName: "Hamasaki",
            gender: "male",
        },
    },
});

const useStoryOptions = () => useContext(StoryOptionsContext);

export { useStoryOptions };

function StoryOptionsDialogue({
    open,
    setOpen,
    setStoryOptions,
}: {
    open: boolean;
    setOpen: (o: boolean) => void;
    setStoryOptions: (o: StoryOptions) => void;
}) {
    const { storyOptions } = useStoryOptions();

    console.log("SP", storyOptions);
    return (
        <Dialog.Root open={open} onOpenChange={(o) => setOpen(o)}>
            {/* <Dialog.Trigger /> */}{" "}
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">
                        Edit profile
                    </Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Make changes to your profile here. Click save when
                        you're done.
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            className="Input"
                            id="firstname"
                            defaultValue={storyOptions.options.firstName}
                            onChange={(e) => {
                                if (storyOptions.series !== "18TRIP") return;
                                console.log(e.target.value);
                                const newOptions = {
                                    ...storyOptions,
                                    options: {
                                        ...storyOptions.options,
                                        firstName: e.target.value,
                                    },
                                };
                                console.log(newOptions);
                                setStoryOptions(newOptions);
                            }}
                        />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            className="Input"
                            id="lastname"
                            defaultValue={storyOptions.options.lastName}
                            onChange={(e) => {
                                if (storyOptions.series !== "18TRIP") return;
                                console.log(e.target.value);
                                const newOptions = {
                                    ...storyOptions,
                                    options: {
                                        ...storyOptions.options,
                                        lastName: e.target.value,
                                    },
                                };
                                console.log(newOptions);
                                setStoryOptions(newOptions);
                            }}
                        />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            className=" Input"
                            id="gender"
                            defaultValue={storyOptions.options.gender}
                            onChange={(e) => {
                                if (storyOptions.series !== "18TRIP") return;
                                console.log(e.target.value);
                                const newOptions = {
                                    ...storyOptions,
                                    options: {
                                        ...storyOptions.options,
                                        gender: e.target.value as
                                            | "male"
                                            | "female",
                                    },
                                };
                                console.log(newOptions);
                                setStoryOptions(newOptions);
                            }}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </fieldset>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 25,
                            justifyContent: "flex-end",
                        }}
                    >
                        <Dialog.Close asChild>
                            <button className="Button green">
                                Save changes
                            </button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            {/* <Cross2Icon /> */}X
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

const DEFAULT_STORY_OPTIONS_18TRIP: StoryOptions18TRIP = {
    firstName: "Kaede",
    lastName: "Hamasaki",
    gender: "male",
};

function StoryController({
    series,
    children,
}: {
    children: ReactNode;
    series: Series;
}) {
    const [storyOptions, setStoryOptions] = useState<StoryOptions>({
        series: "18TRIP",
        options: DEFAULT_STORY_OPTIONS_18TRIP,
    });
    // const [storyOptions, setStoryOptions] = useLocalStorage<StoryOptions>(
    //     "ushio__storyOptions__18TRIP",
    //     {
    //         series: "18TRIP",
    //         options: DEFAULT_STORY_OPTIONS_18TRIP,
    //     }
    // );

    const [storyOptionsDialogOpen, setStoryOptionsDialogOpen] = useState(false);
    // return <div>{children}</div>;
    return (
        <StoryOptionsContext.Provider value={{ storyOptions }}>
            <StoryOptionsDialogue
                open={storyOptionsDialogOpen}
                setOpen={setStoryOptionsDialogOpen}
                setStoryOptions={setStoryOptions}
            />
            {/* button to open */}
            <button
                onClick={() => {
                    console.log("open");
                    setStoryOptionsDialogOpen(true);
                }}
            >
                Open
            </button>
            {children}
        </StoryOptionsContext.Provider>
    );
}

export default StoryController;
