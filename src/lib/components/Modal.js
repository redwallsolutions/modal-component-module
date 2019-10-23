import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DialogComponent from './DialogComponent'
import { DialogGlobalStyles } from './Style'
import ModalContext from './ModalContext'

function Modal({ onClose, appearance, children, ...rest }) {
	const [visible, setVisible] = useState(true)
	function close() {
		setVisible(false)
		if (onClose) {
			onClose(
				new Promise(resolve => {
					setTimeout(() => {
						resolve()
					}, 450)
				})
			)
		}
	}

	function open() {
		setVisible(true)
	}

	function closeClick() {
		close()
	}
	return (
		<ModalContext.Provider value={{ close, open }}>
			<DialogGlobalStyles appearance={appearance} />
			<DialogComponent
				{...rest}
				visible={visible}
				onClose={closeClick}
				appearance={appearance}
				content={children}
			/>
		</ModalContext.Provider>
	)
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  appearance: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  
}
export default Modal
