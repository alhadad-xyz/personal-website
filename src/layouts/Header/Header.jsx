import * as S from './Header.style'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Row>
          <S.Col>
            <S.Brand>
              <S.Logo><S.Title>Alhadad.</S.Title></S.Logo>
            </S.Brand>
            <S.Menu>
              <S.Toggle/>
            </S.Menu>
          </S.Col>
        </S.Row>
      </S.Container>
    </S.Wrapper>
  )
};