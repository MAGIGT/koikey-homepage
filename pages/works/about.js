import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/more'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="about">
    <Container>
      <Title>
      about <Badge>2021-present</Badge>
      </Title>
      <P>
        xz
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>platform</Meta>
          <span>Notion</span>
        </ListItem>
        <ListItem>
          <Meta>work</Meta>
          <Link href="https://www.notion.so/ENGLISH-LEARNING-a513d20c4b7940b791e068c80e6054c4">
            Notion 笔记本{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
