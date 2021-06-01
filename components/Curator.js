import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { timingFunctions } from 'polished'
import Heading from './Heading'

const StyledContainer = styled.div`
  .crt-load-more {
    display: block;
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 11px 17px 10px;
    border-radius: 3px;
    border: 0;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1;
    font-weight: ${({ theme }) => theme.font.weight.normal};
    color: ${({ theme }) => theme.colors.btn} !important;
    background-color: ${({ theme }) => theme.colors.btnBg} !important;
    transition: background-color 300ms ${timingFunctions('easeOutSine')} !important;

    .no-touchevents &:hover {
      color: ${({ theme }) => theme.colors.btnHover};
      background-color: ${({ theme }) => theme.colors.btnBgHover};
      text-decoration: none;
    }
  }
`

export default function Curator() {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '1000px' })
  useEffect(() => {
    if (inView) {
      const script = document.createElement('script');
      script.src = 'https://cdn.curator.io/published/23b19b5f-da92-441d-9732-b4ae87d0bbc7.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [inView])

  return (
    <div ref={ref}>
      <Heading>News</Heading>
      <StyledContainer id="curator-feed-burnaby-blues-roots-festival-layout" />
    </div>
  )
}
