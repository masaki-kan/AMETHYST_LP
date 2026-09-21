import { type FC } from 'react';
import { Box, Container, Heading, Text, VStack, Grid, Image } from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const Voice: FC = () => {
  const voices = [
    {
      name: '****',
      position: '****',
      year: '入社****年目',
      comment: 'テキストが入力されます。テキストが入力されます。テキストが入力されます。テキストが入力されます。',
      image: '/20190111_160653.jpg',
    },
    {
      name: '****',
      position: '****',
      year: '入社****年目',
      comment: 'テキストが入力されます。テキストが入力されます。テキストが入力されます。テキストが入力されます。',
      image: '/19-03-15-15-12-01-081_deco.jpg',
    },
  ];

  return (
    <Box as="section" id="voice" py={{ base: 12, md: 20 }} px={8} bg="gray.50">
      <Container maxW="1200px">
        <ScrollFadeIn>
          <Heading
            as="h2"
            fontSize={{ base: '2rem', md: '2.5rem' }}
            textAlign="center"
            mb={12}
            color="gray.800"
            position="relative"
            pb={4}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              bg: '#aa00aa',
            }}
          >
            社員の声
          </Heading>
        </ScrollFadeIn>
        <VStack gap={8}>
          {voices.map((voice, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <Grid
                key={`voice-${index}`}
                templateColumns={{ base: '1fr', md: '300px 1fr' }}
                gap={8}
                w="100%"
                bg="white"
                borderRadius="10px"
                overflow="hidden"
                boxShadow="0 5px 20px rgba(0, 0, 0, 0.08)"
                transition="all 0.3s"
                _hover={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                  transform: 'translateY(-5px)',
                }}
              >
                <Box w={{ base: '100%', md: '300px' }} h={{ base: '250px', md: '300px' }}>
                  <Image
                    src={voice.image}
                    alt={voice.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box p={8} display="flex" flexDirection="column" justifyContent="center">
                  <Heading as="h3" fontSize="1.5rem" mb={2} color="gray.800">
                    {voice.name}
                  </Heading>
                  <Text fontSize="1.1rem" color="#aa00aa" mb={1}>
                    {voice.position}
                  </Text>
                  <Text fontSize="0.9rem" color="gray.500" mb={6}>
                    {voice.year}
                  </Text>
                  <Text fontSize="1.05rem" lineHeight="1.8" color="gray.600">
                    {voice.comment}
                  </Text>
                </Box>
              </Grid>
            </ScrollFadeIn>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Voice;
