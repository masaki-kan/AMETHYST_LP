import { type FC } from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Footer: FC = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} px={8}>
      <Container maxW="full" textAlign="center">
        {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} mb={8}>
          <VStack align="flex-start" spacing={3}>
            <Heading as="h4" fontSize="1.2rem" mb={4} color="white">
              会社情報
            </Heading>
            <Text color="gray.300" fontSize="0.95rem" fontWeight="bold">
              株式会社AMETHYST
            </Text>
            <Box>
              <Text color="gray.400" fontSize="0.85rem" mb={1}>
                本社
              </Text>
              <Text color="gray.300" fontSize="0.95rem">
                大阪市阿倍野区天王寺町南2-16-4
              </Text>
              <Text color="gray.400" fontSize="0.85rem">
                天王寺駅より徒歩8分
              </Text>
            </Box>
            <Box>
              <Text color="gray.400" fontSize="0.85rem" mb={1}>
                東京オフィス
              </Text>
              <Text color="gray.300" fontSize="0.95rem">
                渋谷区渋谷2-10-15
              </Text>
              <Text color="gray.400" fontSize="0.85rem">
                渋谷駅より徒歩6分
              </Text>
            </Box>
            <Text color="gray.300" fontSize="0.95rem">
              設立: 2018年2月
            </Text>
          </VStack>
          <VStack align="flex-start" spacing={2}>
            <Heading as="h4" fontSize="1.2rem" mb={4} color="white">
              リンク
            </Heading>
            <Link href="#about" color="gray.300" _hover={{ color: '#aa00aa' }} transition="color 0.3s">
              会社紹介
            </Link>
            <Link href="#business" color="gray.300" _hover={{ color: '#aa00aa' }} transition="color 0.3s">
              事業内容
            </Link>
            <Link href="#recruit" color="gray.300" _hover={{ color: '#aa00aa' }} transition="color 0.3s">
              募集要項
            </Link>
            <Link href="#benefits" color="gray.300" _hover={{ color: '#aa00aa' }} transition="color 0.3s">
              福利厚生
            </Link>
            <Link href="#contact" color="gray.300" _hover={{ color: '#aa00aa' }} transition="color 0.3s">
              お問い合わせ
            </Link>
          </VStack>
          <VStack align="flex-start" spacing={3}>
            <Heading as="h4" fontSize="1.2rem" mb={4} color="white">
              勤務情報
            </Heading>
            <Box>
              <Text color="gray.400" fontSize="0.85rem" mb={1}>
                勤務時間
              </Text>
              <Text color="gray.300" fontSize="0.95rem">
                9:00～18:00（実働8時間）
              </Text>
            </Box>
            <Box>
              <Text color="gray.400" fontSize="0.85rem" mb={1}>
                休日
              </Text>
              <Text color="gray.300" fontSize="0.95rem">
                年間120日以上
              </Text>
              <Text color="gray.300" fontSize="0.95rem">
                完全週休2日制（土日）+ 祝日
              </Text>
            </Box>
          </VStack>
        </SimpleGrid> */}
        <Text color="gray.400" fontSize="0.9rem">
          &copy; 2018-2026 株式会社AMETHYST. All rights reserved.
        </Text>
        {/* <Box textAlign="center" pt={8} borderTop="1px solid" borderColor="gray.700">

        </Box> */}
      </Container>
    </Box>
  );
};

export default Footer;
