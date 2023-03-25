import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbGrammarNote from '../public/images/works/GrammarNote.png'
import thumbabout from '../public/images/works/about.png'

const more = () => (
  <Layout title="更多㇑">
    <Container>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem
            id="GrammarNote"
            title="笔记本"
            thumbnail={thumbabout}> 
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default more
