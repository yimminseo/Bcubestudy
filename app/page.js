// page.js
import React from 'react';
import { Element } from '../components/study';   
import { DivWrapper } from '../components/pageheader';
import { Nav } from '../components/Header'; // Nav 컴포넌트 import

const Page = () => {
    // 페이지에서 사용할 데이터 정의 (각 항목에 이미지 URL 추가)
    const data = [
        {
            year: '2024',
            studyName: '파이썬 스터디',
            imagePath: '/images/b.jpg' // 이미지 URL
        },
        {
            year: '2023',
            studyName: 'JAVA 스터디',
            imagePath: '/images/c.jpg' // 이미지 URL
        },
        {
            year: '2024',
            studyName: 'HTML 스터디',
             // 이미지 URL
        },
        {
            year: '2025',
            studyName: '리액트 스터디',
            imagePath: '/images/d.jpg' // 이미지 URL
        },
        {
            year: '2025',
            studyName: '리액트 스터디',
            imagePath: '/images/d.jpg' // 이미지 URL
        },
        {
            year: '2025',
            studyName: '리액트 스터디',
            imagePath: '/images/d.jpg' // 이미지 URL
        }
        
    ];

    return (
        <div>
            <Nav />
            <DivWrapper
                title="스터디"
                description="팀원들과 함께 스터디를 진행하며, 서로의 지식을 공유하고 성장하는 활동"
            />
            {/* 페이지 제목 */}
            {/* Element 컴포넌트에 데이터 전달 */}
            <Element items={data} />
        
        </div>
    );
};

export default Page;

