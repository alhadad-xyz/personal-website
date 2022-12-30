import styled from 'styled-components'

export const Primary = styled.a`
	text-decoration: none;
	background: transparent;
	color: #4d4d4d;
	border: 1px solid #d9d9d9;
	text-transform: uppercase;
	display: inline-block;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 14px;
	letter-spacing: 0.1em;
	line-height: 1.42857;
	border-radius: 4px;
	transition: all .5s;
	&:hover {
		background: #CA82F8;
		color: #fff;
	}
`

export const Secondary = styled.a`
	text-decoration: none;
	background: #ca82f8;
	color: #fff;
	text-transform: uppercase;
	display: inline-block;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 14px;
	letter-spacing: 0.1em;
	line-height: 1.42857;
	border-radius: 4px;
	transition: all .5s;
	&:hover {
		background: #d49af9;
		color: #fff;
	}	
`