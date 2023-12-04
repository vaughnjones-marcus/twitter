import { Flex, Image, useColorMode } from "@chakra-ui/react";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex justifyContent={"center"} mt={6} mb='12'>
            <Image
                cursor={"pointer"}
                alt='logo'
                w={10}
                src={colorMode === "dark" ? "/blue-logo.png" : "/black-logo.svg"}
                onClick={toggleColorMode}
            />
        </Flex>
    );
};

export default Header; 