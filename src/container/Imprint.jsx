import React from 'react'
import styled from 'styled-components'

// styles
const StyledImprintSection = styled.section`
  padding: 160px var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 160px var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 140px var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledImprintInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  h1.title {
    margin-bottom: 50px;
    text-align: center;
    font-size: clamp(40px, 5vw, 48px);
  }
  p.heading {
    display: block;
    position: relative;
    margin-bottom: 10px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 500;
    text-align: center;
    &:before {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-right: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: right;
    }
    &:after {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-left: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: left;
    }
  }
  p {
    color: var(--text-color);
    &.strong {
      font-weight: 600;
    }
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--ghost);
    font-size: clamp(17px, 1.5vw, 18px);
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--ghost);
    font-size: clamp(16px, 1.5vw, 17px);
  }
  .innerDistance {
    margin-top: 40px;
  }
`

// markup
const Impressum = () => {
  const data = (
    <>
      <p className="heading">Imprint</p>
      <h1 className="title">Impressum</h1>
      <h3>SOUNDSERVICE</h3>
      <p>vertreten durch Robert Eberhard</p>
      <p>
        Schaffhauserstrasse 42
        <br />
        8400 Winterthur
        <br />
        Switzerland
      </p>
      <p>Telefon: +41 44 586 66 30</p>
      <p>Mail: hello@soundservice.com</p>
      <p className="innerDistance">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden
        <a href="https://ec.europa.eu/consumers/odr/" taget="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h4>Haftung für Inhalte</h4>
      <p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      <h4>Haftung für Links</h4>
      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      <h4>Urheberrecht</h4>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </>
  )

  return (
    <StyledImprintSection>
      <StyledImprintInner>{data}</StyledImprintInner>
    </StyledImprintSection>
  )
}

export default Impressum
