// page.js
'use client';
import React, { useEffect, useState } from 'react';
import { Element } from '../components/study';   
import { DivWrapper } from '../components/pageheader'; // DivWrapper 컴포넌트 import
import { Nav } from '../components/Header'; // Nav 컴포넌트 import
import ButtonList from '../components/Button'; // Button 컴포넌트 import
//각 섹션 별 화면







    const Page = () => {
          const [data, setData] = useState([]);
          const [data2, setData2] = useState([]);

          useEffect(() => {
            // 첫 번째 fetch
            const fetchStudyData = async () => {
              try {
                const response = await fetch("https://b-cube.kr/api/study", {
                  headers: {
                    Referer: "https://b-cube.kr",
                    "Content-Type": "application/json",
                  },
                });
                const data = await response.json();
                setData(data);
              } catch (error) {
                console.error("Error fetching study data:", error);
              }
            };

            // 두 번째 fetch (디자인톤)
            const fetchDesignTone = async () => {
              try {
                const response = await fetch("https://b-cube.kr/api/designton", {
                  headers: {
                    Referer: "https://b-cube.kr",
                    "Content-Type": "application/json",
                  },
                });
                const data = await response.json();
                setData2(data);
              } catch (error) {
                console.error("Error fetching design tone data:", error);
              }
            };

            fetchStudyData();
            fetchDesignTone();
          }, []);
        
    const buttons = [
    "디자인톤",
    "섹시한 IT",
    "스터디",
    "기타",
  
    ];

    const DesignTone = ({ data2 }) => (
    <>
        <DivWrapper
            title="스터디"
            description="팀원들과 함께 스터디를 진행하며, 서로의 지식을 공유하고 성장하는 활동"
        />
        <Element items={data2} />
    </>
);
    const SexyIT = () => (
        <DivWrapper
            title="섹시한 IT"
            description="💡아는 것이 섹시하다, 섹시하게 IT하자💡
            매달 다양한 IT관련 주제를 가지고 카드뉴스를 만들어 정보를 공유하는 활동"
        />
    );
    const Study = ({ data }) => (
    <>
        <DivWrapper
            title="스터디"
            description="팀원들과 함께 스터디를 진행하며, 서로의 지식을 공유하고 성장하는 활동"
        />
        <Element items={data} />
    </>
);
    const Other = () => (
        <DivWrapper
            title="기타활동"
            description="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동"
        />
    );

     // 탭 컴포넌트 배열
    const [selected, setSelected] = useState(0);
     const tabComponents = [
    <DesignTone data2={data2} key="디자인톤" />,    // ← data 전달!
    <SexyIT key="섹티" />,
    <Study data={data} key="스터디" />,
    <Other key="기타활동" />
  ];
    


    return (
        <div>
            <Nav />
            <ButtonList buttons={buttons} selected={selected} setSelected={setSelected}></ButtonList>
            <div>
              {tabComponents[selected]}
            </div>
        </div>
    );
};

export default Page;

