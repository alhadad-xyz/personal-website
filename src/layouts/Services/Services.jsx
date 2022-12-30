import * as S from './Services.style'

export const Services = () => {
	return (
		<S.Wrapper>
			<S.Container>

				<S.Heading text="Services" />

				<S.Row>
					<S.Col>
						<S.ServicesContainer>
							<S.DescContainer>
								<S.Row>
									<S.Header>
										<S.SubHeading>My Services</S.SubHeading>
										<S.DescTitle>Here Are Some of My Skills</S.DescTitle>
									</S.Header>
								</S.Row>
							</S.DescContainer>
							<S.ImgContainer>
								
							</S.ImgContainer>
						</S.ServicesContainer>
					</S.Col>
				</S.Row>
			</S.Container>
		</S.Wrapper>
	)
}