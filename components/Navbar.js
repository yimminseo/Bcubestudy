export default function Navbar() {
  return ( <div className="w-65 p-4 bg-gray-100 h-screen">
      <div className="space-y-5">
        <div className="cursor-pointer p-3 hover:bg-gray-200">Home</div>
        <div className="cursor-pointer p-3 hover:bg-gray-200">Search</div>
        <div className="cursor-pointer p-3 hover:bg-gray-200">Messages</div>
        <div className="cursor-pointer p-3 hover:bg-gray-200">Profile</div>
      </div>
    </div>
  );
}
