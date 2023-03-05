import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; 2019 - {new Date().getFullYear()} Tong Maxing.  All Rights Reserved.
    </Box>
  )
}

export default Footer
