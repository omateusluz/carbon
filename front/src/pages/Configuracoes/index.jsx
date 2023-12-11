import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const ConfiguracoesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto p-8 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1336px] mb-[269px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Button
              className="common-pointer flex h-10 items-center justify-center w-10"
              onClick={() => navigate("/dashboard")}
              color="black_900"
            >
              <Img className="h-4" src="images/img_grid.svg" alt="grid" />
            </Button>
            <div className="bg-black-900 flex flex-col h-10 items-center justify-start md:ml-[0] ml-[1144px] rounded-md w-10">
              <Img
                className="h-10 md:h-auto object-cover rounded-md w-10"
                src="images/img_foto.png"
                alt="foto"
              />
            </div>
            <Button
              className="common-pointer flex h-10 items-center justify-center ml-4 md:ml-[0] w-10"
              onClick={() => navigate("/dashboard")}
            >
              <Img className="h-3" src="images/img_search.svg" alt="search" />
            </Button>
            <Button
              className="common-pointer flex h-10 items-center justify-center ml-4 md:ml-[0] w-10"
              onClick={() => navigate("/")}
            >
              <Img className="h-3" src="images/img_close.svg" alt="close" />
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start mt-[63px]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.00px]"
              size="txtInterBold24"
            >
              Configurações
            </Text>
            <Text
              className="mt-0.5 text-base text-blue_gray-700 tracking-[-0.00px]"
              size="txtInterRegular16"
            >
              Personalize e altere suas informações.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-end mt-[60px] sm:pr-5 pr-[29px] py-[29px] w-full">
            <List
              className="flex flex-col gap-8 pt-[212px] w-[57%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      Nome completo
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      Matheus Luz
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400 tracking-[-0.00px]"
                    size="txtInterRegular16Bluegray400"
                  >
                    Exibido ao efetuar ou receber pagamentos.
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-lg tracking-[-0.00px]"
                    size="txtInterBold18"
                  >
                    Foto de Perfil
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[3px] w-full">
                    <Text
                      className="text-base text-blue_gray-400 tracking-[-0.00px]"
                      size="txtInterRegular16Bluegray400"
                    >
                      É mostrado ao efetuar ou receber pagamentos.
                    </Text>
                    <Text
                      className="text-base text-blue_gray-700 tracking-[-0.00px]"
                      size="txtInterRegular16"
                    >
                      <>Editar -&gt;</>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      Identificador
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      17865484326
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400 tracking-[-0.00px]"
                    size="txtInterRegular16Bluegray400"
                  >
                    Permite organizar suas transações.
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      luz@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[91%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-400 tracking-[-0.00px]"
                      size="txtInterRegular16Bluegray400"
                    >
                      Usado para mantermos o contato.
                    </Text>
                    <Text
                      className="common-pointer text-base text-blue_gray-700 tracking-[-0.00px]"
                      size="txtInterRegular16"
                      onClick={() => navigate("/novoemail01")}
                    >
                      <>Editar -&gt;</>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-0.5 text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      Senha
                    </Text>
                    <Text
                      className="mb-0.5 text-black-900 text-lg tracking-[-0.00px]"
                      size="txtInterBold18"
                    >
                      * * * * * * * *
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[3px] w-[94%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-400 tracking-[-0.00px]"
                      size="txtInterRegular16Bluegray400"
                    >
                      Mantém a segurança de seu dinheiro.
                    </Text>
                    <Text
                      className="common-pointer text-base text-blue_gray-700 tracking-[-0.00px]"
                      size="txtInterRegular16"
                      onClick={() => navigate("/recuperar01")}
                    >
                      <>Editar -&gt;</>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfiguracoesPage;
