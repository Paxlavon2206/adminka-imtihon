import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Icon1 } from "../assets/icons/icon1";
import { Icon2 } from "../assets/icons/icon2";
import { Icon3 } from "../assets/icons/icon3";
import { Icon4 } from "../assets/icons/icon4";
import { Icon5 } from "../assets/icons/icon5";

export const AppLayout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  
// Function to determine active link based on pathname
const determineActiveLink = () => {
  const { pathname } = location;
  if (pathname === "/") return "icon1";
  if (pathname === "/app/category/create") return "icon5"; // Check for /app/category/create first
  if (pathname.startsWith("/app")) return "icon2";
  if (pathname.startsWith("/app/category")) return "icon3";
  if (pathname.startsWith("/app/product")) return "icon4";
  return "";
};



  // Set active link when component mounts
  useState(() => {
    setActiveLink(determineActiveLink());
  }, [location.pathname]);

  // Function to handle click on the links
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const title = () => {
    const { pathname } = location;
  if (pathname == "/app") return "Товары";
  if (pathname == "/app/category") return "Категории";
  if (pathname == "/app/product/create") return "Товары / Новый товар";
  if (pathname == "/app/category/create") return "Категория / Создать категорию";
  return "";
  }
  return (
    

    <div className=" bg-[#EEEEF5] h-screen pb-10">
      <div className="bg-white pl-[150px] py-4">
        <h3 className="text-[20px] font-extrabold leading-[23px] mb-1">
          {title()}
        </h3>
        <h4 className="text-[#B5B5C3] text-[13px] font-bold leading-[21px]">
          Главная / {title()}
        </h4>
      </div>
      
      <div className="bg-white  h-[80%]  flex-grow mr-[60px] ml-[150px] mt-10 rounded-lg overflow-y-scroll">  
<Outlet />
      </div>
     
      <div className="fixed top-0">
        <div className="h-screen bg-primary pt-[30px] px-6  items-center">
          <div className="items-center ">
            <div className="mb-9 w-8 h-8 mr-auto ml-auto">
              <Link to="/" onClick={() => handleLinkClick("icon1")}>
                {" "}
                <Icon1 />{" "}
              </Link>
            </div>
            <div
              className={`mb-8 ${activeLink === "icon2" ? "bg-active" : ""} rounded-lg`}
            >
              <Link to="/app" onClick={() => handleLinkClick("icon2")}>
                {" "}
                <div className="p-3">
                  <Icon2 />{" "}
                </div>{" "}
              </Link>
            </div>
            <div
              className={`mb-8 ${activeLink === "icon3" ? "bg-active" : ""} rounded-lg`}
            >
              <Link to="/app/category" onClick={() => handleLinkClick("icon3")}>
                {" "}
                <div className="p-3">
                  <Icon3 />{" "}
                </div>{" "}
              </Link>
            </div>
            <div
              className={`mb-8 ${activeLink === "icon4" ? "bg-active" : ""} rounded-lg`}
            >
              <Link to="/app/product/create" onClick={() => handleLinkClick("icon4")}>
                {" "}
                <div className="p-3">
                  <Icon4 />{" "}
                </div>{" "}
              </Link>
            </div>
            <div
              className={`mb-8 ${activeLink === "icon5" ? "bg-active" : ""} rounded-lg`}
            >
              <Link to="/app/category/create" onClick={() => handleLinkClick("icon5")}>
                {" "}
                <div className="p-3">
                  <Icon5 />{" "}
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};
