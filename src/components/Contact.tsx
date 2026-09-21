import { type FC } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const Contact: FC = () => {

  return (
    <Box as="section" id="contact" py={{ base: 12, md: 20 }} px={8} bg="white">
      <Container maxW="full">
        <ScrollFadeIn>
          <Heading
            as="h2"
            fontSize={{ base: '1.75rem', md: '2rem' }}
            textAlign="center"
            mb={10}
            color="gray.800"
            position="relative"
            pb={4}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              bg: '#aa00aa',
            }}
          >
            お問い合わせ
          </Heading>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.2}>
          <VStack gap={8} maxW="800px" mx="auto" align="stretch">
            <Text fontSize="1rem" lineHeight="1.7" color="gray.600" textAlign="center">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。採用に関するご質問にも丁寧にお答えいたします。
            </Text>
            <VStack gap={6} align="stretch">
              <Box>
                <Text fontWeight="bold" fontSize="1rem" color="gray.800" mb={1}>
                  本社所在地:
                </Text>
                <Text color="gray.600" fontSize="1rem">
                  大阪市阿倍野区天王寺町南2-16-4
                </Text>
                <Text color="gray.600" fontSize="0.9rem" mt={1}>
                  天王寺駅より徒歩8分
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="1rem" color="gray.800" mb={1}>
                  勤務時間:
                </Text>
                <Text color="gray.600" fontSize="0.95rem">
                  9:00～18:00（実働8時間）
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="1rem" color="gray.800" mb={1}>
                  休日:
                </Text>
                <Text color="gray.600" fontSize="0.95rem">
                  年間120日以上、完全週休2日制（土日）+ 祝日
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="1rem" color="gray.800" mb={1}>
                  お問い合わせ:
                </Text>
                <Text color="gray.600" fontSize="0.95rem">
                  hi-kenchu@amethyst0226.co.jp
                </Text>
              </Box>
            </VStack>
            <Box textAlign="center" mt={4}>
              <Link href="mailto:hi-kenchu@amethyst0226.co.jp" _hover={{ textDecoration: 'none' }}>
                <Button
                  bg="#aa00aa"
                  color="white"
                  size="lg"
                  fontSize="1.1rem"
                  fontWeight="bold"
                  px={12}
                  py={7}
                  _hover={{
                    bg: '#8800aa',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(170, 0, 170, 0.3)',
                  }}
                  transition="all 0.3s"
                >
                  メールでお問い合わせ
                </Button>
              </Link>
            </Box>
          </VStack>
        </ScrollFadeIn>
      </Container>
    </Box>
  );
};

export default Contact;
