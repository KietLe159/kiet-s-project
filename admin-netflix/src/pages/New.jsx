import React, { useState } from 'react'
import "../scss/new.scss"
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import {Input, Box, InputLabel, Button } from '@mui/material/';
import {DriveFolderUpload} from '@mui/icons-material/';
import { useForm } from "react-hook-form";

const New = ({input, title}) => {
  const [file, setFile] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <div className='new-container'>
      <SideBar />
      <div className='new-content'>
        <NavBar />

        <div className="new-top">
          <h1>{title}</h1>
        </div>

        <div className="new-bottom">
          <div className="new-left">
            <img src={
              file?
              window.URL.createObjectURL(file):
              "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>

          <div className="new-right">
            <Box 
            component="form"
            sx= {
              {
                display: "flex",
                height: "300px",
                flexWrap: "wrap",
                gap:"20px",
                justifyContent:"space-around"
              }
            }
            onSubmit={handleSubmit(onSubmit)}
            >
              <div className="new-form-item">
              <InputLabel htmlFor='file' sx={{ fontSize:"1.6rem"}} className="new-form-label">Upload Image
              <DriveFolderUpload className='new-form-icon'/>
              </InputLabel>

              <input type="file" id="file"  style={{ display:"none"}} {...register("aa", {onChange:e=>setFile(e.target.files[0])})} />
              </div>
              
              {input.map(item=>(
                <div className="new-form-item" key={item.id}>
                <InputLabel htmlFor= {`new-form-${item.type}-${item.id}`} sx={{ fontSize:"1.6rem"}} className="new-form-label">{item.label}</InputLabel>
                <Input placeholder={item.placeholder} sx={{ fontSize:"1.6rem", width: "100%"}} {...register(`${item.label.toLowerCase()}`)} type={item.type} id={`new-form-${item.type}-${item.id}`} className="new-form-input"/>
                </div>
              ))}
              
              <Button variant="contained" type='submit' className='new-form-button'>
                Add New
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New