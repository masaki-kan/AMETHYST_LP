import { type FC } from 'react';
import { Box, Flex, Link, Container, Text, Image } from '@chakra-ui/react';

const Header: FC = () => {
  return (
    <Box
      as="header"
      bg="rgba(255, 255, 255, 0.98)"
      backdropFilter="blur(10px)"
      boxShadow="0 2px 20px rgba(170, 0, 170, 0.08)"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="rgba(170, 0, 170, 0.1)"
    >
      <Container maxW="full" py={4} px={8}>
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={4}>
          <Flex align="center" gap={3}>
            <Box
              w="50px"
              h="50px"
              borderRadius="8px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image src="/Logo_Color.png" alt="AMETHYST Logo" w="100%" h="100%" objectFit="contain" />
            </Box>
            <Box>
              <Text fontSize="1.3rem" fontWeight="bold" color="#aa00aa" letterSpacing="tight">
                株式会社AMETHYST
              </Text>
              <Text fontSize="0.75rem" color="gray.600" fontWeight="500" letterSpacing="wide">
                ENGINEER RECRUITING
              </Text>
            </Box>
          </Flex>
          <Flex as="nav" gap={{ base: 4, md: 6 }} flexWrap="wrap" justify="center" align="center">
            <Box
              position="relative"
              _hover={{
                '& a': { color: '#aa00aa' },
                '&::after': { width: '100%' },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#aa00aa',
                transition: 'width 0.3s',
              }}
            >
              <Link
                href="#about"
                fontSize="0.95rem"
                fontWeight="600"
                color="gray.700"
                transition="color 0.3s"
              >
                会社紹介
              </Link>
            </Box>
            <Box
              position="relative"
              _hover={{
                '& a': { color: '#aa00aa' },
                '&::after': { width: '100%' },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#aa00aa',
                transition: 'width 0.3s',
              }}
            >
              <Link
                href="#business"
                fontSize="0.95rem"
                fontWeight="600"
                color="gray.700"
                transition="color 0.3s"
              >
                事業内容
              </Link>
            </Box>
            <Box
              position="relative"
              _hover={{
                '& a': { color: '#aa00aa' },
                '&::after': { width: '100%' },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#aa00aa',
                transition: 'width 0.3s',
              }}
            >
              <Link
                href="#recruit"
                fontSize="0.95rem"
                fontWeight="600"
                color="gray.700"
                transition="color 0.3s"
              >
                募集要項
              </Link>
            </Box>
            <Box
              position="relative"
              _hover={{
                '& a': { color: '#aa00aa' },
                '&::after': { width: '100%' },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#aa00aa',
                transition: 'width 0.3s',
              }}
            >
              <Link
                href="#benefits"
                fontSize="0.95rem"
                fontWeight="600"
                color="gray.700"
                transition="color 0.3s"
              >
                福利厚生
              </Link>
            </Box>
            <Link
              href="#contact"
              bg="#aa00aa"
              color="white"
              px={5}
              py={2}
              borderRadius="6px"
              fontSize="0.95rem"
              fontWeight="600"
              _hover={{
                bg: '#8800aa',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(170, 0, 170, 0.3)',
              }}
              transition="all 0.3s"
            >
              お問い合わせ
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
