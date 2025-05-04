export default function Button({
  fullWidth = false,  // 전체 너비 여부 (기본값: false)
  label = '버튼',  // 버튼에 표시될 텍스트 (기본값: '버튼')
  boxColor = 'bg-[#3884FF]',  // 배경색 (기본값: 파란색)
  textColor = 'text-[#FFFFFF]',  // 텍스트 색상 (기본값: 흰색)
  fontSize = 'text-[20px]',  // 폰트 크기 (기본값: 20px)
  padding = 'py-[16px] px-[16px]',  // 패딩 (기본값: 16px)
  disabled = false  // 비활성화 여부 (기본값: false)
}) {
  // buttonClass를 배열로 정의하고, 조건에 맞게 클래스를 추가
  const buttonClass = [
    boxColor, 
    textColor, 
    fontSize, 
    padding, 
    fullWidth ? 'w-full' : '',  // fullWidth가 true일 때 'w-full' 추가, 아니면 빈 문자열
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100',  // disabled에 따른 스타일 추가
    'rounded-lg',  // 기본적으로 'rounded-lg' 클래스를 항상 적용
    'transition-colors duration-300',  // 상태 변화 시 부드럽게 색상 변화
    'hover:bg-[#FF7043]',  // hover 상태일 때 배경색 변경
    'active:bg-[#dffdfd]',  // active(클릭) 상태일 때 배경색 변경
  ].join(' ');  // join(' ')으로 배열의 요소들을 공백으로 구분하여 문자열로 결합

  return (
    <button
      className={buttonClass}  // 결합된 클래스명을 적용
      disabled={disabled}  // disabled 여부 설정
    >
      {label}  {/* 버튼에 표시할 텍스트 */}
    </button>
  );
}