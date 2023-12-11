import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[62px] items-start justify-end mx-auto pt-8 sm:px-5 px-8 w-full">
        <div className="flex flex-col items-center max-w-[1336px] mx-auto md:px-5 w-full">
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
              onClick={() => navigate("/configuracoes")}
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
        </div>
        <div className="flex flex-col items-center max-w-[1336px] mx-auto w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.00px]"
            size="txtInterBold24"
          >
            Olá, Matheus Luz
          </Text>
          <Text
            className="text-base text-blue_gray-700 tracking-[-0.00px]"
            size="txtInterRegular16"
          >
            Gerencie seu dinheiro e envie ou receba.
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 items-center max-w-[1336px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-center pt-16 w-full">
            <div className="border border-gray-300 border-solid flex md:flex-1 flex-col gap-[13px] h-64 items-start justify-start p-4 rounded-[16px] w-[668px] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-black-900 text-lg tracking-[-0.00px]"
                size="txtInterBold18"
              >
                Carteira
              </Text>
              <div className="border border-gray-300 border-solid flex flex-col h-48 items-center justify-center md:px-10 sm:px-5 rounded-[16px] w-[632px] md:w-full">
                <Text
                  className="md:text-5xl text-6xl sm:text-[42px] text-black-900 text-center tracking-[-0.01px]"
                  size="txtInterBlack56"
                >
                  R$ 22.000.000,00
                </Text>
              </div>
            </div>
            <div
              className="common-pointer bg-gray-300 flex md:flex-1 flex-col h-64 items-start justify-center pt-8 px-8 rounded-[16px] w-[302px] md:w-full"
              onClick={() => navigate("/envio01")}
            >
              <Text
                className="text-black-900 text-lg tracking-[-0.00px]"
                size="txtInterBold18"
              >
                Enviar
              </Text>
              <Img
                className="flex flex-col h-[196px] items-stretch justify-center pl-[60px] pt-4 static"
                src="images/img_vector_gray_900.svg"
                alt="vector"
              />
            </div>
            <div className="bg-gray-300 flex md:flex-1 flex-col md:gap-[25px] h-64 items-start justify-center pt-8 px-8 rounded-[16px] w-[302px] md:w-full">
              <Text
                className="mr-[190px] text-black-900 text-lg tracking-[-0.00px]"
                size="txtInterBold18"
              >
                Histórico
              </Text>
              <Img
                className="h-[190px] mx-auto pt-2"
                src="images/img_vector_gray_900_194x202.svg"
                alt="vectorone"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-full">
            <div className="flex flex-col items-center justify-center pt-16 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-lg tracking-[-0.00px]"
                    size="txtInterBold18"
                  >
                    Transações recentes
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400 tracking-[-0.00px]"
                    size="txtInterRegular16Bluegray400"
                  >
                    Monitore todas as movimentações financeiras.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer min-w-[102px] md:ml-[0] ml-[798px] text-[13px] text-center tracking-[-0.00px]"
                  variant="outline"
                >
                  Pesquisar...
                </Button>
                <Button
                  className="cursor-pointer min-w-[68px] ml-4 md:ml-[0] text-[13px] text-center tracking-[-0.00px]"
                  variant="outline"
                >
                  Filtrar
                </Button>
              </div>
              <div className="bg-gray-300 flex flex-row items-start justify-between mt-7 p-[7px] rounded-md w-full">
                <Text
                  className="ml-2 text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                  size="txtInterSemiBold13Bluegray700"
                >
                  Nome
                </Text>
                <Text
                  className="text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                  size="txtInterSemiBold13Bluegray700"
                >
                  Quantia
                </Text>
                <Text
                  className="text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                  size="txtInterSemiBold13Bluegray700"
                >
                  Data
                </Text>
                <Text
                  className="mr-2 text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                  size="txtInterSemiBold13Bluegray700"
                >
                  Detalhes
                </Text>
              </div>
              <List
                className="flex flex-col gap-[7.5px] items-center mt-4 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                      <div className="bg-black-900 flex flex-col h-10 items-center justify-start rounded-md w-10">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-md w-10"
                          src="images/img_foto.png"
                          alt="foto"
                        />
                      </div>
                      <Text
                        className="ml-4 md:ml-[0] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        Matheus Luz
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[276px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        - R$ 5.000,00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[343px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        22/04/2022
                      </Text>
                      <Button
                        className="flex h-10 items-center justify-center md:ml-[0] ml-[343px] w-10"
                        variant="outline"
                      >
                        <Img src="images/img_detalhes.svg" alt="detalhes" />
                      </Button>
                    </div>
                    <Line className="bg-gray-300 w-full" />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                      <div className="bg-black-900 flex flex-col h-10 items-center justify-start rounded-md w-10">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-md w-10"
                          src="images/img_foto.png"
                          alt="foto"
                        />
                      </div>
                      <Text
                        className="ml-4 md:ml-[0] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        Matheus Luz
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[276px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        - R$ 5.000,00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[343px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        22/04/2022
                      </Text>
                      <Button
                        className="flex h-10 items-center justify-center md:ml-[0] ml-[343px] w-10"
                        variant="outline"
                      >
                        <Img src="images/img_detalhes.svg" alt="detalhes" />
                      </Button>
                    </div>
                    <Line className="bg-gray-300 w-full" />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                      <div className="bg-black-900 flex flex-col h-10 items-center justify-start rounded-md w-10">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-md w-10"
                          src="images/img_foto.png"
                          alt="foto"
                        />
                      </div>
                      <Text
                        className="ml-4 md:ml-[0] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        Matheus Luz
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[276px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        - R$ 5.000,00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[343px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        22/04/2022
                      </Text>
                      <Button
                        className="flex h-10 items-center justify-center md:ml-[0] ml-[343px] w-10"
                        variant="outline"
                      >
                        <Img src="images/img_detalhes.svg" alt="detalhes" />
                      </Button>
                    </div>
                    <Line className="bg-gray-300 w-full" />
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                      <div className="bg-black-900 flex flex-col h-10 items-center justify-start rounded-md w-10">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-md w-10"
                          src="images/img_foto.png"
                          alt="foto"
                        />
                      </div>
                      <Text
                        className="ml-4 md:ml-[0] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        Matheus Luz
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[276px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        - R$ 5.000,00
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[343px] text-[13px] text-blue_gray-700 tracking-[-0.00px]"
                        size="txtInterSemiBold13Bluegray700"
                      >
                        22/04/2022
                      </Text>
                      <Button
                        className="flex h-10 items-center justify-center md:ml-[0] ml-[343px] w-10"
                        variant="outline"
                      >
                        <Img src="images/img_detalhes.svg" alt="detalhes" />
                      </Button>
                    </div>
                    <Line className="bg-gray-300 h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
