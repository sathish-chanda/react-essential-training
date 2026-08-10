import PropertyImage from "./PropertyImage/PropertyImage"
import "./Property.css"
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel"
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner"
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
        <PropertyTypeLabel type={type} />
        {!available && <PropertyBanner />}
      </PropertyImage>
      <div>
        Property Attributes.
      </div>
    </div>
  )
}

export default Property