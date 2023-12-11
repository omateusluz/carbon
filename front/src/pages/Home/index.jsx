import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto p-[108px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[250px] items-center justify-start mb-[282px] w-[61%] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-center w-[12%] md:w-full">
            <Button
              className="flex h-8 items-center justify-center w-8"
              color="black_900"
              size="xs"
            >
              <Img className="h-4" src="images/img_grid.svg" alt="grid" />
            </Button>
            <Text
              className="text-black-900 text-lg tracking-[-0.00px]"
              size="txtInterBold18"
            >
              CARBON
            </Text>
          </div>
          <Text
            className="common-pointer leading-[100.00%] md:text-5xl text-[100px] text-gray-300 tracking-[-0.02px]"
            size="txtInterBlack100"
            onClick={() => navigate("/entrar")}
          >
            <span className="text-black-900 font-inter text-left font-black">
              <>
                ENVIE & RECEBA
                <br />
                DINHEIRO,
              </>
            </span>
            <span className="text-gray-300 font-inter text-left font-black">
              <>
                {" "}
                SIMPLES
                <br />& TRANSPARENTE {" "}
              </>
            </span>
            <span className="text-black-900 font-inter text-left font-black">
              <>→</>
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomePage;
