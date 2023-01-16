// This file sets up all the colors and typography of the website.
// For this project, we're going to create a light and dark mode.

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
// import { grey, blueGrey, teal, red, indigo } from "@mui/material/colors";

// color design tokens
// installed Tailwind Shades to help with this - allows you to control different shades of colors
// Type the hex code for the color, highlight and press cmd+K, cmd+G to use it

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // #666666
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        // #141b2d
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40", // Changed this to make the sidebar consistent with dark theme
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        // #4cceac
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        // #db4f4a
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        // #6870fa
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        // to get your light mode colors, copy your dark mode colors and do a trick
        // cmd+P -> '>Sort Lines Decending' - reverses the hex code order
        // Next, return the number values back to the way they were i.e. "100 to 900" acending again
        // #666666
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },

        // #141b2d
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // This color didn't look good so it was changed from #101624
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        // #4cceac
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        // #db4f4a
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        // #6870fa
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// export const tokens = (mode) => ({
//   ...(mode === "dark"
//     ? {
//         // grey - #9e9e9e
//         grey: {
//           100: "#ececec",
//           200: "#d8d8d8",
//           300: "#c5c5c5",
//           400: "#b1b1b1",
//           500: "#9e9e9e",
//           600: "#7e7e7e",
//           700: "#5f5f5f",
//           800: "#3f3f3f",
//           900: "#202020",
//         },

//         // blueGrey - #607d8b
//         primary: {
//           100: "#dfe5e8",
//           200: "#bfcbd1",
//           300: "#a0b1b9",
//           400: "#8097a2",
//           500: "#607d8b",
//           600: "#4d646f",
//           700: "#3a4b53",
//           800: "#263238",
//           900: "#13191c",
//         },
//         // Teal - #009688
//         greenAccent: {
//           100: "#cceae7",
//           200: "#99d5cf",
//           300: "#66c0b8",
//           400: "#33aba0",
//           500: "#009688",
//           600: "#00786d",
//           700: "#005a52",
//           800: "#003c36",
//           900: "#001e1b",
//         },

//         // Red - #f44336
//         redAccent: {
//           100: "#fdd9d7",
//           200: "#fbb4af",
//           300: "#f88e86",
//           400: "#f6695e",
//           500: "#f44336",
//           600: "#c3362b",
//           700: "#922820",
//           800: "#621b16",
//           900: "#310d0b",
//         },
//         // Indigo - #3f51b5
//         blueAccent: {
//           100: "#d9dcf0",
//           200: "#b2b9e1",
//           300: "#8c97d3",
//           400: "#6574c4",
//           500: "#3f51b5",
//           600: "#324191",
//           700: "#26316d",
//           800: "#192048",
//           900: "#0d1024",
//         },
//       }
//     : {
//         // to get your light mode colors, copy your dark mode colors and do a trick
//         // cmd+P -> '>Sort Lines Decending' - reverses the hex code order
//         // Next, return the number values back to the way they were i.e. "100 to 900" acending again
//         //        grey - #9e9e9e
//         grey: {
//           100: "#202020",
//           200: "#3f3f3f",
//           300: "#5f5f5f",
//           400: "#7e7e7e",
//           500: "#9e9e9e",
//           600: "#b1b1b1",
//           700: "#c5c5c5",
//           800: "#d8d8d8",
//           900: "#ececec",
//         },

//         // blueGrey - #607d8b
//         primary: {
//           100: "#13191c",
//           200: "#263238",
//           300: "#3a4b53",
//           400: "#4d646f",
//           500: "#607d8b",
//           600: "#8097a2",
//           700: "#a0b1b9",
//           800: "#bfcbd1",
//           900: "#dfe5e8",
//         },
//         // Teal - #009688
//         greenAccent: {
//           100: "#001e1b",
//           200: "#003c36",
//           300: "#005a52",
//           400: "#00786d",
//           500: "#009688",
//           600: "#33aba0",
//           700: "#66c0b8",
//           800: "#99d5cf",
//           900: "#cceae7",
//         },
//         // Red - #f44336
//         redAccent: {
//           100: "#310d0b",
//           200: "#621b16",
//           300: "#922820",
//           400: "#c3362b",
//           500: "#f44336",
//           600: "#f6695e",
//           700: "#f88e86",
//           800: "#fbb4af",
//           900: "#fdd9d7",
//         },
//         // Indigo - #3f51b5
//         blueAccent: {
//           100: "#0d1024",
//           200: "#192048",
//           300: "#26316d",
//           400: "#324191",
//           500: "#3f51b5",
//           600: "#6574c4",
//           700: "#8c97d3",
//           800: "#b2b9e1",
//           900: "#d9dcf0",
//         },
//       }),
// });

// mui theme settings

// To get the material theme to use the colors you picked you have to tell it
// which ones to use. themeSettings pulls the colors from above ('tokens'),
// based on the mode and returns an object of colors that mui can read

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc", // added a manual one here - don't use white its too bright
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// React context for color mode

//Context for react works like an external prop repository. Each component in
// the app tree can access this data without having to explicitly pass it down
// the tree via props. Good examples of when to use Context is sharing the
// current authenticated user, the current theme (like we're doing in this app),
// or something like a language setting.
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  // useMemo allows you to cache this value without having to re-render the page
  // only computes when you actually need it to, in this case when you change modes.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  //
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
