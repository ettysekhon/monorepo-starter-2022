import "./globals.css";
// include styles from the ui package
import "ui/styles.css";
import 'tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}