import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Spinner from '../../components/common/Spinner';
import Icon from '../../components/common/Icon';

class FileUpload extends Component {
    state = {
        uploadedFile: {},
        uploading: false
    };

    onDrop = files => {
        this.setState({ uploading: true });
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        };
        formData.append('file', files[0]);

        axios
            .post('/api/portfolio/uploadimage', formData, config)
            .then(response => {
                this.setState(
                    {
                        uploading: false,
                        uploadedFile: response.data
                    },
                    () => {
                        this.props.imagesHandler(this.state.uploadedFile);
                    }
                );
            });
    };

    onRemove = id => {
        axios
            .get(`/api/portfolio/removeimage?public_id=${id}`)
            .then(response => {
                this.setState(
                    {
                        uploadedFile: {}
                    },
                    () => {
                        this.props.imagesHandler(this.state.uploadedFile);
                    }
                );
            });
    };

    showUploadedImages = () =>
        this.state.uploadedFile.url ? (
            <div
                className="form__dropzone-preview"
                style={{
                    background: `url(${this.state.uploadedFile.url}) no-repeat`,
                    backgroundSize: 'contain'
                }}
                onClick={() => this.onRemove(this.state.uploadedFile.public_id)}
            />
        ) : null;

    static getDerivedStateFromProps(props, state) {
        if (props.reset) {
            return (state = {
                uploadedFile: {}
            });
        }
        return null;
    }

    render() {
        return (
            <div className="form__dropzone-container">
                <Dropzone
                    onDrop={e => this.onDrop(e)}
                    multiple={false}
                    className="form__dropzone"
                >
                    <Icon name="Upload" className="form__dropzone-icon" />
                </Dropzone>

                {this.state.uploading ? <Spinner /> : this.showUploadedImages()}
            </div>
        );
    }
}

export default FileUpload;
