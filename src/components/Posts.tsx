import {getPostsData} from "@src/lib/getPost";
// import ListItem from "@/app/component/ListItem";
const Posts = () => {
    const post = getPostsData();
    return(
        <ul>
            {/*{post.map(p=> (<ListItem key={p.id} post={p}/>))}*/}
        </ul>
    )
}

export default Posts;