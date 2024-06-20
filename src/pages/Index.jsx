import { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Image, Button, HStack } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch the feed photos from local storage or an API
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);
  const handleLike = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, likes: (photo.likes || 0) + 1 };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        {photos.map((photo) => (
          <Box key={photo.id}>
            <Image src={photo.src} alt={`Photo ${photo.id}`} borderRadius="md" />
            <Text mt={2}>{photo.caption}</Text>
          <HStack mt={2} spacing={4}>
              <Button leftIcon={<FaThumbsUp />} onClick={() => handleLike(photo.id)}>
                Like
              </Button>
              <Text>{photo.likes || 0} Likes</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;