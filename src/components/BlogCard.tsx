import { BlogPost } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaPenSquare } from "react-icons/fa";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <Link href={`/blog/${post.id}`} className="relative overflow-hidden flex flex-col items-stretch">
      <Image src={post.image_url ? post.image_url : '/svg/blank.svg'} alt="basket" width={1000} height={1000} className='' />
      <div className="p-4 flex flex-col items-start justify-start gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" />
            <span>July 22nd</span>
          </div>
          
          {/* divider */}
          <div className="block h-full w-px bg-gray-400" />

          <div className="flex items-center gap-2">
            <FaPenSquare className="text-gray-400" />
            <span>By {post.author}</span>
          </div>
        </div>
        <h3 className="h4">{post.title}</h3>
        <div className="">{post.preview}</div>
      </div>
    </Link>
)

export default BlogCard;