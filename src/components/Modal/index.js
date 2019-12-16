import React, { Component } from 'react';

function Modal(){
    return new Promise((resolve,reject)=>{
        class Modal extends Component {
            render() {
                return (
                    <div className="Modal">
                        111111{resolve(true)}
                    </div>
                );
            }
        }
    });
}
/* class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                
            </div>
        );
    }
} */

export default Modal;