import React, { useState } from 'react';
import { Box, VStack, Flex, Text, Link } from "@chakra-ui/react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoShare } from "react-icons/go";
const Actions = ({likes, replies, onLike}) => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
        if (!isHeartClicked) {
            onLike(1);
        } else{
            onLike(-1);
        }
    };

    const [isRepostClicked, setIsRepostClicked] = useState(false);

    const handleRepostClick = () => {
        setIsRepostClicked(!isRepostClicked);
    };

  return (
    <Flex w={"full"} onClick={(e) => e.preventDefault()}> 
        <Flex justifyContent="space-between" alignItems="center" w="full">
            <Flex>
                <IoChatbubbleOutline className='reply-container'/>
                <Text ml={2} color={"gray.light"} marginTop={1}>{replies}</Text>
            </Flex>
            <Flex>
                <CiRepeat 
                className={`repost-container ${isRepostClicked ? 'repost-clicked' : ''}`}
                size={18}
                onClick={handleRepostClick}
                />
                <Text ml={2} color={"gray.light"} marginTop={1}>32</Text>
            </Flex>
            
            <Flex>
                <CiHeart 
                className={`like-container ${isHeartClicked ? 'heart-clicked' : ''}`}
                size={18}
                onClick={handleHeartClick}
                />
                <Text ml={2} color={"gray.light"} marginTop={1}>{likes}</Text>
            </Flex>
                <GoShare className='reply-container' size={16}/>
        </Flex>
            
    </Flex>
  )
}

export default Actions