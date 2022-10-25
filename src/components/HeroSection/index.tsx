import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Text, Title } from "@mantine/core";
import { styles } from "./styles";

export function HeroSection() {
  const { classes } = styles();

  return (
    <Container className={classes.wrapper} size={1440} mt={88}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{" "}
          <Text component="span" className={classes.highlight} inherit>
            code reviews
          </Text>{" "}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <Player
          autoplay
          loop
          src="animations/hero_animation.json"
          className={classes.animation}
          style={{ margin: "-130px auto" }}
        />
      </div>
    </Container>
  );
}
