import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Envio03Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[409px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-center p-8 md:px-5 rounded-lg w-[440px] md:w-full">
          <Button
            className="common-pointer flex h-10 items-center justify-center w-10"
            onClick={() => navigate("/dashboard")}
          >
            <Img className="h-3" src="images/img_close.svg" alt="close" />
          </Button>
          <Text
            className="mt-4 text-black-900 text-center text-lg tracking-[-0.00px]"
            size="txtInterBold18"
          >
            Enviar uma quantia
          </Text>
          <Text
            className="mt-1 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Transação realizada com sucesso.
          </Text>
          <div className="flex flex-col md:gap-[31px] items-center justify-start w-full">
            <Line className="bg-gray-300 h-px mt-8 w-full" />
            <Text
              className="leading-[140.00%] mt-8 text-[13px] text-blue_gray-700 tracking-[-0.00px] w-full"
              size="txtInterRegular13"
            >
              A quantia que você inseriu, será transferida em alguns instantes
              de sua conta para a conta do destinatário.{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Envio03Page;
