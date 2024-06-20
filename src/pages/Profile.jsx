import { Box, Text, VStack, Avatar, Image } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Avatar size="2xl" name="User Name" src="/images/user-avatar.jpg" />
        <Text fontSize="2xl">User Name</Text>
        <Text fontSize="md" color="gray.500">@username</Text>
        <Text>Bio: A short bio about the user.</Text>
        <Box>
          <Text fontSize="xl" mb={4}>User's Photos</Text>
          <Image src="/images/user-photo1.jpg" alt="User Photo 1" borderRadius="md" mb={2} />
          <Image src="/images/user-photo2.jpg" alt="User Photo 2" borderRadius="md" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Profile;