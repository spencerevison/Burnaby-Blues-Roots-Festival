import React from 'react'
import styled, { withTheme } from 'styled-components'
import Head from 'next/head'
import { Accordion, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../layouts/NarrowWidth'
import global from '../site.config.json'
import HeroImage from '../components/Hero/HeroImage'
import { getAllFaqs, getPage } from '../lib/api'
import CustomToggle from '../components/CustomToggle'
import { device } from '../styles/device'

/*-----------------------------------------------------------------------------
  Styled Layout
------------------------------------------------------------------------------*/
const StyledLayout = styled(Layout)`
`

/*-----------------------------------------------------------------------------
  Styled Card
------------------------------------------------------------------------------*/
const StyledCard = styled(Card)`
  padding: 5px 0;
`

/*-----------------------------------------------------------------------------
  Styled Toggle
------------------------------------------------------------------------------*/
const StyledToggle = styled(CustomToggle)`
  position: relative;
  display: block;
  width: 100%;
  padding: 24px 50px 24px 20px;
  cursor: pointer;
  border-radius: 0;
  text-align: left;
  background: ${({ theme }) => theme.colors.faqToggleBg};
  color: ${({ theme }) => theme.colors.faqToggle};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  .no-touchevents &:hover {
    background: ${({ theme }) => theme.colors.faqToggleBgHover};
    color: ${({ theme }) => theme.colors.faqToggleHover};
  }

  @media ${device.laptop} {
    padding: 28px 70px 28px 40px
  }
`

/*-----------------------------------------------------------------------------
  Styled Icon
------------------------------------------------------------------------------*/
const StyledIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  transform-origin: 50% calc(50% - 7px);

  .show & {
    transform: rotate(180deg);
  }
`

/*-----------------------------------------------------------------------------
  Styled Body
------------------------------------------------------------------------------*/
const StyledBody = styled(Card.Body)`
  margin: 30px 20px
`

function InfoPage({ theme, page, faqs }) {
  const heroUrl = page.heroImage ? page.heroImage.url : global.defaultHero
  return (
    <div>
      <Head>
        <title>{page.title} | {global.title}</title>
      </Head>
      <HeroImage title={page.title} imageSrc={`${heroUrl}?duotone=${theme.image.duotoneHero}&duotone-alpha=30`} />
      <StyledLayout>
        <Accordion>
          {faqs.map((faq, index) => (
            <StyledCard key={faq.id}>
              <Card.Header>
                <StyledToggle eventKey={index}>
                  <StyledIcon icon={faAngleDown} size="xs" className="icon" />
                  {faq.question}
                </StyledToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <StyledBody dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </Accordion.Collapse>
            </StyledCard>
          ))}
        </Accordion>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </StyledLayout>
    </div>
  );
}

export default withTheme(InfoPage)

export async function getStaticProps({ preview = null }) {
  const faqs = (await getAllFaqs(preview))
  const page = (await getPage(preview, 'faq'))
  return {
    props: { page, faqs },
  }
}
