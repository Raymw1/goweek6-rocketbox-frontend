import React, { Component } from "react";
import api from "../../services/api";
import { formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";
import Dropzone from "react-dropzone";
import socket from "socket.io-client";

import "./styles.css";

import { MdInsertDriveFile } from "react-icons/md";
import logo from "../../assets/logo.svg";

export default class index extends Component {
  state = { box: {} };

  async componentDidMount() {
    const boxId = this.props.match.params.id;
    const { data } = await api.get(`/boxes/${boxId}`);
    this.setState({ box: data });
    this.subscribeToNewFiles();
  }

  subscribeToNewFiles = () => {
    const { box } = this.state;
    const io = socket(process.env.REACT_APP_API_URL);
    io.emit("connectRoom", box._id);
    io.on("file", (data) => {
      this.setState({ box: { ...box, files: [data, ...box.files] } });
    });
  };

  handleUpload = (files) => {
    files.forEach(async (file) => {
      const boxId = this.state.box._id;
      const data = new FormData();
      data.append("file", file);
      await api.post(`/boxes/${boxId}/files`, data);
    });
  };

  render() {
    const { box } = this.state;
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="RocketBox" />
          <h1>{box.title}</h1>
        </header>
        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop files or click here</p>
            </div>
          )}
        </Dropzone>
        <ul>
          {box.files?.map((file) => (
            <li key={file._id}>
              <a
                className="fileInfo"
                href={file.url}
                target="_blank"
                rel="noreferrer"
              >
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{file.title}</strong>
              </a>
              <span>
                há{" "}
                {formatDistance(new Date(file.createdAt), new Date(), {
                  locale: pt,
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
