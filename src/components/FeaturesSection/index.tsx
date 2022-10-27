import {
  Button,
  Col,
  Container,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
} from "@tabler/icons";
import { styles } from "./styles";

const features = [
  {
    icon: IconReceiptOff,
    title: "Times personalizados",
    description:
      "Um time personalizado para a sua necessidade, disposto a tirar todas as suas dúvidas com as melhores estratégias de desenvolvimento para a sua solução.",
  },
  {
    icon: IconFileCode,
    title: "Tecnologias avançadas",
    description:
      "As melhores e mais recentes tecnologias, para manter a sua solução sempre com o mais atualizado que temos disponível no mercado.",
  },
  {
    icon: IconCircleDotted,
    title: "Escalabilidade",
    description:
      "Tenha os softwares mais escaláveis possíveis, com servidores prontos para qualquer expansão do seu negócio.",
  },
  {
    icon: IconFlame,
    title: "Exibição e SEO",
    description:
      "Nossas plataformas são construídas para se destacarem nas principais plataformas de pesquisa, aumentando exponencialmente o alcance de novos clientes.",
  },
];

export function FeaturesSection() {
  const { classes } = styles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "lime", to: "green" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size={1440} className={classes.container} px={20}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
            Precisa de uma empresa para te entregar um software de alta qualidade?
            </Title>
            <Text color="dimmed">
            Então não existe tão boa quanto a BlackFex. Aqui 
            estão apenas algumas razões pelas quais acreditamos que somos 
            a escolha certa para você
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "lime", to: "green" }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Entrar em Contato
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
