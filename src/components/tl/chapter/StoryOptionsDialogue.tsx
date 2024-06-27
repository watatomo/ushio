"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { useLocalStorage } from "@uidotdev/usehooks";
import { map } from "nanostores";
import { useStore } from "@nanostores/react";
import {
    $storyOptions,
    DEFAULT_STORY_OPTIONS,
    setStoryOptions,
} from "@/utils/stores";

export default function StoryOptionsDialogue({}: {}) {
    const [open, setOpen] = useState(false);
    const storyOptions = useStore($storyOptions);
    const [firstName, setFirstName] = useState(
        storyOptions.ushio__18TRIP__firstName
    );
    const [lastName, setLastName] = useState(
        storyOptions.ushio__18TRIP__lastName
    );
    const [gender, setGender] = useState(storyOptions.ushio__18TRIP__gender);

    console.log("SP", storyOptions);
    return (
        <Dialog.Root open={open} onOpenChange={(o) => setOpen(o)}>
            <Dialog.Trigger asChild>
                <button className="Button green" aria-label="Edit profile">
                    {/* <PencilIcon /> */}Edit
                </button>
            </Dialog.Trigger>
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

                    <form
                        onSubmit={(event) => {
                            setStoryOptions(
                                "ushio__18TRIP__firstName",
                                firstName
                            );
                            setStoryOptions(
                                "ushio__18TRIP__lastName",
                                lastName
                            );
                            setStoryOptions("ushio__18TRIP__gender", gender);
                            setOpen(false);
                            event.preventDefault();
                        }}
                    >
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="firstname">
                                First Name
                            </label>
                            <input
                                className="Input"
                                id="firstname"
                                defaultValue={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
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
                                defaultValue={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
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
                                defaultValue={gender}
                                onChange={(e) => {
                                    if (
                                        e.target.value !== "male" &&
                                        e.target.value !== "female"
                                    )
                                        return;
                                    setGender(e.target.value);
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
                            <button type="submit" className="Button green">
                                Save changes
                            </button>
                        </div>
                    </form>

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
