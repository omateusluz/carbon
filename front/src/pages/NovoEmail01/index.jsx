import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const NovoEmail01Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-end mx-auto p-[327px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Text
            className="text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Redefinir o email
          </Text>
          <Text
            className="mt-1 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Insira o email para alterar.
          </Text>
          <div className="flex flex-col items-stretch justify-start mt-8 w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Novo email
            </Text>
            <Input
              name="email"
              placeholder="oi@carbon.com"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
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
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[376px] sm:min-w-full mt-8 text-[13px] text-center tracking-[-0.00px]"
              onClick={() => navigate("/novoemail02")}
              color="black_900"
            >
              <>Alterar email -&gt;</>
            </Button>
            <Text
              className="common-pointer mt-8 text-[13px] text-blue_gray-700 tracking-[-0.00px]"
              size="txtInterSemiBold13Bluegray700"
              onClick={() => navigate("/configuracoes")}
            >
              <>&lt;- Retornar</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovoEmail01Page;
