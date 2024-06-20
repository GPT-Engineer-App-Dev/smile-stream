import { useState, useEffect } from "react";
import { Box, Text, VStack, Avatar, Image, Button, HStack } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch the user's photos from local storage or an API
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
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Avatar size="2xl" name="User Name" src="/images/user-avatar.jpg" />
        <Text fontSize="2xl">User Name</Text>
        <Text fontSize="md" color="gray.500">@username</Text>
        <Text>Bio: A short bio about the user.</Text>
        <Box>
          <Text fontSize="xl" mb={4}>User's Photos</Text>
          {photos.map((photo) => (
            <Box key={photo.id} mb={4}>
              <Image src={photo.src} alt={`User Photo ${photo.id}`} borderRadius="md" />
              <Text mt={2}>{photo.caption}</Text>
              <HStack mt={2} spacing={4}>
                <Button leftIcon={<FaThumbsUp />} onClick={() => handleLike(photo.id)}>
                  Like
                </Button>
                <Text>{photo.likes || 0} Likes</Text>
              </HStack>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;