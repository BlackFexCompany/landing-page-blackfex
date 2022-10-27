import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconCookie, IconGauge, IconUser } from "@tabler/icons";
import { styles } from "./styles";

const mockdata = [
  {
    title: "Aplicativos nativos",
    description:
      "Desenvolvemos aplicativos móveis nativos de alta qualidade para iOS e Android. Usamos as ferramentas e tecnologias mais recentes para criar aplicativos confiáveis e escaláveis que proporcionam uma ótima experiência ao usuário, junto à comercialização na loja de cada sistema (Play Store e App Store).",
    icon: IconGauge,
  },
  {
    title: "Soluções Web",
    description:
      "Desenvolvemos plataformas que priorizam a experiência do usuário, além de serem altamente performáticas e responsivas para atender as mais diversas necessidades em qualquer dispositivo. Podemos cuidar também da hospedagem do serviço, com servidores robustos e adaptáveis",
    icon: IconUser,
  },
  {
    title: "Serviços de Consultoria",
    description:
      "Nossa consultoria pode englobar desde o acompanhamento dos primeiros passos do projeto, com planejamento e prototipação, até durante a criação e desenvolvimento da plataforma dos seus sonhos, acompanhando o seu time para auxiliá-lo ao máximo antes da entrega.",
    icon: IconCookie,
  },
];

export function ProsSection() {
  const { classes, theme } = styles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py={100} className={classes.wrapper}>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Nossos Serviços!
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Descomplicando o desenvolvimento de plataformas e sistemas robustos
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Nossa equipe de desenvolvedores experientes trabalhará em estreita colaboração com você para entender seus requisitos e criar uma solução personalizada que atenda às suas necessidades.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
