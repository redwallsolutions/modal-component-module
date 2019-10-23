import React from 'react'
import 'rc-dialog/dist/rc-dialog.css'
import Dialog from 'rc-dialog'

import {
	DialogHeader,
	DialogHeaderIcon,
	DialogHeaderTitle,
	DialogHeaderSubtitle,
	DialogHeaderTitleContainer
} from './Style'

function DialogHeaderComponent({ appearance, icon, title, subtitle }) {
	return (
		<DialogHeader>
			{icon && <DialogHeaderIcon>{icon}</DialogHeaderIcon>}
			<DialogHeaderTitleContainer>
				<DialogHeaderTitle>{title}</DialogHeaderTitle>
				<DialogHeaderSubtitle appearance={appearance}>
					{subtitle}
				</DialogHeaderSubtitle>
			</DialogHeaderTitleContainer>
		</DialogHeader>
	)
}

function DialogComponent({ appearance, icon, title, subtitle, content,...rest }) {
	return (
		<Dialog
			className="modal-component-module"
			title={
				<DialogHeaderComponent appearance={appearance} icon={icon} title={title} subtitle={subtitle} />
			}
			maskAnimation="fade"
			animation="zoom"
			{...rest}
		>
			{content}
		</Dialog>
	)
}

DialogComponent.defaultProps = {
	title: '',
	subtitle: '',
	content: <div></div>,
	appearance: 'default'
}

export default DialogComponent
