import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// .storybook/YourTheme.js

import { myTheme } from "./myTheme";

addons.setConfig({
  theme: myTheme,
});
