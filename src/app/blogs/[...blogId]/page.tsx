
export default function BlogDetail({ params }: { params: { blogId: string } }) {
  const id = params.blogId;
  return (
    <div className="min-h-screen">
      <p>Post: {id}</p>
    </div>
  );
}
