import styled from 'styled-components'

import IllustrationBg from '../../assets/images/success-illustration.svg'

export const SuccessContainer = styled.section`
  margin-top: 5rem;
  background: url(${IllustrationBg}) no-repeat right bottom;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-800']};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['brown-400']};
  }

  // Vieport <= 1045px
  @media screen and (max-width: 1045px) {
    background: none;
  }
`

export const SuccessCard = styled.div`
  position: relative;
  max-width: 526px;
  margin: 2.5rem 0;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['yellow-800']};
  border-radius: 0.375rem 2.25rem;
`

interface SuccessDetailProps {
  icon: string
}

export const SuccessDetail = styled.p<SuccessDetailProps>`
  font-size: 1rem;
  color: ${(props) => props.theme['brown-300']};
  line-height: 130%;
  margin-bottom: 2rem;
  padding-left: 2.6rem;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: left top;

  span {
    display: block;
    font-weight: 700;
  }
`
