import React from 'react'
import './content.css'
import BtnNeutral from '../Buttons/btn-neutral';
export default function Content(props) {
	const { page, handleValue, textRef, handleSet, isModificated , content} = props
	let value = isModificated ? content : props.page.data().content
	return (
		<div className="page-content">
			<div className="page-content-container">
				<div className="page-content-title">
					<div className="page-content-label">
						Titulo
					</div>
					{ page.data().title }
				</div>
				<div className="page-content-title">
				<div className="page-content-label">
						Contenido
					</div>
					<textarea ref={textRef} name='content' onChange={props.handleChange} value = { value }  />
				</div>
				<div className="page-content-buttons">
					<BtnNeutral  handleClick={ () => handleSet(page.id) } title="ACTUALIZAR" style={{ width: '300px', fontWeight: 'bold' }} />
				</div>

			</div>
		</div>
	)
}
