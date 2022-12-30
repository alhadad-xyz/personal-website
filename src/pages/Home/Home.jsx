import styled from 'styled-components'
import Header from '../../layouts/Header'
import AboutSection from '../../layouts/About'
import ServicesSection from '../../layouts/Services'

const Wrapper = styled.div`
  position: relative;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(1);
  overflow-x: hidden;
`

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <AboutSection />
      <ServicesSection />
    </Wrapper>
  )
};