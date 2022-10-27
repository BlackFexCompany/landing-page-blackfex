import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Text, Title } from "@mantine/core";
import { styles } from "./styles";

export function HeroSection() {
  const { classes } = styles();

  return (
    <Container className={classes.wrapper} size={1440} mt={88}>
      <div className={classes.inner}>
        <Title className={classes.title}>
        If you can think it, we can{" "}
          <Text component="span" className={classes.highlight} inherit>
            code
          </Text>{" "}
          it!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
          Temos uma equipe de desenvolvedores experientes que podem lidar com qualquer projeto, 
          grande ou pequeno. Solicite seu orçamento hoje mesmo!
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
