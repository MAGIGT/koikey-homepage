import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoWechat
} from 'react-icons/io5'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon
} from '@chakra-ui/icons'
import {Box, Button, Container, Heading, Icon, Image, Link, List, ListItem, 
  SimpleGrid, Stack, Text, useColorModeValue
} from '@chakra-ui/react'

import {
  BioSection,
  BioYear
} from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbWXGZH from '../public/images/links/WXGZH.png'
import thumbYOULIAN from '../public/images/links/YOULIAN.png'

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
        学ㅤ无ㅤ止ㅤ境 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='4xl' fontWeight='extrabold'>
             I&apos;m Tong Maxing
            </Text>
          </Heading>
          <p>Student / Web Developer / Blogger</p>
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
          ☟
        </Paragraph>

         <Stack spacing="108" direction="row" justify="center" my={4}>    
          <NextLink href="/articles">
            <Button leftIcon={<ChevronLeftIcon/>} rightIcon={<ChevronRightIcon/>} colorScheme="teal">
              ARTICLES
            </Button>
          </NextLink>
       
          <NextLink href="/others">
            <Button leftIcon={<ChevronLeftIcon/>} rightIcon={<ChevronRightIcon/>} colorScheme="teal">
              OTHERS
            </Button>
          </NextLink>
          </Stack>        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in FuJian (福建), China
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Start college life
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Art, Drawing
          , DIY,{' '}
          <Link href="https://url.cloud.huawei.com/eBld1H10Qw" target="_blank">
            Photography
          </Link>
          , Python, Machine Learning …
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
            <Link href="https://qm.qq.com/cgi-bin/qm/qr?k=xLkAUUJ2bhRmf-Ap3LJ-z8TdGX1yGMhD&noverify=0" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={StarIcon} />}
              >
                QQ
              </Button>
            </Link>
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
          
          <ListItem>
            
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Promotion
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            href="https://lhqweb.online/"
            title="     "
            thumbnail={thumbYOULIAN}
          >
            快来看看 seemH 的主页~
          </GridItem>
          <GridItem
            href="http://weixin.qq.com/r/MxMUDE3EmRDmrQlv90Yh"
            title="     "
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
