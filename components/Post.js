import Button from '../components/Button'; 

export default function Post({ imageSrc, userName, timeAgo, comments }) {
  return (
    <div className="bg-white border p-4 mb-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <div>{userName}</div>
        <div>{timeAgo}</div>
      </div>
      <div>
        <img src={imageSrc} alt="Post Image" className="w-full h-auto" />
      </div>
      <div className="flex justify-between mt-2">
        <div style={{ width: '500px' }}>

          <Button 
          label="Like" 
          fullWidth={false}  // 전체 너비를 차지하는 버튼
          boxColor="bg-[#FF5733]" 
          textColor="text-[#FFFFFF]" 
          fontSize="text-[18px]" 
          padding="py-[12px] px-[20px]" 
          disabled={false} 
      />


        </div>
        <div>{comments} Comments</div>
      </div>
    </div>
  );
}