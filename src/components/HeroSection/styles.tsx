import { createStyles } from "@mantine/core";

export const styles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    padding: "100px 0",
    zIndex: 1,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  animation: {
    display: "flex",


    zIndex: 1,
    "@media (min-width: 950px)": {
      width: 900,
      height: 900,
      marginTop: "-150px !important",
      marginBottom: "-150px !important",
    },


    "@media (max-width: 950px)": {
      width: 500,
      height: 500,
      marginTop: "-50px !important",
      marginBottom: "-50px !important",
    },
  },
}));
