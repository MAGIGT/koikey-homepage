import { Container, Heading, Stack, Divider, Image } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const albums = () => (
  <Layout title="相册㇑">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       ALBUMS
      <Divider my={6} />
      </Heading> 

      <Stack spacing="2" direction="row" justify="center" my={2}>    
        <Image src='images/contents/2335c.jpg'  /> 
        <Image src='images/contents/2335b.jpg'  />
      </Stack>
      
      <Stack spacing="2" direction="row" justify="center" my={2}>    
        <Image src='images/contents/2335a.jpg'   />
        <Image src='images/contents/2335d.jpg'   />
      </Stack>

    </Container>
  </Layout>
)

export default albums
