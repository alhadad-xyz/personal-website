import styled from 'styled-components'

export const Wrapper = styled.header`
	width: 100vw;
	padding: 2em 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9;
	margin: 0 auto;
`
export const Container = styled.nav`
	width: 91.5%;
	margin: 0 auto;
	padding: 0 15px;
`
export const Row = styled.div`
	margin: 0 -15px;
`
export const Col = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
  min-height: 1px;
  padding: 0 15px;
}
`
export const Brand = styled.div`
	font-size: 20px;
	text-transform: uppercase;
	color: #000;
	font-weight: 400;
	letter-spacing: 5px;
	padding: 7px;
	border: 1px solid #000;
	display: block;
	text-align: center;
	background: #000;
`
export const Logo = styled.a`
	display: block;
	margin-bottom: 0;
	text-decoration: none;
	line-height: 1.2;
	color: #fff;
`
export const Title = styled.span`
  display: block;
  margin-bottom: 0;
  line-height: 1.2;
  color: #fff;
  font-size: 18px;
`
export const Toggle = styled.i`
	position: relative;
	display: block;
	width: 20px;
	height: 2px;
	color: #000;
	text-transform: uppercase;
	background: #000;
	transition: all .2s ease-out;
	&::before {
		top: -7px;
		content: '';
		width: 20px;
		height: 2px;
		background: #000;
		position: absolute;
		left: 0;
		transition: 0.2s;
	}
	&::after {
		bottom: -7px;
		content: '';
		width: 20px;
		height: 2px;
		background: #000;
		position: absolute;
		left: 0;
		transition: 0.2s;
	}
`
export const Menu = styled.a`
	z-index: 1003;
	position: relative;
	display: flex;
	cursor: pointer;
	text-decoration: none;
	padding: 8px 0;
	&:hover ${Toggle} {
		outline: none;
		border-bottom: none;
		&::before {
			top: -10px;
		}
		&::after {
			bottom: -10px;
		}
	}
`