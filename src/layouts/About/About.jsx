import * as S from './About.style'
import { options } from './About.constant'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'
import imgAbout from '../../assets/images/about.jpg'
import imgAbout2 from '../../assets/images/about-2.jpg'


export const About = () => {
	return (
		<S.Wrapper>
			<S.Container>

				<S.Heading text="About" />
			
				<S.Row>
					<S.ImgContainer>
						<OwlCarousel options={options} >
						  <div className="item">
								<S.Image src={imgAbout} alt={imgAbout}/>
						  </div>
						  <div className="item">
								<S.Image src={imgAbout2} alt={imgAbout2}/>
						  </div>
						</OwlCarousel>
					</S.ImgContainer>
					<S.ProfileContainer>
						<S.AboutDesc>
							<OwlCarousel options={options}>
							  <div className="item">
									<S.Name><S.Text>Mohammad</S.Text><S.Text>Khalid I Al Hadad</S.Text></S.Name>
							  </div>
							  <div className="item">
									<S.Name><S.Text>I'm</S.Text><S.Text>A Web Developer</S.Text></S.Name>
							  </div>
							</OwlCarousel>
							<S.DescContainer>
								<S.SubHeadingContainer>
									<S.SubHeading>About</S.SubHeading>
								</S.SubHeadingContainer>
								<S.Paragraph>
									A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
								</S.Paragraph>
								<S.SocialMedia>
									<S.SocmedLink>
										<S.Icon.Facebook />									
									</S.SocmedLink>
									<S.SocmedLink>
										<S.Icon.Twitter />									
									</S.SocmedLink>
									<S.SocmedLink>
										<S.Icon.Linkedin />									
									</S.SocmedLink>
									<S.SocmedLink>
										<S.Icon.Github />									
									</S.SocmedLink>
								</S.SocialMedia>
								<S.Paragraph>
									<S.Button.Primary>Get in Touch</S.Button.Primary>
								</S.Paragraph>
							</S.DescContainer>
						</S.AboutDesc>
					</S.ProfileContainer>
				</S.Row>
			</S.Container>
		</S.Wrapper>
	)
}