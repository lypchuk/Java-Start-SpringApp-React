import React, {useEffect, useState} from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import {Link, useParams} from "react-router-dom";
import {ICategoryItem} from "./types.ts";
import axios from "axios";
import {Image, List, Skeleton, Space, Table, TableColumnsType} from "antd";
import Column from "antd/es/table/Column";

function CategoryListPage(props) {
    const [data, setData] = useState<ICategoryItem[]>([]);

    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        // axios.get<ICategoryItem[]>("http://localhost:8000/api/products?categoryId="+id)
        axios.get<ICategoryItem[]>("http://localhost:8889/api/rest/category/getAllCategories")
            .then(resp => {
                console.log("list categories", resp.data);
                setData(resp.data);
            });
    }, [id]);

    // const columns: TableColumnsType<ICategoryItem> = [
    //     { title: 'Name', dataIndex: 'name', key: 'name' },
    //     { title: 'Description', dataIndex: 'description', key: 'description' },
    //     { title: 'Creation Time', dataIndex: 'creationTime', key: 'creationTime' },
    //     { title: 'Image', dataIndex: 'image', key: 'image' },
    //     {
    //         title: 'Action',
    //         dataIndex: '',
    //         key: 'x',
    //         render: () => <a>Delete</a> ,
    //     },
    // ];


    // const deleteProduct = async (id: number) => {
    //
    //     await axios.delete(`http://localhost:8000/api/products/${id}`).then(resp=> {
    //         console.log(resp);
    //         if (resp.status === 200) {
    //             console.log(id);
    //             setData(data.filter((item) => item.id !== id));
    //         }
    //     });
    //     console.log(data);
    // };

    return (
        <div className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-24">
                <div>
                    <h1>Список категорій</h1>
                </div>

                {/*<List*/}
                {/*    className="demo-loadmore-list"*/}
                {/*    // loading={initLoading}*/}
                {/*    itemLayout="horizontal"*/}
                {/*    // loadMore={loadMore}*/}
                {/*    dataSource={data}*/}
                {/*    renderItem={(item) => (*/}
                {/*        <List.Item*/}
                {/*            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}*/}
                {/*        >*/}
                {/*            <Skeleton avatar title={false} loading={item.loading} active>*/}
                {/*                /!*<List.Item.Meta*!/*/}
                {/*                /!*    avatar={<Avatar src={item.picture.large} />}*!/*/}
                {/*                /!*    title={<a href="https://ant.design">{item.name?.last}</a>}*!/*/}
                {/*                /!*    description="Ant Design, a design language for background applications, is refined by Ant UED Team"*!/*/}
                                {/*/>*/}
                    {/*                <div>{item.description}</div>*/}
                {/*            </Skeleton>*/}
                {/*        </List.Item>*/}
                {/*    )}*/}
                {/*></List>*/}

                <Table
                    //columns={columns}
                    dataSource={data}
                >
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Description" dataIndex="description" key="description" />
                    <Column title="Creation Time" dataIndex="creationTime" key="creationTime" />
                    <Column title="Image" dataIndex="image" key="image" />

                    <Column
                        title="Image"
                        key="image"
                        render={(_: any, record: ICategoryItem) => (
                            <Image src={'http://localhost:8889/uploadImages/300_' + record.image} alt={record.image} height={120} width={120}/>
                        )}
                    />

                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: ICategoryItem) => (
                            <Space size="middle">
                                <a>Edite</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>

                <Link to={"/products/create"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Додати
                    </button>
                </Link>

            </div>


        </div>


    );
}

export default CategoryListPage;