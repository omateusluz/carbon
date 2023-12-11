import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const DetalhesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="common-pointer bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[206px] md:px-10 sm:px-5 w-full"
        onClick={() => navigate("/dashboard")}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 md:px-5 rounded-lg w-[30%] md:w-full">
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
            Detalhes da transação
          </Text>
          <Text
            className="mt-1 text-base text-black-900 tracking-[-0.00px]"
            size="txtInterRegular16Black900"
          >
            Confira mais informações do movimento.
          </Text>
          <div className="flex flex-col items-start justify-start mt-8 w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Enviado / Recebido
            </Text>
            <Input
              name="data"
              placeholder="Matheus Luz"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Identificador do usuário
            </Text>
            <Input
              name="dataone"
              placeholder="42958673058679"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Identificador da transação
            </Text>
            <Input
              name="datatwo"
              placeholder="8593953"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
              type="number"
            ></Input>
            <Text
              className="cursor-text mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Quantia
            </Text>
            <Input
              name="datathree"
              placeholder="8593953"
              className="flex flex-col justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 justify-center mt-2 pl-4 rounded-md w-full"
              type="number"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Data e hora
            </Text>
            <Input
              name="datafour"
              placeholder="22/04/2022 -&gt; 15:45"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Button
              className="!text-white-A700 bg-black-900 cursor-pointer font-semibold h-10 min-w-[376px] sm:min-w-full mt-8 rounded-md text-[13px] text-center tracking-[-0.00px] w-full"
              color="black_900"
            >
              <>Compartilhar -&gt;</>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesPage;
