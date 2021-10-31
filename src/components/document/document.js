import React, { useEffect, useState } from "react";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen, faSync } from '@fortawesome/free-solid-svg-icons';

import "./document.scss";

export const Document = () => {
    const [selectedImage, setSelectedImage] = useState();
    const obj = {
        id: "4ÊÖ/OĐ-BGDĐOT",
        type: "QUYẾT ĐỊNH",
        abstract: "VỀ việc công bó thủ tục hành chính được sửa đối, bổ sung hoặc thay thể\nthuộc phạm vi chức năng quản lý của Bộ (siáo dục và Đào tạo",
        content: "BỘ TRƯỜNG BỘ GIÁO ĐỤC VÀ ĐÀO TẠO\n\tCăn cứ Nghị định số 69/2017/NĐ-CP ngày 25 thắng 5 năm 2017 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn vả cơ cấu tổ chức của Bộ Giáo đục vả Đào tạo.\n\tCăn cứ Nghị định số 63/2010/NĐ-CP ngây 0S tháng 6 năm 2010 của Chính phú về kiểm soát thủ tục hành chính và Nghị định số 92/2017/NĐ-CP ngày 07 tháng S năm 2017 của Chính phú sửa đổi, bố sung một số điều của các Nghị định liên quan đến kiếm soát thú tục hành chính.\n\tXét để nghị của Vụ trưởng Vụ Kế hoạch - Tải chính và Chánh Văn phòng,\n\tQUYẾT ĐỊNH:\n\tĐiều 1. Công bế kèm theo Quyết định này thủ tục hành chính được sửa đổi, bổ sưng hoặc thay thể thuộc phạm vi chức năng quản lý của Bộ Giáo đục vả Đào tạo.\n\tĐiều 2. Quyết định này có hiệu lực thí hành kể từ ngày 01 tháng 12 năm 2018.\n\tĐiều 3 Chánh Văn phòng, Vụ trưởng Vụ Kế hoạch - Tải chính, Thủ trướng các đơm vị có liên quan chịu trách nhiệm thí hành Chuyết định này 4.\n\t\n\t",
        place: "Hà Nội",
        date: "2018-01-01T17:00:00.000Z",
        recv: "sfdfdsfsdfsdf",
        stamp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...",
        position: "HÓ)? ƒM\\I mu.",
        orgP: "MỘ GIÁO ĐỤC VÀ ĐÀO TẠO",
        name: "Pướng Vuảa xheạ"
    };
    const [document, setDocument] = useState(obj);
    // Fields in Form
    const [id, setID] = useState(obj.id);
    const [type, setType] = useState(obj.type);
    const [abstract, setAbstract] = useState(obj.abstract);
    const [content, setContent] = useState(obj.content);
    const [place, setPlace] = useState(obj.place);
    const [date, setDate] = useState(Date.parse(obj.date));
    const [recv, setRecv] = useState(obj.recv);
    const [stamp, setStamp] = useState(obj.stamp);
    const [position, setPosition] = useState(obj.position);
    const [orgP, setOrgP] = useState(obj.orgP);
    const [name, setName] = useState(obj.name);
    // Status to check upload or not
    const [status, setStatus] = useState(false);

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    // This function will digitalize the document
    const convertDocument = (value) => {
        value ? setStatus(true) : window.location.reload();;
    };

    const saveDocument = () => {
        setDocument({
            id: id,
            type: type,
            abstract: abstract,
            content: content,
            place: place,
            date: date,
            recv: recv,
            stamp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...",
            position: position,
            orgP: orgP,
            name: name
        });
        console.log(document);
    }
    return (
        <div className="documentSpace">
            <div className="documentSpace-images">
                <div style={styles.container}>
                    <input
                        accept="image/*"
                        type="file"
                        onChange={imageChange}
                    />
                    {selectedImage && (
                        <div style={styles.preview}>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                style={styles.image}
                                alt="Thumb"
                            />
                            <button onClick={removeSelectedImage} style={styles.delete}>
                                Remove This Image
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="documentSpace-form">
                <Form>
                    {status ? (
                        <>
                            <Row className="mb-3">
                                <Form.Label column="lg" lg={2} id="obj-id">CQ chủ quản</Form.Label>
                                <Col xs={4}>
                                    <Form.Control size="lg" type="text" />
                                </Col>
                                <Col xs={1}></Col>
                                <Form.Label column="lg" lg={1}>Ban hành</Form.Label>
                                <Col xs={4}><Form.Control size="lg" type="text" value={orgP} onChange={(e) => { setOrgP(e.target.value) }} /></Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Label column="lg" lg={1}>Số</Form.Label>
                                <Col><Form.Control size="lg" type="text" value={id} onChange={(e) => { setID(e.target.value) }} /></Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Label column="lg" lg={1}>Tại</Form.Label>
                                <Col xs={5}><Form.Control size="lg" type="text" value={place} onChange={(e) => { setPlace(e.target.value) }} /></Col>
                                <Col xs={1}></Col>
                                <Form.Label column="lg" lg={1}>Thời gian</Form.Label>
                                <Col xs={4}><Form.Control size="lg" type="text" value={date.toString()} onChange={(e) => { setDate(e.target.value) }} /></Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Label column="lg" lg={1}>Loại</Form.Label>
                                <Col xs={3}><Form.Control size="lg" type="text" value={type} onChange={(e) => { setType(e.target.value) }} /></Col>
                                <Col xs={1}></Col>
                                <Form.Label column="lg" lg={1}>Trích Yếu</Form.Label>
                                <Col><Form.Control size="lg" type="text" /></Col>
                            </Row>

                            <Row className="mb-3">
                                <Col><Form.Control as="textarea" size="lg" type="text" rows={5} value={content} onChange={(e) => { setContent(e.target.value) }} /></Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Label column="lg" lg={2}>Nơi nhận</Form.Label>
                                <Col xs={3}><Form.Control type="text" lg={1} value={recv} onChange={(e) => { setRecv(e.target.value) }} /></Col>
                                <Col xs={1}></Col>
                                <Col className="signal">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Chức vụ</Form.Label>
                                        <Col><Form.Control size="lg" type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} /></Col>
                                    </Row>
                                    <Row id="daumoc">
                                        <Form.Label column="lg" lg={2}>Dấu mộc</Form.Label>
                                        <Col><Image src="https://ssl.latcdn.com/img/SJH4yaRnS-cac-quy-tac-dong-dau-moc-cong-ty-ma-doanh-nghiep-can-biet.jpg" className="daumocImg" /></Col>
                                    </Row>
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Người Ký</Form.Label>
                                        <Col><Form.Control size="lg" type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                                <Row className="mb-3">
                                    <Form.Label column="lg" lg={2} id="obj-id">CQ chủ quản</Form.Label>
                                    <Col xs={4}>
                                        <Form.Control size="lg" type="text" />
                                    </Col>
                                    <Col xs={1}></Col>
                                    <Form.Label column="lg" lg={1}>Ban hành</Form.Label>
                                    <Col xs={4}><Form.Control size="lg" type="text" /></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Label column="lg" lg={1}>Số</Form.Label>
                                    <Col><Form.Control size="lg" type="text" /></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Label column="lg" lg={1}>Tại</Form.Label>
                                    <Col xs={5}><Form.Control size="lg" type="text" /></Col>
                                    <Col xs={1}></Col>
                                    <Form.Label column="lg" lg={1}>Thời gian</Form.Label>
                                    <Col xs={4}><Form.Control size="lg" type="text" /></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Label column="lg" lg={1}>Loại</Form.Label>
                                    <Col xs={3}><Form.Control size="lg" type="text" /></Col>
                                    <Col xs={1}></Col>
                                    <Form.Label column="lg" lg={1}>Trích Yếu</Form.Label>
                                    <Col><Form.Control size="lg" type="text" /></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col><Form.Control as="textarea" size="lg" type="text" rows={5} /></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Label column="lg" lg={2}>Nơi nhận</Form.Label>
                                    <Col xs={3}><Form.Control type="text" lg={1} /></Col>
                                    <Col xs={1}></Col>
                                    <Col className="signal">
                                        <Row>
                                            <Form.Label column="lg" lg={2}>Chức vụ</Form.Label>
                                            <Col><Form.Control size="lg" type="text" /></Col>
                                        </Row>
                                        <Row id="daumoc">
                                            <Form.Label column="lg" lg={2}>Dấu mộc</Form.Label>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Form.Label column="lg" lg={2}>Người Ký</Form.Label>
                                            <Col><Form.Control size="lg" type="text" /></Col>
                                        </Row>
                                    </Col>
                                </Row>
                        </>
                    )}


                    <Row>
                        <Col>
                            <Button variant="outline-primary" onClick={(e) => convertDocument(true)}><FontAwesomeIcon icon={faPen} /> Số Hóa</Button>
                        </Col>
                        <Col>
                            <Button variant="warning" onClick={(e) => saveDocument()}><FontAwesomeIcon icon={faSave} /> Lưu văn bản</Button>
                        </Col>
                        <Col>
                            <Button variant="outline-info" onClick={(e) => convertDocument(false)}><FontAwesomeIcon icon={faSync} /> Tạo mới</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
    },
    preview: {
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        borderStyle: "solid",
        borderWidth: 5
    },
    image: { maxWidth: 400, maxHeight: 800 },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};