import { Col, Modal, Row, Space } from "antd";
import React from "react";
import { Apple, Avacado, Search } from '../../../../assets';
import { CustomButton, TRow, TData, Table, Container, InputText, Text } from '../../../../styledComponents';
import {SearchBar} from "../../../../components";
import { useAddItemLogic  } from './useAddItemLogic';

const AddItem = ({ showModal, setShowModal }) => {
  const {
    isCatalogLoading,
    isCatalogEmpty,
    isCatalogFetched,
    handleSearch,
    handleInputChange,
    handleAddProducts,
    selectedProductCount,
    setInitialStates,
    isInReviewMode,
    searchText,
    setSearchText,
    catalog,
    setIsInReviewMode
    } = useAddItemLogic();

  React.useEffect(() => {
    if (!showModal) {
      setInitialStates();
    }
  }, [showModal]);

  return (
    <>
      <Modal
        open={showModal}
        title={
          <Text ellipsis primary bold>
            {"Add product from Sysco's catalog"}
          </Text>
        }
        onOk={() => {}}
        width={900}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={false}
      >
        <Container space borderTop>
          <Row gutter={10}>
            <Col span={24}>
              <Container space>
                <Text large>
                  {!isInReviewMode
                    ? "Search products from Sysco's catalog and add quantity"
                    : "Review before adding products"}
                </Text>
              </Container>
            </Col>
            {!isInReviewMode && (
              <>
                <Col span={12}>
                  <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                    placeholder={"Search fish / beef / chicken ..."}
                  />
                </Col>
              </>
            )}
            {!isCatalogFetched && !isCatalogLoading && (
              <Col span={24}>
                <Row justify={"center"}>
                  <Col span={12} style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                    <img src={Search} width="100px" height="100px" />
                  </Col>
                  <Col span={13}>
                    <Container center>
                      <Text green bold xLarge>
                        Search for your product
                      </Text>
                    </Container>
                  </Col>
                </Row>
              </Col>
            )}
            {!isCatalogLoading && !!isCatalogFetched && !!isCatalogEmpty && (
              <Col span={24}>
                <Row span={12} justify="center">
                  <Col span={12} style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                    <img src={Search} width="100px" height="100px" />
                  </Col>
                  <Col span={13}>
                    <Container center>
                      <Text green bold xLarge>
                        No products found. Try fish / chicken / beef
                      </Text>
                    </Container>
                  </Col>
                </Row>
              </Col>
            )}
            {(isCatalogLoading || (!isCatalogEmpty && !!catalog.length)) && (
              <>
                <Col span={24}>
                  <Container space>
                    <Table>
                      <thead>
                        <TRow background={"lightgrey"}>
                          <TData
                            width={"5px"}
                            borderTop
                            borderBottom
                            radius="top-left"
                          ></TData>
                          <TData space="2px" width={"25%"} borderTop borderBottom>
                            <Text primary>Product name</Text>
                          </TData>
                          <TData width={"25%"} borderTop borderBottom>
                            <Text primary>Brand</Text>
                          </TData>
                          <TData width={"15%"} borderTop borderBottom>
                            <Text primary>Packing</Text>
                          </TData>
                          <TData width={"15%"} borderTop borderBottom>
                            <Text primary>Price($)</Text>
                          </TData>
                          <TData
                            width={"15%"}
                            borderTop
                            borderBottom
                            radius="top-right"
                          >
                            <Text primary>Qt.</Text>
                          </TData>
                        </TRow>
                      </thead>
                      <tbody>
                        {!isCatalogLoading
                          ? (catalog || [])
                              .filter((item) =>
                                !isInReviewMode ? true : item.quantity > 0
                              )
                              .map((item) => (
                                <TRow key={item.uuid}>
                                  <TData width={"5%"} borderBottom borderLeft>
                                    <img
                                      src={
                                        item?.category === "fruit"
                                          ? Apple
                                          : Avacado
                                      }
                                      height="50"
                                      width="50"
                                    />
                                  </TData>
                                  <TData space width={"35%"} borderBottom>
                                    <Text primary>{item.name}</Text>
                                  </TData>
                                  <TData width={"10%"} borderBottom>
                                    <Text primary>{item.brand}</Text>
                                  </TData>
                                  <TData width={"10%"} borderBottom>
                                    <Text primary>{`${item.unit}`}</Text>
                                  </TData>
                                  <TData width={"10%"} borderBottom>
                                    {/* <Text primary bold>{item.quantity}</Text> */}
                                    <InputText
                                      disabled={isInReviewMode}
                                      forEdit
                                      min={0}
                                      type="number"
                                      value={item.price}
                                      onChange={(e) =>
                                        handleInputChange({
                                          item,
                                          type: "price",
                                          value: e.target.value,
                                        })
                                      }
                                    ></InputText>
                                  </TData>
                                  <TData width={"10%"} borderBottom borderRight>
                                    <InputText
                                      disabled={isInReviewMode}
                                      forEdit
                                      min={0}
                                      type="number"
                                      placeholder="-"
                                      value={item.quantity}
                                      onChange={(e) =>
                                        handleInputChange({
                                          item,
                                          type: "quantity",
                                          value: e.target.value,
                                        })
                                      }
                                    ></InputText>
                                  </TData>
                                </TRow>
                              ))
                          : [1, 2, 3, 4, 5].map((item) => (
                              <TRow key={item}>
                              </TRow>
                            ))}
                      </tbody>
                    </Table>
                  </Container>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col span={12}>
                      <Container space>
                        <Text green bold>
                          Total{" "}
                        </Text>
                        <Text green>{`${selectedProductCount} product`}</Text>
                      </Container>
                    </Col>
                    <Col span={12}>
                      <Container space right>
                        <Space>
                          {!isInReviewMode && (
                            <CustomButton
                              primary
                              disabled={!selectedProductCount}
                              onClick={() => setIsInReviewMode(true)}
                            >
                              Review
                            </CustomButton>
                            
                          )}
                          {!!isInReviewMode && (
                            <>
                              <CustomButton onClick={() => setIsInReviewMode(false)}>
                                Back
                              </CustomButton>
                              <CustomButton
                                primary
                                onClick={() => {
                                  handleAddProducts();
                                  setShowModal(false);
                                }}
                              >
                                Add
                              </CustomButton>
                            </>
                          )}
                        </Space>
                      </Container>
                    </Col>
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default AddItem;
