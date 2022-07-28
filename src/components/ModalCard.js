import { Button, Modal, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";

const ModalCard = (props) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCard;
