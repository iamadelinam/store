// import { Tooltip } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;


const Item = ({title, description, image}) => {

    
  let desc = description
  if (desc.length >= 100) {
   desc = desc.slice(0, 100) 
   desc += "..."
  }

  
return (
<Card
  style={{
    width: 300,
  }}
  cover={
    <img
      alt={title}
      src={image}
    />
  }
//   actions={[
//     <SettingOutlined key="setting" />,
//     <EditOutlined key="edit" />,
//     <EllipsisOutlined key="ellipsis" />,
//   ]}
>
  <Meta
    title={title}
    description={desc}
  />
</Card>
)
  
}

export default Item;