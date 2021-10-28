import React, { useState } from "react";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPen, faSync } from '@fortawesome/free-solid-svg-icons';

import "./document.scss";

export const Document = () => {
    const [selectedImage, setSelectedImage] = useState();
    const obj = {
        orgP: "BỘ GIÁO DỤC VÀ ĐÀO TẠO",
        id: "4Zasdasdwieqwe",
        place: "Hà Nội"
    };
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

    return(
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
                    <Row className="mb-3">
                        <Form.Label column="lg" lg={2} id="obj-id">CQ chủ quản</Form.Label>
                        <Col xs={4}>
                            <Form.Control size="lg" type="text" />
                        </Col>
                        <Col xs={1}></Col>
                        <Form.Label column="lg" lg={1}>Ban hành</Form.Label>
                        <Col xs={4}><Form.Control size="lg" type="text" value={obj.orgP}/></Col>
                    </Row>

                    <Row className="mb-3">
                        <Form.Label column="lg" lg={1}>Số</Form.Label>
                        <Col><Form.Control size="lg" type="text" value={obj.id}/></Col>
                    </Row>

                    <Row className="mb-3">
                        <Form.Label column="lg" lg={1}>Tại</Form.Label>
                        <Col xs={5}><Form.Control size="lg" type="text" /></Col>
                        <Col xs={1}></Col>
                        <Form.Label column="lg" lg={1}>Thời gian</Form.Label>
                        <Col xs={4}><Form.Control size="lg" type="text" value={obj.orgP}/></Col>
                    </Row> 

                    <Row className="mb-3">
                        <Form.Label column="lg" lg={1}>Loại</Form.Label>
                        <Col xs={3}><Form.Control size="lg" type="text" /></Col>
                        <Col xs={1}></Col>
                        <Form.Label column="lg" lg={1}>Trích Yếu</Form.Label>
                        <Col><Form.Control size="lg" type="text" value={obj.orgP}/></Col>
                    </Row> 

                    <Row className="mb-3">
                        <Col><Form.Control as="textarea" size="lg" type="text"  rows={5}/></Col>
                    </Row>

                    <Row className="mb-3">
                        <Form.Label column="lg" lg={2}>Nơi nhận</Form.Label>
                        <Col xs={3}><Form.Control type="text" lg={1}/></Col>
                        <Col xs={1}></Col>
                        <Col className="signal">
                            <Row>
                                <Form.Label column="lg" lg={2}>Chức vụ</Form.Label>
                                <Col><Form.Control size="lg" type="text" /></Col>
                            </Row>
                            <Row id="daumoc">
                                <Form.Label column="lg" lg={2}>Dấu mộc</Form.Label>
                                <Col><Image src="https://ssl.latcdn.com/img/SJH4yaRnS-cac-quy-tac-dong-dau-moc-cong-ty-ma-doanh-nghiep-can-biet.jpg" className="daumocImg"/></Col>
                            </Row>
                            <Row>
                                <Form.Label column="lg" lg={2}>Người Ký</Form.Label>
                                <Col><Form.Control size="lg" type="text" /></Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-primary"><FontAwesomeIcon icon={faPen} /> Số Hóa</Button>
                        </Col>
                        <Col>
                            <Button variant="warning"><FontAwesomeIcon icon={faSave} /> Lưu văn bản</Button>
                        </Col>
                        <Col>
                            <Button type="submit" variant="outline-info"><FontAwesomeIcon icon={faSync} /> Tạo mới</Button>
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