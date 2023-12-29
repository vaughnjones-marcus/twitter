import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Replies = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(32);
  return (
    <>
        <Flex gap={4} py={2} my={2} w={"full"}>
            <Avatar src='/egg.png' size={"sm"} />
            <Flex gap={1} w={"full"} flexDirection={"column"}>
                <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"sm"} fontWeight="bold"> @Marcus Vaughn-Jones </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                        <BsThreeDots />
                    </Flex> 
                </Flex>
                <Text>This look perfect... Hopfully</Text>
                <Actions  liked={liked} setLiked={setLiked} likes={likes} onLike={(change) => setLikes(likes + change)}/>
            </Flex>
        </Flex>
        <Divider my={4} />
    
    </>
  )
}

export default Replies