import React from "react";
import HotPost from "../common/hotPost";
import { useParams } from "react-router-dom";
import { Posts } from "../../utils/const";
import moment from "moment";
import { CiClock2 } from "react-icons/ci";

function DetailPost() {
    const { id } = useParams();
    console.log("Posts", Posts)
    let post = Posts.find(item => item.id.toString() === id);

    return (
        <div className="div-main-detail-post">
            <div className="div-post-relate-to">
                <HotPost></HotPost>
            </div>
            <div className="div-detail-post">
                <span style={{fontSize: 32, fontWeight: "bold"}}>{post.title}</span>
                <span style={{display: "flex", alignContent: "center", gap: 5, fontSize: 18, fontStyle: "italic", color: "#808080"}}>
                    <CiClock2 /> Ngày đăng: {moment().format("DD/MM/YYYY")}
                </span>
                <div className="div-post-content">
                    <img src={post.url} alt="" style={{width: "50%", height: "60%"}}/>
                    <span>{post.content}</span>
                </div>               
            </div>                              
        </div>
    )
}

export default DetailPost;