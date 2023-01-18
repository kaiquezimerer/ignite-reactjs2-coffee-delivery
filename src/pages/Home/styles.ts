import styled from 'styled-components'

import HeroBackground from '../../assets/images/hero-background.svg'

export const HomeContainer = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const HeroSection = styled.section`
  background-image: url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: right 5.9rem;
  padding: 5.9rem 0;

  h2,
  h3 {
    width: 588px;
    line-height: 130%;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['brown-400']};
    margin-bottom: 4rem;
  }

  ul {
    font-size: 0.9rem;
    color: ${(props) => props.theme['brown-300']};
    column-count: 2;
    max-width: 555px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    &:nth-child(1) > div {
      background-color: ${(props) => props.theme['yellow-800']};
    }

    &:nth-child(2) > div {
      background-color: ${(props) => props.theme['yellow-500']};
    }

    &:nth-child(3) > div {
      background-color: ${(props) => props.theme['brown-300']};
    }

    &:nth-child(4) > div {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`

export const ItemIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme['gray-100']};
`

export const CoffeeListSection = styled.section`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
