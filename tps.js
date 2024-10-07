// Family data array of objects
const familyData = [
    {
        id: 1,
        name: "The Johnson Family",
        date: "2022-08-15",
        image: "https://loremflickr.com/900/300/farm",
        story: "The Johnson family has lived in the countryside for generations. They are known for their dairy farm and community involvement."
    },
    {
        id: 2,
        name: "The Smith Family",
        date: "2021-11-22",
        image: "https://loremflickr.com/900/300/reunion",
        story: "The Smith family is a large and close-knit family, famous for their annual summer reunions that bring together relatives from all over the country."
    },
    {
        id: 3,
        name: "The Lee Family",
        date: "2020-05-10",
        image: "https://loremflickr.com/900/300/business,philanthropy",
        story: "The Lee family has a rich history in business and philanthropy. They have contributed to numerous community projects over the years."
    }
];

// Function to display family details when clicked on slider image
function showFamilyDetails(id) {
    const family = familyData.find(f => f.id === id);

    if (family) {
        document.getElementById('family-name').textContent = family.name;
        document.getElementById('family-date').textContent = family.date;
        document.getElementById('family-image').src = family.image;
        document.getElementById('family-story').textContent = family.story;
    }
}

// Initialize with the first family details on page load
document.addEventListener('DOMContentLoaded', function() {
    showFamilyDetails(1);  // Load first family by default
});
