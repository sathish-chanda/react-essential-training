import PropertyImage from "./PropertyImage/PropertyImage"
import "./Property.css"

const Property = ( {
  image,
  bedrooms,
  bathrooms,
  address,
  rent,
  surface,
  available,
  date,
  type,
}) => {
  return (
    <div className="property-card"
         style = {{ opacity: available ? 1 : 0.5 }}>   
      <PropertyImage image={image}>
        Property details
      </PropertyImage>
      <div>
        Property Attributes.
      </div>
    </div>
  )
}

export default Property