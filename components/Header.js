// page.js
export default function Header() {
  return (
    <div className="flex p-5 bg-white border-b">
      <div className="flex space-x-5">
        <div className="w-13 h-12 bg-gray-300 rounded-full flex justify-center items-center">User 1</div>
        <div className="w-13 h-12 bg-gray-300 rounded-full flex justify-center items-center">User 2</div>
        <div className="w-13 h-12 bg-gray-300 rounded-full flex justify-center items-center">User 3</div>
      </div>
    </div>
  );
}