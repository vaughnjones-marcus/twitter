import { Avatar, Divider, Flex, Text, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { Box } from "@chakra-ui/react";

const Replies = ({userAvatar, createdAt, comment, username, at}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(32);
  return (
    <>
        <Flex gap={4} py={2} my={2} w={"full"}>
            <Avatar src={userAvatar} size={"sm"} />
            <Flex gap={1} w={"full"} flexDirection={"column"}>
                <Flex w={"full"} justifyContent={"space-between"}>
                    <Flex w={"full"} alignItems={"center"}>
                    <Text fontSize={"sm"} fontWeight="bold"> {username}  </Text>
                    <Text ml={1} color={"gray.light"}>{at}</Text>
                    <Box ml={1} w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
                    <Text ml={1} fontSize={"sm"} color={"gray.light"}>{createdAt}</Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <BsThreeDots />   
                    </Flex>
                </Flex>
                <Text>
                    {comment}
                </Text>
                <Actions  liked={liked} setLiked={setLiked} likes={likes} onLike={(change) => setLikes(likes + change)}/>
            </Flex>
        </Flex>
        <Divider my={4} />
    
    </>
  )
}

export default Replies