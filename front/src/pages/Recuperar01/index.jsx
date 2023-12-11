import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const Recuperar01Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[366px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Text
            className="text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Redefinir a senha
          </Text>
          <Text
            className="mt-2 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Insira o email para resetar sua senha.
          </Text>
          <div className="block flex-col items-start justify-start mt-8 w-[99%] md:w-full">
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
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="border border-gray-300 border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
              type="email"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[376px] sm:min-w-full mt-8 text-[13px] text-center tracking-[-0.00px]"
              onClick={() => navigate("/recuperar02")}
              color="black_900"
            >
              <>Resetar senha -&gt;</>
            </Button>
            <Text
              className="common-pointer flex justify-start mt-8 text-[13px] text-blue_gray-700 tracking-[-0.00px]"
              size="txtInterSemiBold13Bluegray700"
              onClick={() => navigate("/entrar")}
            >
              <>&lt;- Retornar</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recuperar01Page;
