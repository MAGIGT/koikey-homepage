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
import { ChevronLeftIcon, StarIcon} from '@chakra-ui/icons'
import Stack from "@chakra-ui/react"
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
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
        学 无 止 境
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tong Maxing
          </Heading>
          <p> I&apos;m a student in China.</p>
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
          Passage
        </Heading>
        <Paragraph>
        </Paragraph>

         <Stack spacing="99" direction="row" justify="center" my={4}>    
          <NextLink href="/works">
            <Button rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              原创文章
            </Button>
          </NextLink>
       
          <NextLink href="/posts">
            <Button rightIcon={<ChevronLeftIcon />} colorScheme="teal">
              其他文章
            </Button>
          </NextLink>
          </Stack>        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          出生于福建省
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          开始大学生活
        </BioSection>
        <BioSection>
          <BioYear>~ ~</BioYear>
          就这样吧，没什么特别的个人经历。
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
                leftIcon={<Icon as={StarIcon} />}
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        本站资源声明: 1.本文部分内容转载自其它媒体，但并不代表本站赞同其观点和对其真实性负责。
        2.若您需要商业运营或用于其他商业活动，请您购买正版授权并合法使用。
        3.如果本站有侵犯、不妥之处的资源，请在网站最下方联系我们。将会第一时间解决！
        4.本站所有资源均由互联网收集整理、网友上传以及本人制作，仅供大家参考、学习，不存在任何商业目的与商业用途。
        5.本站提供的所有资源仅供参考学习使用，版权归原著所有，禁止下载本站资源参与商业和非法行为，请在24小时之内自行删除!
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
