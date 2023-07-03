/** @type { import('@storybook/react').Preview } */
import { myTheme } from "./myTheme";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: myTheme,
    },
  },
};

export default preview;
