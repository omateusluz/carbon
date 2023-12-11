import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";

const Recuperar02Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[366px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-center p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Text
            className="text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Insira o código para verificar
          </Text>
          <Text
            className="mt-1 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Nós enviamos um código para o email.
          </Text>
          <div className="flex flex-col items-start justify-start mt-7 w-[99%] md:w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Código
            </Text>
            <Input
              name="mobileNo"
              placeholder="1234567890"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="border border-gray-300 border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
              type="number"
            ></Input>
            <Button
              className="common-pointer !text-white-A700 bg-black-900 cursor-pointer font-semibold h-10 min-w-[376px] sm:min-w-full mt-8 rounded-md text-[13px] text-center tracking-[-0.00px]"
              onClick={() => navigate("/recuperar03")}
              color="black_900"
            >
              <>Resetar senha -&gt;</>
            </Button>
            <Text
              className="common-pointer mt-8 text-[13px] text-blue_gray-700 tracking-[-0.00px]"
              size="txtInterSemiBold13Bluegray700"
              onClick={() => navigate("/recuperar01")}
            >
              <>&lt;- Retornar</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recuperar02Page;
