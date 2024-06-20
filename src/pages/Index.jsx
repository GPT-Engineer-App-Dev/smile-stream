import { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch the feed photos from local storage or an API
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        {photos.map((photo) => (
          <Box key={photo.id}>
            <Image src={photo.src} alt={`Photo ${photo.id}`} borderRadius="md" />
            <Text mt={2}>{photo.caption}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;