import { createStyles } from "@mantine/core";

export const styles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    border: "1px solid",
    borderColor: theme.colors.dark[4],
    backgroundColor: theme.colors.dark[8],
    zIndex: 10,
  },

  container: {
    padding: "100px 0",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));
