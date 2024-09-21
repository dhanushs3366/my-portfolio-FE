function BlogCard({ blog }) {
  const date = new Date(blog.updated_at);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className="w-full h-[100px] p-4 bg-black  rounded-md hover:bg-green-900 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="flex justify-between border-b-2 border-green-300">
        <p className="text-ellipsis w-[80%] text-green-400">{blog.title}</p>
        <p className="text-sm text-green-500 font-semibold">{`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
      </div>
      <div className="text-green-300 overflow-hidden line-clamp-2" style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden'
      }}>
        {blog.content}
      </div>
    </div>
  );
}

export default BlogCard;
