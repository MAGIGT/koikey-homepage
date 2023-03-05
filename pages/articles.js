import { Container, Heading, SimpleGrid,Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumba from '../public/images/contents/2335a.jpg'
import thumbb from '../public/images/contents/2335b.jpg'
import thumbc from '../public/images/contents/2335c.jpg'
import thumbd from '../public/images/contents/2335d.jpg'

const articles = () => (
  <Layout title="文章㇑">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       ARTICLES
      <Divider my={6} />
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumba}
            href=""
          />
          <GridItem
            title=""
            thumbnail={thumbb}
            href=""
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbc}
            href=""
          />
          <GridItem
            title=""
            thumbnail={thumbd}
            href=""
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default articles
