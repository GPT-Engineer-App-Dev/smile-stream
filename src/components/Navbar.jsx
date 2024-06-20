import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Link as={NavLink} to="/" color="white" fontSize="xl" fontWeight="bold">Home</Link>
        <Link as={NavLink} to="/profile" color="white" fontSize="xl" fontWeight="bold">Profile</Link>
        <Link as={NavLink} to="/upload" color="white" fontSize="xl" fontWeight="bold">Upload</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;