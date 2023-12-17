import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";



const UserPage = () => {
    return (
    <>
        <UserHeader />
        <UserPost likes={1432} replies={103} postImg="/public/post1.jpeg" postTitle="this is it "/>
        <UserPost likes={329} replies={42} postImg="/post2.png" postTitle="GOAT JAMES!!!!!!!!!!!!!!! "/>
        <UserPost likes={243} replies={13} postImg="/post3.png" postTitle="the grammer doesnt matter in these "/>
        <UserPost likes={243} replies={13} postTitle="This is a post with no picture the way twitter was intended to be used "/>
    </>
    );
};

export default UserPage;