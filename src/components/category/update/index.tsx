import React, {useEffect, useState} from 'react';
import {useForm} from "antd/es/form/Form";
import axios from "axios";
import {Button, Form, Input, Modal, Row, Upload, UploadFile} from "antd";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {ICategoryUpdate} from "./types.ts";
import {ICategoryCreate} from "../create/types.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ICategoryItem} from "../list/types.ts";


function CategoryUpdatePage(props) {
    const navigate = useNavigate()

    const [previewOpen, setPreviewOpen] = useState<boolean>(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const params = useParams();
    const [form] = Form.useForm<ICategoryUpdate>();
    const url = `${import.meta.env.VITE_REACT_APP_JAVA_API}api/category`;

    const [editCategoryItem, setEditCategoryItem] = useState<ICategoryItem[]>([]);
    useEffect(() => {
        axios.get<ICategoryItem[]>(`${import.meta.env.VITE_REACT_APP_JAVA_API}api/rest/category/getByIdCategory/${params.id}`)
            .then(resp => {
                console.log("list categories", resp.data);
                setEditCategoryItem(resp.data);
                form.setFieldsValue(resp.data);

                console.log("IMAGE categories", `${import.meta.env.VITE_REACT_APP_JAVA_API + 'uploadImages/300_' + resp.data.image}`);
                setPreviewImage(`${import.meta.env.VITE_REACT_APP_JAVA_API + 'uploadImages/300_' + resp.data.image}`)
                setPreviewOpen(true);
                setPreviewTitle(resp.data.image);
                //form.setFieldsValue({ images: editPost.Images });
            });


    }, []);

    const loadEditCategoty = async  () =>{

    }

    const onSubmitForm = async (values: ICategoryUpdate) => {
        //console.log("Create category data", values);
        const url = `${import.meta.env.VITE_REACT_APP_JAVA_API}api/rest/category/update/${values.id}`;
        console.log("Result is good id ",values);
        //const url ="http://localhost:8889/api/rest/category/update";
        try {
            const id = await axios.patch<number>(url, values,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            console.log("Result is good id ", id);
            navigate(-1);
        }
        catch(e) {
            console.log("Error", e);
        }

    }

    return (
        <>
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-24">
                    <p className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Редагування категорії
                    </p>
                    <Form
                        name={'basic'}
                        form={form}
                        onFinish={onSubmitForm}
                        layout={"vertical"}
                        initialValues={{remember: true,}}>

                        <Form.Item
                            label={"ID"}
                            name="id"
                            htmlFor={"id"}

                            rules={[
                                {required: true, message: "Вкажіть назву категорії"}
                            ]}
                        >
                            <Input autoComplete={"name"} disabled={true} />
                        </Form.Item>

                        <Form.Item
                            label={"Назва"}
                            name="name"
                            htmlFor={"name"}
                            rules={[
                                {required: true, message: "Вкажіть назву категорії"}
                            ]}
                        >
                            <Input autoComplete={"name"} />
                        </Form.Item>

                        {/*<Form.Item*/}
                        {/*    label={"Назва"}*/}
                        {/*    name="image"*/}
                        {/*    htmlFor={"image"}*/}
                        {/*    rules={[*/}
                        {/*        {required: true, message: "Вкажіть назву категорії"}*/}
                        {/*    ]}*/}
                        {/*>*/}
                        {/*    <Input autoComplete={"name"} />*/}
                        {/*</Form.Item>*/}

                        <Form.Item
                            label="Оберіть фото"
                            valuePropName="file"
                            name="file"
                            // getValueFromEvent={normFile}
                            getValueFromEvent={(e: UploadChangeParam) => {
                                const image = e?.fileList[0] as any;
                                return image?.originFileObj;
                            }}
                            >
                            <Upload
                                listType="picture-card"
                                beforeUpload={() => false}
                                accept="image/png, image/jpeg, image/webp"
                                maxCount={1}
                                onPreview={(file: UploadFile) => {
                                    if (!file.url && !file.preview) {
                                        file.preview = URL.createObjectURL(file.originFileObj as RcFile);
                                    }

                                    setPreviewImage(file.url || (file.preview as string));
                                    setPreviewOpen(true);
                                    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
                                }}

                            >
                                <button style={{ border: 0, padding: 0, background: 'transparent' }} type="button" />
                                <div className='d-flex flex-column align-items-center'>
                                    <PlusOutlined />
                                    <span>Upload</span>
                                </div>

                            </Upload>
                        </Form.Item>

                        <Form.Item
                            label={"Опис"}
                            name="description"
                            htmlFor={"description"}
                            rules={[
                                {required: true, message: "Вкажіть опис категорії"}
                            ]}
                        >
                            <TextArea autoComplete={"description"} rows={3} />
                        </Form.Item>


                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                            <Button style={{margin: 10}}
                                    className={"text-white capitalize transition-colors duration-300 transform bg-blue-500"}
                                    type="primary" htmlType="submit" >
                                Додати
                            </Button>


                            <Button style={{margin: 10}} htmlType="button" onClick={() => navigate(-1)}>
                                Скасувати
                            </Button>

                        </Row>

                    </Form>
                </div>
            </div>

            {/*<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={() => setPreviewOpen(false)}>*/}
            {/*    <img alt="example" style={{width: '100%'}} src={previewImage}/>*/}
            {/*</Modal>*/}
        </>
    );


}

export default CategoryUpdatePage;