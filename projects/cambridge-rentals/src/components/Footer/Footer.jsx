import { Clock } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const openingHour = 9
  const closingHour = 17
  const now = new Date()
  const currentHour = now.getHours()
  const currentDay = now.getDay()
  const isWeekday = currentDay >= 1 && currentDay <= 5
  const isOpen = isWeekday && currentHour >= openingHour && currentHour < closingHour
  const openElement = (
    <>
      {/* Flex container for the "open" status message */}
      <div className="message">
        <Clock className="icon"/>
        <span className="status open">We are open!</span>
      </div>
      {/* Display the contact information */}
      <div style={{ marginTop: "0.5rem" }}>
        Call us at: <strong>(555) 123-4567</strong>
      </div>
    </>
  )

  const closedElement = (
    <>
      {/* Flex container for the "closed" status message */}
      <div className="message">
        <Clock className="icon"/>
        <span className="status closed">We are closed.</span>
      </div>
      {/* Display the contact information */}
      <div style={{ marginTop: "0.5rem" }}>
        Opening hours Monday to Friday, {openingHour}am to {closingHour - 12}pm.
      </div>
    </>
  )
  return (
    <footer className="footer">
      {isOpen ? openElement : closedElement}
    </footer>
  );
}

export default Footer;