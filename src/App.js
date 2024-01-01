import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Input,
  Center,
  List,
  IconButton,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import Chatbot from './Components/Chatbot';

function Header() {
  return (
    <Box bg="teal" color="white" p="4">
      <Container maxW="container.xl">
        <VStack spacing="4">
          <Heading as="h1" size="xl">
            SciAstra Education Pvt Ltd
          </Heading>
          <Text fontSize="lg">Empowering the Future Through Education</Text>
        </VStack>
      </Container>
    </Box>
  );
}

function Features() {
  return (
    <Container maxW="container.lg" py="8">
      <VStack spacing="8" align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Features
        </Heading>
        <Center spacing="4">
          <List>
            <Text fontSize="lg">Quality Education</Text>
            <Text fontSize="lg">Interactive Learning</Text>
            <Text fontSize="lg">Expert Instructors</Text>
          </List>
        </Center>
      </VStack>
    </Container>
  );
}

function ContactForm() {
  return (
    <Container maxW="container.sm" py="8">
      <VStack spacing="8" align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Contact Us
        </Heading>
        <form>
          <VStack spacing="4" align="stretch">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Button type="submit" colorScheme="teal" size="lg">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Features />
        <ContactForm />
        <Chatbot /> {/* Add the Chatbot component */}

      </Box>
    </ChakraProvider>
  );
}

export default App;
