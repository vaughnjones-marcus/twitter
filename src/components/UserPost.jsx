import { Link } from 'react-router-dom';
import { Flex, Box, Text} from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { BsThreeDots } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import Actions from "../components/Actions";
import { Divider } from '@chakra-ui/react';

const UserPost = ({postImg,postTitle,likes,replies}) => {
  return (
    <Link to={ "/marcusv663/post/1"}>
        <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size="md" name="Marcus Vaughn-jones" src="/egg.png" />
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
        <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>Marcus Vaughn-Jones </Text>

            <Text ml={1} color={"gray.light"}>  @marcusv663</Text>
            <Box ml={1} w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
            <Text ml={1} fontStyle={"sm"} color={"gray.light"}>1d</Text>
            </Flex>
            <Flex alignItems={"center"}>
            <BsThreeDots />
            </Flex>
        </Flex>

        <Text fontSize={"sm"}> {postTitle} </Text>
        {postImg && (

        <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
            <Image src={postImg} w={"full"} />
        </Box>
        
        )}

        

        <Flex gap={3} my={1}> 
            <Actions likes={likes} replies={replies}/>
        </Flex>
        </Flex>
        </Flex>
        <Divider/>
    </Link>
  )
}

export default UserPost