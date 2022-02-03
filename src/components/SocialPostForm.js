import React, { useState } from 'react';
import styled from 'styled-components';
import SelectSocialIcon from './ui/SelectSocialIcon';
import { Flex } from './Style.style';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

function SocialPostForm() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const menuItems = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
    const socials = [
        { icon: <i className="fab fa-facebook"></i>, name: 'facebook', color: '#4267B2' },
        { icon: <i className="fab fa-instagram"></i>, name: 'instagram', color: '#E1306C' },
        { icon: <i className="fab fa-twitter"></i>, name: 'twitter', color: '#00acee' },
        { icon: <i className="fab fa-pinterest"></i>, name: 'pinterest', color: '#E60023' },
        { icon: <i className="fab fa-linkedin"></i>, name: 'linkedin', color: '#0077b5' },
    ]
  return <Wrapper>
      <h1 style={{textAlign: 'center', fontWeight: '300'}}>Post</h1>
      <Flex justify="space-evenly" align="center" gap="50px">
          {socials.map((item, index) => <SelectSocialIcon 
            icon={item.icon} 
            text={item.name} 
            color={item.color} 
            bgColor={item.color}
            selected={selectedIndex === index ? true : false }
            onClick={() => setSelectedIndex(index)}
            />)}
      </Flex>
      <Hr />
      <Flex style={{marginTop: '20px'}}>
        <ConnectButton bgColor={socials[selectedIndex].color}>{socials[selectedIndex].icon} Connect with <b>{socials[selectedIndex].name}</b></ConnectButton>
      </Flex>
        <Form style={{ marginTop: '30px'}}>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={menuItems}
                helperText="Please select your currency"
            >
                {menuItems.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-textarea"
                label="Write Your Post"
                placeholder="Write Your Post Here..."
                rows={3}
                multiline
            />
            <FileUpload type="file"/>
            <SubmitButton type="submit">Post</SubmitButton>
        </Form>
  </Wrapper>;
}

const Wrapper = styled.div`
    width: 90%;
    max-width: 550px;
    padding: 30px; 
    box-shadow: 5px 5px 18px -8px rgba(0,0,0,0.3);
    -webkit-box-shadow: 5px 5px 18px -8px rgba(0,0,0,0.3);
    -moz-box-shadow: 5px 5px 18px -8px rgba(0,0,0,0.3);
`
const ConnectButton = styled.button`
    background-color: ${props => props.bgColor ? props.bgColor : 'black'};
    gap: 10px;
    font-size: 1.05rem;
    color: ${props => props.color ? props.color : 'white' };
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;    
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s ease-out;
    &:hover {
        filter: grayscale(30%);
    }
`
const Hr = styled.div`    
    width: 80%;
    height: 0.5px;
    background-color: #c9c9c9;
    margin: 20px auto;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const FileUpload = styled.input`
    padding: 10px;
    border: 0.25px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`
const SubmitButton = styled.button`
    background-color: black;
    gap: 10px;
    font-size: 1.05rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 200px;
    border-radius: 10px;    
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s ease-out;
    &:hover {
        background-color: #3b3b3b;
    }
`

export default SocialPostForm;
