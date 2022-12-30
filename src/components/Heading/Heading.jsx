import * as S from './Heading.style'

export const Heading = ({text}) => {
	return (
		<S.Wrapper>
			<S.Title>{text}</S.Title>
		</S.Wrapper>
	)
}