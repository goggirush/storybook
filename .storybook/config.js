import { configure, setAddon } from "@storybook/react";
import LiveEdit, { setOptions } from "storybook-addon-react-live-edit";

// React-live-edit
setOptions({ theme: "darcula", presets: ["react"], enableShortcuts: false });
setAddon(LiveEdit);
