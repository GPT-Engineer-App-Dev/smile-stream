import { Box, Button, Input, VStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the file upload logic here
    console.log("File:", file);
    console.log("Caption:", caption);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Input type="file" onChange={handleFileChange} />
        <Textarea placeholder="Write a caption..." value={caption} onChange={handleCaptionChange} />
        <Button colorScheme="blue" onClick={handleSubmit}>Upload Photo</Button>
      </VStack>
    </Box>
  );
};

export default Upload;