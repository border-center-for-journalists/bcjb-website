import React,{Component} from 'react';
import Modal from 'react-responsive-modal';
import {
  ImageWrapper,
} from "../../theme/index.styled";

class ImageModal extends Component{
  state = {
    open: false,
  };
     
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
    return (
    <div>
      <ImageWrapper>
        <img onClick={this.onOpenModal} src={this.props.src} alt={this.props.alt} copyright={this.props.copyright}></img>
        <p>{(this.props.alt != "null ") ? this.props.alt : ""}</p>
      </ImageWrapper>
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <ImageWrapper>
          <img src={this.props.src} alt={this.props.alt} copyright={this.props.copyright}></img>
        </ImageWrapper>
      </Modal>
    </div>);
  }
}
export default ImageModal;