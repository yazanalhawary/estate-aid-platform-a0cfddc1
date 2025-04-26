
/**
 * @typedef {'property_owner' | 'customer' | 'needy_person' | 'association' | 'admin'} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {UserRole} role
 * @property {string} [avatar]
 */

/**
 * @typedef {Object} Property
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {Object} location
 * @property {string} location.address
 * @property {string} location.city
 * @property {string} location.state
 * @property {string} location.country
 * @property {string} location.zipCode
 * @property {Object} [location.coordinates]
 * @property {number} location.coordinates.lat
 * @property {number} location.coordinates.lng
 * @property {Object} features
 * @property {number} features.bedrooms
 * @property {number} features.bathrooms
 * @property {number} features.area
 * @property {number} [features.garage]
 * @property {string[]} images
 * @property {'house' | 'apartment' | 'commercial' | 'land'} propertyType
 * @property {'available' | 'sold' | 'rented' | 'archived'} status
 * @property {Object} owner
 * @property {string} owner.id
 * @property {string} owner.name
 * @property {string} createdAt
 * @property {string} updatedAt
 */

export {};
