import { Avatar, Flex, Text, Box, Image } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import  Actions  from "../components/Actions";
import { useState } from 'react';

const PostPage = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(32);
    return <>
        <Flex>
            <Flex w={"full"} alignItems={"center"} gap={3}>
                <Avatar src='/egg.png' size={"md"} name='Marcus Vaughn-Jones' />
                <Flex>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                        @MVJ
                    </Text>
                </Flex>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.light"}>
                    1d 
                </Text>
                <BsThreeDots cursor={"pointer"} />
            </Flex>
        </Flex>

        <Text my={3}> Let's talk about Threads.</Text>

        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
            <Image src={"/post1.jpeg"} w={"full"} />
        </Box>

        <Flex gap={3} my={3}>
            <Actions liked={liked} setLiked={setLiked} likes={likes} onLike={() => setLikes(likes + 1)}/>
        </Flex>

    </>;
};

export default PostPage;