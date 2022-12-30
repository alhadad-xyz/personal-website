import styled from 'styled-components'
import Heading from '../../components/Heading'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'

export { Heading, Icon, Button, Paragraph }

export const Wrapper = styled.main`
	width: 100vw;
	margin: 0 auto;
	padding-top: 10em;
`
export const Container = styled.div`
	width: 91.5%;
	margin: 0 auto;
	padding: 0 15px;
`
export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 -15px;
	text-align: center;
`
export const ImgContainer = styled.div`
	// opacity: 0;
	width: 41.66667%;
  position: relative;
  min-height: 1px;
  padding: 0 15px;
}
`
export const Image = styled.img`
	width: 100%;
	height: auto;
`
export const ProfileContainer = styled.div`
	width: 50%;
  position: relative;
  min-height: 1px;
  padding: 0 15px;
  text-align: left;
`
export const AboutDesc = styled.div`
	padding-top: 3em;
`
export const Name = styled.h2`
	line-height: 1.3;
	min-height: 160px;
`
export const Text = styled.span`
	display: block;
	margin-bottom: 0;
	color: #000;
	font-size: 50px;
	font-family: 'Playfair Display', Georgia, serif;
	font-weight: 500;
`
export const DescContainer = styled.div`
	padding-left: 6em;
	position: relative;
`
export const SubHeadingContainer = styled.div`
	position: absolute;
	top: 7px;
	left: 30px;
`
export const SubHeading = styled.h2`
	font-family: "Karla", Arial, sans-serif;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 1em;
	transform: rotate(90deg);
	transform-origin: left top 0;
	position: relative;
	line-height: 1.3;
	color: rgba(0, 0, 0, 0.8);
	margin: 0 0 30px 0;
	font-weight: 500;
	&::after{
		position: absolute;
		top: 8px;
		right: -40px;
		content: '';
		background: #000;
		width: 40px;
		height: 1px;
	}
`
export const SocialMedia = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5em;
`
export const SocmedLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	margin-right: 6px;
	border: 1px solid #CA82F8;
	border-radius: 100%;
	cursor: pointer;
`