import React from "react";
import Post from "../../../test/src/Componants/Post";
import Tags from "./Tags"; // تأكد من أن المسار صحيح

function PostList() {
    const posts = [
        { title: "This is the post Title", body: "This is the post body" },
        { title: "This is the post Title", body: "This is the post body" },
        { title: "This is the post Title", body: "This is the post body" },
        { title: "This is the post Title", body: "This is the post body" },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 flex gap-8">
            {/* قائمة المنشورات */}
            <div className="flex-1 space-y-4">
                {posts.map((post, index) => (
                    <div key={index} className="border border-teal-500 rounded-lg p-4 shadow-md">
                        <Post title={post.title} body={post.body} />
                    </div>
                ))}
            </div>

            {/* قائمة العلامات (Tags) */}
            <div className="w-1/3">
                <Tags />
            </div>
        </div>
    );
}

export default PostList;
