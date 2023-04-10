import Layout from "@/components/layout/Layout";
import { fetchPost, fetchPosts } from "@/lib/fetchFunctions";
import { BlogPost } from "@/types/types";
import { FaCalendarAlt, FaPenSquare } from "react-icons/fa";

export default function BlogSingle({ post }: { post: BlogPost }) {
  return (
    <Layout>
      <section className="p-4 py-40">
        <div className="container">
          <h1 className="text-center">{post.title}</h1>

          <div className="flex items-center gap-6 w-full justify-center p-8">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-xl text-gray-400" />
              <span className="smallcaps">July 22nd</span>
            </div>
            
            {/* divider */}
            <div className="block h-6 w-0.5 bg-gray-400" />

            <div className="flex items-center gap-2">
              <FaPenSquare className="text-xl text-gray-400" />
              <span className="smallcaps">By {post.author}</span>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps(context: any) {
  const baseUrl = context.req ? `http://${context.req.headers.host}` : '';
  const postId = context.query.id;
  const post = await fetchPost(baseUrl, postId); 
  return { props: { post } };
}
