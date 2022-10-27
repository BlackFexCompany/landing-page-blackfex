import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';

export function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Container size={1000} py={40}>
        <Title
            order={2}
            size="h1"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
            weight={900}
            align="center"
        >
            Entre em contato
        </Title>

        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
            label="Nome"
            placeholder="Seu nome e Sobrenome"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
            />
            <TextInput
            label="Email"
            placeholder="Seu email para contato"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
            />
        </SimpleGrid>

        <TextInput
            label="Assunto"
            placeholder="Motivo do seu contato"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps('subject')}
        />
        <Textarea
            mt="md"
            label="Mensagem"
            placeholder="Nos conte o que precisa!"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
        />

        <Group position="center" mt="xl">
            <Button type="submit" size="md">
            Enviar Mensagem! 
            </Button>
        </Group>
      </Container>
    </form>
  );
}