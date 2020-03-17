import React from "react"


import '../global/_react-debug.scss'
import '../global/_components.scss'
import '../global/_reset.scss'
import '../global/_media.scss'
import '../global/_main.scss'
import '../global/_canvas.scss'
import '../global/_fontface.scss'
import '../global/_previewbar.scss'
import '../global/_two-column-template.scss'
import '../global/_landing-page-template.scss'

import './LayoutTemplate.scss'

export default ({ children }) => {
	return (
		<div>
			{children}
		</div>
	)
}
