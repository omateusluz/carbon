import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const Envio02Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter items-center justify-start mx-auto p-[178px] md:px-10 sm:px-5 w-full">
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
            Confira os detalhes do envio.
          </Text>
          <div className="flex flex-col items-start justify-start mt-8 w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Quantia que será enviada
            </Text>
            <Input
              name="price"
              placeholder="R$ 66.444,00"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-3.5 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Identificador da conta destino
            </Text>
            <Input
              name="data"
              placeholder="42958673058679"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Text
              className="mt-4 text-[13px] text-black-900 tracking-[-0.00px]"
              size="txtInterSemiBold13"
            >
              Nome da conta destino
            </Text>
            <Input
              name="dataone"
              placeholder="Lucas Prado"
              className="flex flex-col items-stretch justify-center p-0 placeholder:text-blue_gray-400 text-[13px] text-left tracking-[-0.00px] w-full"
              wrapClassName="!border-colors border border-solid flex flex-col h-10 items-stretch justify-center mt-2 pl-4 rounded-md w-full"
            ></Input>
            <Line className="bg-gray-300 h-px mt-8 w-full" />
            <Text
              className="leading-[140.00%] mt-8 text-[13px] text-blue_gray-700 tracking-[-0.00px] w-full"
              size="txtInterRegular13"
            >
              Verifique a quantia, identificador e nome da conta destino. Após
              se certificar de que todos os dados estão corretos, insira a senha
              e clique enviar para concluir a transação.
            </Text>
            <Text
              className="mt-8 text-[13px] text-black-900 tracking-[-0.00px]"
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
              onClick={() => navigate("/envio03")}
              color="black_900"
            >
              <>Enviar -&gt;</>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Envio02Page;
