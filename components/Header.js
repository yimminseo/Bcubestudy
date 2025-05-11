import React from "react";
import "./style.css";

export const Nav = () => {
    return (
        <div className="nav">
            <div className="b-CUBE">
                <div className="logo" />

                  <div className="div">
                    B-CUBE
                  </div>
                </div>

              <div className="navbar">
                  <div className="cursor-pointer p-3 hover:bg-gray-200 div">소개</div>
                  <div className="cursor-pointer p-3 hover:bg-gray-200 div">프로젝트</div>
                  <div className="cursor-pointer p-3 hover:bg-gray-200 div">후기</div>
                  <div className="cursor-pointer p-3 hover:bg-gray-200 div">리크루팅</div>
              </div>
            </div>
    );
};

