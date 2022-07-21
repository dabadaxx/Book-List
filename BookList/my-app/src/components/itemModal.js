import React, { Component } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class ItemModal extends Component {

    state = {
        modal:false,
        ISBN:'',
        Title:'',
        Author:'',
        Copies:''
    }
    toggle =()=>{
            this.setState({
                modal: !this.state.modal
            })
    };

    onChange1 = (e)=>{
        this.setState({ [e.target.ISBN]:e.target.value });
    };

    onChange2 = (e)=>{
        this.setState({ [e.target.Title]:e.target.value });
    };

    onChange3 = (e)=>{
        this.setState({ [e.target.Author]:e.target.value });
    };

    onChange4 = (e)=>{
        this.setState({ [e.target.Copies]:e.target.value });
    };
    onSubmit = e =>{
        e.preventDefault();
        const newItem = {
            Title: this.state.Title

        }
    //Add item via addItem action 
    this.props.addItem(newItem);
    //Close modal
    this.toggle();
    }
    render(){
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}
                >Add Book</Button>
                <Modal isOpen ={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle ={this.toggle}>Add to BookList</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="ISBN">ISBN</Label>
                        <Input type="text" name="ISBN" id="ISBN" placeholder="Book ISBN" onChange={this.onChange1} /><br></br>
                        <Label for="item">Item</Label>
                        <Input type="text" name="Title" id="item" placeholder="Add Book Title" onChange={this.onChange2} /><br></br>
                        <Label for="author">Author</Label>
                        <Input type="text" name="Author" id="Author" placeholder="Add Book Author" onChange={this.onChange3} /><br></br>
                        <Label for="copies">Copies</Label>
                        <Input type="text" name="Copies" id="copies" placeholder="Add copies" onChange={this.onChange3} /><br></br>
                        <Button color="dark" style={{marginTop: '2 rem'}} block>Add Book</Button>
                    </FormGroup>
                    </Form>    
                    </ModalBody> 
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state=> ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal)