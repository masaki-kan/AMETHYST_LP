import { type FC } from 'react';
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';

const Hero: FC = () => {
  const bgImage = `url('${import.meta.env.BASE_URL}1712922303256.jpg')`;

  return (
    <Box
      as="section"
      position="relative"
      height={{ base: '500px', md: '650px' }}
      backgroundImage={bgImage}
      backgroundSize={{ base: 'cover', md: 'contain' }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundColor="gray.200"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
      >
        <Flex
          height="100%"
          align="center"
          justify="center"
          textAlign="center"
          color="white"
          maxW="800px"
          mx="auto"
          px={8}
        >
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontWeight="bold"
              mb={6}
              lineHeight="1.2"
            >
              Good faith for Customers
            </Heading>
            <Text
              fontSize={{ base: '1.2rem', md: '1.5rem' }}
              mb={10}
              lineHeight="1.6"
            >
              調和を大事にしながら日々成長するITベンチャー企業
            </Text>
            <Link href="#contact" _hover={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                px={12}
                py={7}
                bg="#aa00aa"
                color="white"
                fontWeight="bold"
                fontSize="1.1rem"
                borderRadius="8px"
                boxShadow="0 4px 20px rgba(170, 0, 170, 0.4)"
                _hover={{
                  bg: '#cc00cc',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 25px rgba(170, 0, 170, 0.5)',
                }}
                transition="all 0.3s"
              >
                エントリーはこちら
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
