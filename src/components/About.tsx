import { type FC } from 'react';
import { Box, Container, Heading, Text, Grid, Image } from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const About: FC = () => {
  return (
    <Box as="section" id="about" py={{ base: 12, md: 20 }} px={8} bg="gray.50">
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
            会社紹介
          </Heading>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.2}>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={{ base: 8, md: 12 }}
            alignItems="center"
          >
            <Box>
              <Heading as="h3" fontSize="1.5rem" mb={5} color="gray.800">
                調和を大事にしながら日々成長
              </Heading>
              <Text fontSize="1rem" lineHeight="1.8" mb={4} color="gray.600">
                2018年2月設立のITベンチャー企業。社名はアメジストに由来し、「調和を大事にしながら日々成長」を掲げています。
              </Text>
              <Text fontSize="1rem" lineHeight="1.8" color="gray.600">
                現在20代・30代を中心に10名のエンジニアが在籍し、システム企画・構築・運用からWebサイト制作、採用支援まで幅広い事業を展開しています。
              </Text>
            </Box>
            <Box>
              <Image
                src="/19-03-15-15-12-01-081_deco.jpg"
                alt="会社紹介画像"
                borderRadius="10px"
                boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
                w="100%"
                h="auto"
              />
            </Box>
          </Grid>
        </ScrollFadeIn>
      </Container>
    </Box>
  );
};

export default About;
