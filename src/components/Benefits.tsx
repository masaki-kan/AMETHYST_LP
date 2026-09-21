import { type FC } from 'react';
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const Benefits: FC = () => {
  const benefits = [
    {
      icon: '🏥',
      title: '社会保険完備',
      description: '健康保険、厚生年金、雇用保険、労災保険を完備',
    },
    {
      icon: '📚',
      title: '研修制度',
      description: 'スキルアップのための各種研修プログラムを用意',
    },
    {
      icon: '🎓',
      title: '資格取得支援',
      description: '業務に関連する資格取得を全面的にサポート',
    },
    {
      icon: '🏠',
      title: '社宅制度',
      description: '遠方からの入社者には社宅を提供',
    },
    {
      icon: '🚇',
      title: '交通費全額支給',
      description: '通勤にかかる交通費を全額支給',
    },
    {
      icon: '💰',
      title: '退職金制度',
      description: '長く働いていただける環境を整備',
    },
  ];

  return (
    <Box as="section" id="benefits" py={{ base: 12, md: 20 }} px={8} bg="white">
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
            福利厚生
          </Heading>
        </ScrollFadeIn>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={8}
          justifyItems="center"
        >
          {benefits.map((benefit, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <Box
                key={`benefit-${index}`}
                textAlign="center"
                p={8}
                borderRadius="10px"
                transition="all 0.3s"
                w="100%"
                maxW={{ base: '100%', md: '350px', lg: 'none' }}
                _hover={{
                  bg: 'gray.50',
                  transform: 'translateY(-5px)',
                }}
              >
                <Text fontSize="3.5rem" mb={4}>
                  {benefit.icon}
                </Text>
                <Heading as="h3" fontSize="1.15rem" mb={2} color="gray.800">
                  {benefit.title}
                </Heading>
                <Text fontSize="0.9rem" color="gray.600" lineHeight="1.6">
                  {benefit.description}
                </Text>
              </Box>
            </ScrollFadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Benefits;
