

import Header from "../components/Header";  // Header 컴포넌트 불러오기
import Feed from "../components/Feed";      // Feed 컴포넌트 불러오기
import Navbar from "../components/Navbar";  // Navbar 컴포넌트 불러오기

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 상단 헤더 */}
      <Header />

      <div className="flex">
        {/* 좌측 내비게이션 */}
        <Navbar />

        {/* 피드 */}
        <Feed />
      </div>
    </div>
  );
}
