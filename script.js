// script.js

// 1. Create the map
// Set the initial view to some location, e.g., Paris
const map = L.map('map').setView([48.8566, 2.3522], 12); // Paris with zoom 12


// 2. Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Define an array of location objects
const locations = [
  {
    coords: [48.8566, 2.3522],
    image: 'https://example.com/paris.jpg',
    description: 'This is Paris, the capital of France.'
  },
  {
    coords: [48.8606, 2.3376],
    image: 'https://example.com/louvre.jpg',
    description: 'The Louvre Museum is the world’s largest art museum.'
  }
];

// 4. Loop through the locations array and create markers
locations.forEach((loc) => {
  const marker = L.marker(loc.coords).addTo(map);

  // 5. When a marker is clicked, update the info panel
  marker.on('click', () => {
    document.getElementById('location-image').src = loc.image;
    document.getElementById('location-description').innerText = loc.description;
  });
});
