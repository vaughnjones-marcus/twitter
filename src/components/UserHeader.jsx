import { Avatar } from  "@chakra-ui/avatar";
import { Box, VStack, Flex, Text, Link } from "@chakra-ui/react";
import { MdMailOutline } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { useToast } from "@chakra-ui/toast"
import { PiDotsThreeCircleLight } from "react-icons/pi";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    Portal
  } from '@chakra-ui/react'

const UserHeader = () => {
    const toast = useToast();

    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast ({ 
                status: "success",
                description: " Profile Link copied",
                duration: 1500,
                isClosable: true,
            });
        });
    };

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
                    <Text fontWeight={"bold"}>375</Text>
                    <Text color={"gray.light"}>Following</Text>

                    <Text fontWeight={"bold"}>5.1M</Text>
                    <Text color={"gray.light"}>Followers</Text>
                </Flex>
                <Flex>
                    <Box className='icon-container'>
                        <Menu>

                        <MenuButton>

                        <PiDotsThreeCircleLight size={24} cursor={"pointer"} />
                        </MenuButton>
                        <Portal>
                            <MenuList bg={"gray.dark"}>
                                <MenuItem onClick={copyURL}>Copy Link</MenuItem>
                                <MenuItem>Block profile</MenuItem>
                            </MenuList>
                        </Portal>
                        </Menu>
                    </Box>
                    <Box className='icon-container'>
                        <MdMailOutline size={24} cursor={"pointer"} />
                    </Box>
                    <Box className='icon-container'>
                        <IoPersonAddOutline size={24} cursor={"pointer"} />
                    </Box>
                </Flex>
            </Flex>

            <Flex w={"full"}> 
            <Flex className='tab-container' flex={1} borderBottom={".5px solid gray"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"}> Posts </Text>
            </Flex>
            <Flex className='tab-container' flex={1} borderBottom={".5px solid gray"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"}> Replies </Text>
            </Flex>
            <Flex className='tab-container' flex={1} borderBottom={".5px solid gray"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"}> Media </Text>
            </Flex>
            <Flex className='tab-container' flex={1} borderBottom={".5px solid gray"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"}> Likes </Text>
            </Flex>
            
            </Flex>
        </VStack>
    );
};

export default UserHeader;