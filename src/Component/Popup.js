import React from 'react';
import Popup from 'reactjs-popup';

const PopupExample = (props) => (
    <Popup
        trigger={<button className='centered-block gen-button'> {props.children} </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            {/* <div className="header"> Modal Title </div> */}
            <div className="content">
              Le fichier à été générer !
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    );

export default PopupExample;