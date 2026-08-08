import Property from "./Property/Property";
import "./PropertyList.css";

const PropertyList = ( { properties } ) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <Property
          key={property.id}
          {...property}
        />
      ))}
    </div>
  );
}

export default PropertyList;