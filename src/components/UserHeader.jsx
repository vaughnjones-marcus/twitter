import { Avatar } from  "@chakra-ui/avatar";
import { Box, VStack, Flex, Text } from "@chakra-ui/react";

const UserHeader = () => {
    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"}w={"full"}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Marcus Vaughn-Jones
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} color={"gray.light"}>@marcusv663</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar 
                    name="Marcus Vaughn"
                    src="/egg.png"
                    size={"xl"}
                    />
                </Box>

            </Flex>
            <Text>This is a small twitter bio, I want more words in here.</Text>
            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontWeight={"bold"}>198k</Text>
                    <Text color={"gray.light"}>Following</Text>

                    <Text fontWeight={"bold"}>198k</Text>
                    <Text color={"gray.light"}>Followers</Text>
                </Flex>
                <Flex></Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;