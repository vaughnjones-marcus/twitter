import { Avatar, Flex, Text, Box, Image } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import  Actions  from "../components/Actions";
import { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import Replies from '../components/Replies';

const PostPage = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(32);
    return <>
        <Flex>
            <Flex w={"full"} alignItems={"center"} gap={3}>
                <Avatar src='/egg.png' size={"md"} name='Marcus Vaughn-Jones' />
                <Flex alignItems={"center"}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                        Marcus Vaughn-Jones
                    </Text>

                    <Text fontSize={"sm"} ml={1} color={"gray.light"}>
                        @MVJ
                    </Text>
                    <Box ml={1} w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
                    <Text ml={1} fontStyle={"sm"} color={"gray.light"}>1d</Text>
                </Flex>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
                <BsThreeDots cursor={"pointer"} />
            </Flex>
        </Flex>

        <Text my={3}> Let's talk about twitter.</Text>

        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
            <Image src={"/post1.jpeg"} w={"full"} />
        </Box>

        <Divider my={4}/>
        <Flex gap={3} my={3}>
            <Actions liked={liked} setLiked={setLiked} likes={likes} onLike={(change) => setLikes(likes + change)}/>
        </Flex>
        <Divider my={4}/>

        <Flex justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar src='/egg.png' size={"md"} />
                <Text color={"gray.light"} ml={3}>Post your reply</Text>
            </Flex>
            <Button>
                Reply
            </Button>
        </Flex>

        <Divider my={4}/>
        <Replies 
        comment="This look really good"
        createdAt="2d"
        likes={100}
        username="johndoe"
        userAvatar="https://bit.ly/dan-abramov"
        at="@R4ndom1"
        />
        <Replies 
        comment="a diffrent really long reply so i can see what heppans when we have a line break. I think this is long enough!"
        createdAt="1d"
        likes={274}
        username="Sucram"
        userAvatar="https://bit.ly/tioluwani-kolawole"
        at="@JVM"
        />
        <Replies 
        comment="cool dude."
        createdAt="56d"
        likes={378}
        username="jamar ramsey"
        userAvatar="https://bit.ly/kent-c-dodds"
        at="@Dolfinsfin5"
        />
    </>;
};

export default PostPage;