import styled from 'styled-components'

export const ItemCardContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  width: 256px;
  margin: 10px 0;
  padding: 1.25rem;
  border-radius: 6px 36px;
  text-align: center;

  img {
    position: relative;
    top: -2.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -1.5rem;
  }

  h4 {
    padding: 0.25rem 0.5rem;
    display: inline-block;
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 1rem;
    color: ${(props) => props.theme['yellow-800']};
    font-size: 0.7rem;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  h3 {
    margin: 0.5rem 0;
    color: ${(props) => props.theme['brown-400']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
  }

  & > p {
    font-size: 0.87rem;
    color: ${(props) => props.theme['brown-100']};
    margin-bottom: 2rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['brown-300']};

    & p {
      font-size: 0.87rem;
    }

    & span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export const SelectQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    color: ${(props) => props.theme['purple-500']};
    border: 0;
    background: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-800']};
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-800']};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:not(:active):hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
