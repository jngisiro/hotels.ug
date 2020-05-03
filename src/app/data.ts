import { Hotel } from "./hotels/hotel.model";

export const locations = [];

export const hotels: Hotel[] = [
  new Hotel(
    "Mestil Hotel & Residencies",
    "Located in Kampala, less than 1 km from Clock Tower Gardens - Kampala, Mestil Hotel & Residences \
    provides accommodation with a restaurant, free private parking",
    "Kampala",
    "20 Barracks Drive, Nysambya",
    23,
    58,
    4.9,
    109,
    "../../../assets/img/mestil.jpg",
    ["Pool", "Parking", "DSTV", "Security"],
    true
  ),
  new Hotel(
    "Pearl of Africa Hotel",
    "Set in n Kampala, Pearl Of Africa Hotel features a fitness center, sauna, garden, \
    a terrace and bar. This property has air-conditioned units with a private bathroom",
    "Kampala",
    "28 Nakasero Road, Kampala",
    58,
    8,
    4.8,
    160,
    "../../../assets/img/pearlofafrica.jpg",
    ["Pool", "Parking", "DSTV", "Security"],
    true
  ),
  new Hotel(
    "Arcadia Suites",
    "Offers accommodation in the heart of Kampala. It is also within walking distance of \
    Aacia Mall and Kisementi retails village with all its vibrant culinary experiences",
    "Kampala",
    "54A, Kira Road, Kampala",
    58,
    8,
    4.7,
    130,
    "../../../assets/img/arcadia.jpg",
    ["Pool", "Parking", "DSTV", "Security"],
    true
  ),
  new Hotel(
    "Emin Pasha Hotel",
    "Boasting a garden, The Emin Pasha Hotel is located in Kampala, 1.1 km from Independence \
    Monument. This 5-star hotel offers a 24-hour front desk, a business centre and free WiFi.",
    "Kampala",
    "27 Akii Bua Road Nakasero",
    58,
    8,
    4.1,
    111,
    "../../../assets/img/eminpasha.jpg",
    ["Pool", "Parking", "DSTV", "Security"],
    true
  ),
];
