import { useState, useEffect } from "react";
import { Box, Text, VStack, Avatar, Image } from "@chakra-ui/react";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch the user's photos from local storage or an API
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

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
            <Image key={photo.id} src={photo.src} alt={`User Photo ${photo.id}`} borderRadius="md" mb={2} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;