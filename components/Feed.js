import Post from "../components/Post";



// Feed.js
export default function Feed() {
  return (
    <div className="flex-grow p-7">
      <Post imageSrc="/images/b.jpg" userName="User 1" timeAgo="2 hours ago" likes="100" comments="10" />
      <Post imageSrc="/images/c.jpg" userName="User 1" timeAgo="2 hours ago" likes="101" comments="10" />
      <Post imageSrc="/images/d.jpg" userName="User 1" timeAgo="2 hours ago" likes="100" comments="10" />
    </div>
  );}


