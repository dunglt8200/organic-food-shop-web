import React from "react";
import HotPost from "../common/hotPost";
import { useParams, useNavigate  } from "react-router-dom";
import { Posts } from "../../utils/const";
import moment from "moment";
import { CiClock2 } from "react-icons/ci";

function DetailPost() {
    const navigate = useNavigate();
    const { id } = useParams();
    let post = Posts.find(item => item.id.toString() === id);
    function handleReturn() {
        navigate(-1)
    }
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
                <div className="div-comment">
                    <span style={{fontSize: 22, color: "#333"}}>Viết bình luận của bạn</span>
                    <input className="input-comment" type="text" placeholder="Họ và tên"/>
                    <textarea className="input-comment" style={{height: "150px"}} name="" id="" placeholder="Nội dung"></textarea>
                    <button className="btn-comment">Bình luận</button>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                    <button className="btn-return" onClick={handleReturn}>Trở về</button>
                </div>                
            </div>                                   
        </div>
    )
}

export default DetailPost;