import { type FC } from 'react';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const Business: FC = () => {
  const businesses = [
    {
      title: 'ITソリューション',
      description: 'システム企画、構築、運用を一括提供。Java、C#.NET、PHP、Ruby on Rails、AWS、Azureなど多様な開発環境に対応し、お客様のビジネスを技術面から支援します。',
    },
    {
      title: 'Webサイト制作',
      description: 'Webサイトの制作から運用・保守まで一貫して対応。企画段階からお客様と共に作り上げ、公開後も継続的なサポートを提供します。',
    },
    {
      title: '採用支援',
      description: '人財採用の支援と育成提案を行い、企業の成長をサポート。採用戦略の立案から実行まで、トータルでお手伝いします。',
    },
  ];

  return (
    <Box as="section" id="business" py={{ base: 12, md: 20 }} px={8} bg="white">
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
            事業内容
          </Heading>
        </ScrollFadeIn>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={8}
          justifyItems="center"
        >
          {businesses.map((business, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <Box
                p={10}
                bg="gray.50"
                borderRadius="10px"
                border="2px solid"
                borderColor="transparent"
                transition="all 0.3s"
                w="100%"
                maxW={{ base: '100%', md: '400px', lg: 'none' }}
                _hover={{
                  transform: 'translateY(-10px)',
                  borderColor: '#aa00aa',
                  boxShadow: '0 10px 30px rgba(170, 0, 170, 0.2)',
                }}
              >
                <Heading as="h3" fontSize="1.25rem" mb={3} color="gray.800">
                  {business.title}
                </Heading>
                <Text fontSize="0.95rem" lineHeight="1.7" color="gray.600">
                  {business.description}
                </Text>
              </Box>
            </ScrollFadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Business;
