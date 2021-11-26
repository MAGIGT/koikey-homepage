import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbGrammarNote from '../public/images/works/GrammarNote.png'

const Works = () => (
  <Layout title="原创">
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        原 创 文 章
      </Heading>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="GrammarNote"
            title="GrammarNote"
            thumbnail={thumbGrammarNote}
          > 
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
