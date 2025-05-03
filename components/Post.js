export default function Post() {
  return (
    <div className="bg-white border p-4 mb-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <div>User</div>
        <div>2 hours ago</div>
      </div>
      <div>
        <img src="/images/b.jpg" alt="Post Image" className="w-full h-auto" />
      </div>
      <div className="flex justify-between mt-2">
        <div>100 Likes</div>
        <div>10 Comments</div>
      </div>
    </div>
  );
}