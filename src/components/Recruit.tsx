import { type FC } from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Badge } from '@chakra-ui/react';
import ScrollFadeIn from './ScrollFadeIn';

const Recruit: FC = () => {
  const positions = [
    {
      title: 'SE（Web・オープン系）経験者',
      type: '正社員',
      salary: '月給26～60万円',
      description: 'スキルに応じた研修・プロジェクト配置を行います。案件選択制度あり、還元率80％以上。リモート対応可能です。',
      requirements: [
        'Web・オープン系システム開発の実務経験',
        'Java、C#.NET、PHP、Ruby on Railsなどの開発経験',
        'チームでの開発経験',
      ],
    },
    {
      title: 'インフラ・ネットワークエンジニア',
      type: '正社員',
      salary: '月給25～60万円',
      description: 'AWS、Azureなどのクラウド環境の構築・運用経験者を募集。スキルアップを目指せる環境です。',
      requirements: [
        'インフラ・ネットワークの実務経験',
        'AWS、Azure等のクラウド環境の知識',
        'Linux/Windowsサーバーの構築・運用経験',
      ],
    },
    {
      title: 'SE（Web・オープン系）未経験可',
      type: '正社員',
      salary: '月給23～60万円',
      description: '未経験からエンジニアを目指す方を歓迎。充実した研修制度でサポートします。',
      requirements: [
        'ITエンジニアとして成長したい意欲',
        '基礎的なPCスキル',
        'チームワークを大切にできる方',
      ],
    },
  ];

  return (
    <Box as="section" id="recruit" py={{ base: 12, md: 20 }} px={8} bg="gray.50">
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
            募集要項
          </Heading>
        </ScrollFadeIn>
        <VStack gap={8} align="stretch" w="100%">
          {positions.map((position, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <Box
                key={`position-${index}`}
                w="100%"
                maxW="100%"
                bg="white"
                p={10}
                borderRadius="10px"
                boxShadow="0 5px 20px rgba(0, 0, 0, 0.08)"
                transition="all 0.3s"
                _hover={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                  transform: 'translateY(-5px)',
                }}
              >
                <Flex
                  justify="space-between"
                  align={{ base: 'flex-start', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                  gap={4}
                  mb={6}
                >
                  <Box>
                    <Heading as="h3" fontSize="1.5rem" color="gray.800" mb={2}>
                      {position.title}
                    </Heading>
                    <Text fontSize="1.05rem" color="#aa00aa" fontWeight="bold">
                      {position.salary}
                    </Text>
                  </Box>
                  <Badge
                    bg="#aa00aa"
                    color="white"
                    fontSize="0.9rem"
                    fontWeight="bold"
                    px={6}
                    py={2}
                    borderRadius="50px"
                  >
                    {position.type}
                  </Badge>
                </Flex>
                <Text fontSize="0.95rem" lineHeight="1.7" color="gray.600" mb={6}>
                  {position.description}
                </Text>
                <Box>
                  <Heading as="h4" fontSize="1.1rem" mb={3} color="gray.800">
                    必要なスキル・経験
                  </Heading>
                  <Box as="ul" listStyleType="none" p={0}>
                    {position.requirements.map((req, idx) => (
                      <Box
                        as="li"
                        key={idx}
                        color="gray.600"
                        position="relative"
                        pl={6}
                        py={1}
                        _before={{
                          content: '"✓"',
                          position: 'absolute',
                          left: 0,
                          color: '#aa00aa',
                          fontWeight: 'bold',
                        }}
                      >
                        {req}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </ScrollFadeIn>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Recruit;
