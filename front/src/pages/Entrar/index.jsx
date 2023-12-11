import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const EntrarPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[299px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-center p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Button className="!bg-colors flex h-10 items-center justify-center rounded-md w-10">
            <Img
              className="h-4"
              src="images/img_grid_black_900.svg"
              alt="grid"
            />
          </Button>
          <Text
            className="mt-4 text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Entre em sua conta
          </Text>
          <Text
            className="mt-2 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Insira os dados para entrar.
          </Text>
          <div className="flex flex-col items-start justify-start mt-8 w-[99%] md:w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Email
            </Text>
            <Input
              name="email"
              placeholder="oi@carbon.com"
              className="flex flex-row items-center justify-start p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-row h-10 items-center justify-start mt-2 pl-4 rounded-md w-full"
              type="email"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Senha
            </Text>
            <Input
              name="input"
              placeholder="* * * * * * * *"
              className="flex flex-row items-center justify-start p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="border border-gray-300 border-solid flex flex-row h-10 items-center justify-start mt-2 pl-4 rounded-md w-full"
              size="xs"
            ></Input>
            <Button
              className="common-pointer !text-white-A700 bg-black-900 cursor-pointer flex font-semibold h-10 items-center justify-center mt-8 rounded-md text-[13px] text-center tracking-[-0.00px] w-[376px]"
              onClick={() => navigate("/dashboard")}
              color="black_900"
            >
              <>Entrar -&gt;</>
            </Button>
            <div className="flex flex-row items-start justify-between mt-8 w-full">
              <Text
                className="common-pointer text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                size="txtInterSemiBold13Bluegray700"
                onClick={() => navigate("/cadastro")}
              >
                <>Não tenho uma conta -&gt;</>
              </Text>
              <Text
                className="common-pointer text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                size="txtInterSemiBold13Bluegray700"
                onClick={() => navigate("/recuperar01")}
              >
                <>Esqueci minha senha -&gt;</>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntrarPage;
