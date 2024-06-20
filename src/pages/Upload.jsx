import { useState } from "react";
import { Box, Button, Input, VStack, Textarea, useToast, Image, Text } from "@chakra-ui/react";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = () => {
    if (!file) {
      toast({
        title: "No file selected.",
        description: "Please select a file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newPhoto = {
      id: photos.length + 1,
      src: URL.createObjectURL(file),
      caption: caption,
    };

    setPhotos([...photos, newPhoto]);
    setFile(null);
    setCaption("");
    toast({
      title: "Photo uploaded.",
      description: "Your photo has been uploaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Input type="file" onChange={handleFileChange} />
        <Textarea placeholder="Write a caption..." value={caption} onChange={handleCaptionChange} />
        <Button colorScheme="blue" onClick={handleSubmit}>Upload Photo</Button>
      </VStack>
      <Box>
        {photos.map((photo) => (
          <Box key={photo.id} mt={4}>
            <Image src={photo.src} alt={`Photo ${photo.id}`} borderRadius="md" />
            <Text mt={2}>{photo.caption}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Upload;