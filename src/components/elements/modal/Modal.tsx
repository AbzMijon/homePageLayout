import React from 'react';
import './modal.scss';

type Props = {
    title: string,
    content: any,
    isVisible: boolean,
    footer: any,
    onClose: any
}


export const Modal = (props: Props) => {
    const {isVisible=true, title, content, onClose, footer} = props

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
