import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Tong Maxing. All Rights Reserved. WechatID：koikey
    </Box>
  )
}

export default Footer
