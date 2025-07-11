const galleries = [
  {
    name: "Etherton Gallery",
    address: "135 S 6th Ave",
    website: "https://ethertongallery.com/",
    notes: "Photography, contemporary, expertly curated.",
    experience: "Calm, minimalist space showcasing Tucson's best photography."
  },
  {
    name: "Contreras Gallery",
    address: "110 E 6th St",
    website: "https://contrerasgallery.com/",
    notes: "Local artists, Southwestern themes.",
    experience: "Friendly, welcoming vibe celebrating Tucson's cultural roots."
  },
  {
    name: "MOCA Tucson",
    address: "265 S Church Ave",
    website: "https://moca-tucson.org/",
    notes: "Contemporary art museum, rotating exhibitions.",
    experience: "Bold, industrial space pushing boundaries in modern art."
  },
  {
    name: "Tucson Museum of Art",
    address: "140 N Main Ave",
    website: "https://tucsonmuseumofart.org/",
    notes: "Historic and contemporary works.",
    experience: "Elegant, spacious galleries merging past and present."
  },
  {
    name: "Obsidian Gallery",
    address: "101 W 6th St",
    website: "https://obsidiangallery.com/",
    notes: "Ceramics, fiber arts, fine craft.",
    experience: "Warm, intimate setting for fine Southwestern craft."
  },
  {
    name: "Madaras Gallery",
    address: "3035 N Swan Rd",
    website: "https://madaras.com/",
    notes: "Vivid Southwestern landscapes.",
    experience: "Bright, colorful space radiating desert energy."
  },
  {
    name: "&Gallery",
    address: "419 N 4th Ave",
    website: "https://andgalleryaz.com/",
    notes: "Emerging and experimental artists.",
    experience: "Edgy, evolving venue for Tucson’s creative newcomers."
  },
  {
    name: "Raices Taller 222 Art Gallery",
    address: "218 E 6th St",
    website: "https://raicestaller222.com/",
    notes: "Latinx-focused, collective exhibitions.",
    experience: "Community-centered space amplifying diverse voices."
  }
];

const grid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');

function renderGalleries(filter = "") {
  grid.innerHTML = "";
  const filterLower = filter.toLowerCase();

  galleries.forEach(gallery => {
    const searchable = `${gallery.name} ${gallery.address} ${gallery.notes} ${gallery.experience}`.toLowerCase();
    if (!searchable.includes(filterLower)) return;

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h2>${gallery.name}</h2>
      <p>📍 ${gallery.address}</p>
      <p>✨ Experience: ${gallery.experience}</p>
      <p>🖼️ Notes: ${gallery.notes}</p>
      <div class="buttons">
        <a class="button" href="${gallery.website}" target="_blank">Visit Website</a>
        <a class="button" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gallery.address)}" target="_blank">Open in Maps</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  renderGalleries(searchInput.value);
});

document.addEventListener('DOMContentLoaded', () => {
  renderGalleries();
});
