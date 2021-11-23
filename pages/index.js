import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoQQ,
  IoLogoGithub,
  IoLogoWechat
} from 'react-icons/io5'
import thumbYOULIAN from '../public/images/links/YOULIAN.png'
import thumbWXGZH from '../public/images/links/WXGZH.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, welcome to my website!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tong Maxing
          </Heading>
          <p>I&apos;m a student in China.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/my.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Profile
        </Heading>
        <Paragraph>
          简单介绍一下我自己吧，我......
        </Paragraph>
        <Box align="left" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              原创文章
            </Button>
          </NextLink>
        </Box>
        <Box align="right" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              其他文章
            </Button>
          </NextLink>
        </Box>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Fujian (福建), China.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          开始大学生活
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          搜集信息，处理数据
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MAGIGT" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://qm.qq.com/cgi-bin/qm/qr?k=xLkAUUJ2bhRmf-Ap3LJ-z8TdGX1yGMhD&noverify=0" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoQQ} />}
              >
                QQ
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://u.wechat.com/MEmwfVrMvdOff0XG3kO9y0c" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoWechat} />}
              >
                Wechat
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            href="https://lhqweb.online/"
            title="友 人 帐"
            thumbnail={thumbYOULIAN}
          >
            快来看看 seemH 的主页~
          </GridItem>
          <GridItem
            href="http://weixin.qq.com/r/MxMUDE3EmRDmrQlv90Yh"
            title="公 众 号"
            thumbnail={thumbWXGZH}
          >
            扫一扫或搜一搜关注我吧！
          </GridItem>
        </SimpleGrid>

      </Section>
    </Container>
  </Layout>
)

export default Home
