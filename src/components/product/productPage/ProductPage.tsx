import React, {useEffect, useState} from 'react';
import Meta from "antd/es/card/Meta";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Button, Card, Carousel, Image} from 'antd';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {IProductItem} from "../list/types.ts";


function ProductPage(props) {
    const { id } = useParams<{ id: string }>();
    const [productItem, setProductItem] = useState<IProductItem>();

    const urlApi = `${import.meta.env.VITE_REACT_APP_JAVA_API}api/rest/product/get`;

    useEffect(() => {
        // axios.get<ICategoryItem[]>("http://localhost:8000/api/products?categoryId="+id)
        //axios.get<ICategoryItem[]>("http://localhost:8889/api/rest/category/getAllCategories")
        axios.get<IProductItem>(`${urlApi}/${id}`)
            .then(resp => {
                console.log("product", resp.data);
                setProductItem(resp.data);
            });
    }, [id]);

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: 'auto',
        width: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        justifyContent: 'center',
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'center' ,
    };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const navigate = useNavigate()

    const onFinish = () => {
        navigate(-1);
    }

    return (
        <>


            <div className="py-12 bg-white" >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex justify-between" >
                        <div style={{fontSize: "xx-large"}}>
                            {productItem?.name}
                        </div>
                        <div style={{fontSize: "larger"}}>
                            {productItem?.categoryName}
                        </div>
                    </div>


                    <Card
                        cover={

                            <Carousel autoplay>
                                {productItem?.productImages.map((v) => (
                                    <div  className={"text-center"}>
                                        <Image src={import.meta.env.VITE_REACT_APP_JAVA_API + 'uploadImages/600_' + v.name}
                                               alt={productItem?.productImages[0].name}
                                               height={500} width={500}
                                        />
                                    </div>
                                ))}

                            </Carousel>

                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta

                            // title={productItem?.name}
                            description={productItem?.description}
                        />
                        <div className="flex justify-between" style={{margin: 10, paddingTop: 20, paddingBottom: 20, fontSize: "large"}}>
                            <div>Price: {Math.round(productItem?.price * 100) / 100} $</div>
                            <div>Dics: {Math.round(productItem?.discount* 100) / 100} %</div>
                        </div>

                        <div className="flex justify-center">
                            <Button onClick={onFinish}>Back</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default ProductPage;