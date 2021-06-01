import React, { useContext } from 'react'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'

export default function CustomToggle({
  eventKey, children, className,
}) {
  const currentEventKey = useContext(AccordionContext) // <-- Will update every time the eventKey changes.
  const toggleOnClick = useAccordionToggle(eventKey, () => {
    console.log(eventKey)
  })
  const toggleClass = currentEventKey === eventKey ? `${className} show` : className

  return (
    <button
      type="button"
      className={toggleClass}
      onClick={toggleOnClick}
    >
      {children}
    </button>
  );
}
