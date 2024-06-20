import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="2xl" mb={4}>Welcome to the Photo Sharing Platform</Text>
          <Text>Discover and share amazing photos from around the world.</Text>
        </Box>
        <Box>
          <Image src="/images/sample-photo1.jpg" alt="Sample Photo 1" borderRadius="md" />
          <Text mt={2}>Caption for Sample Photo 1</Text>
        </Box>
        <Box>
          <Image src="/images/sample-photo2.jpg" alt="Sample Photo 2" borderRadius="md" />
          <Text mt={2}>Caption for Sample Photo 2</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;