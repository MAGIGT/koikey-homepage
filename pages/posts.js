import { Container, Heading, SimpleGrid,Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumba from '../public/images/contents/a.png'
import thumbb from '../public/images/contents/b.png'
import thumbc from '../public/images/contents/c.png'
import thumbd from '../public/images/contents/d.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        其 他 文 章
      <Divider my={6} />
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="饿了么外卖红包每日领取"
            thumbnail={thumba}
            href="https://mp.weixin.qq.com/s?__biz=MzkwMjI2MTQ3Nw==&mid=2247483673&idx=1&sn=79c1184cc1aedbfa28248b88ecccbac4&chksm=c0a97e93f7def785191b245b284fa2bbe00f9edb1d8149b96ab741f93148f2b1a4764939d738&token=1848361076&lang=zh_CN#rd"
          />
          <GridItem
            title="【转载】shell脚本常用命令及语法"
            thumbnail={thumbb}
            href="https://lhqweb.online/post/shell-jiao-ben-chang-yong-ming-ling/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="【转载】计算机网络"
            thumbnail={thumbc}
            href="https://lhqweb.online/post/ji-suan-ji-wang-luo/"
          />
          <GridItem
            title="【转载】如何利用 ms17-010开始进行渗透测试"
            thumbnail={thumbd}
            href="https://lhqweb.online/post/ru-he-li-yong-ms17-010-kai-shi-jin-xing-sheng-shen-tou-ce-shi/"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
