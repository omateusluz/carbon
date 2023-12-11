import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const CadastroPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-60 md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Text
            className="text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Crie uma nova conta
          </Text>
          <Text
            className="mt-2 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Insira os dados para cadastrar.
          </Text>
          <div className="flex flex-col items-start justify-between mt-8 w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Nome *
            </Text>
            <Input
              name="input"
              placeholder="Matheus Luz"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!bg-white-A700 !border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Email *
            </Text>
            <Input
              name="email"
              placeholder="oi@carbon.com"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="border border-gray-300 border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
              type="email"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Senha *
            </Text>
            <Input
              name="inputone"
              placeholder="* * * * * * * *"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Confirmação da senha *
            </Text>
            <Input
              name="inputtwo"
              placeholder="* * * * * * * *"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-[5px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
              size="txtInterRegular13"
            >
              Mínimo de 4 caracteres
            </Text>
            <Button
              className="common-pointer !text-white-A700 bg-black-900 cursor-pointer font-semibold h-10 min-w-[376px] sm:min-w-full mt-8 rounded-md text-[13px] text-center tracking-[-0.00px] w-full"
              onClick={() => navigate("/dashboard")}
              color="black_900"
            >
              <>Cadastrar -&gt;</>
            </Button>
            <Text
              className="common-pointer flex flex-col items-center justify-center mt-[30px] text-[13px] text-blue_gray-700 tracking-[-0.00px] w-full"
              size="txtInterSemiBold13Bluegray700"
              onClick={() => navigate(-1)}
            >
              <>Tenho uma conta -&gt;</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroPage;