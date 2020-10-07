const servicesSectionLeftDescriptionWedding = document.getElementById('services_section-left-description-wedding');
const servicesSectionLeftDescriptionWeddingText = document.getElementById('services_section-left-description-wedding-text');
const servicesSectionLeftDescriptionLove = document.getElementById('services_section-right-description-love');
const servicesSectionLeftDescriptionLoveText = document.getElementById('services_section-right-description-love-text');
const servicesSectionLeftDescriptionHalloween = document.getElementById('services_section-left-description-halloween');
const servicesSectionLeftDescriptionHalloweenText = document.getElementById('services_section-left-description-halloween-text');
const servicesSectionLeftDescriptionHouse = document.getElementById('services_section-right-description-house');
const servicesSectionLeftDescriptionHouseText = document.getElementById('services_section-right-description-house-text');

if (window.matchMedia("(max-width: 415px)").matches) {
servicesSectionLeftDescriptionWedding.addEventListener('click', event => {
    servicesSectionLeftDescriptionWeddingText.style.display = 'flex';
    servicesSectionLeftDescriptionWeddingText.style.textAlign = 'center';
    servicesSectionLeftDescriptionWedding.style.textAlign = 'center';
});
servicesSectionLeftDescriptionWeddingText.addEventListener('click', event => {
    servicesSectionLeftDescriptionWeddingText.style.display = 'none'
});
servicesSectionLeftDescriptionLove.addEventListener('click', event => {
    servicesSectionLeftDescriptionLoveText.style.display = 'flex';
    servicesSectionLeftDescriptionLoveText.style.textAlign = 'center';
    servicesSectionLeftDescriptionLove.style.textAlign = 'center';
});
servicesSectionLeftDescriptionLoveText.addEventListener('click', event => {
    servicesSectionLeftDescriptionLoveText.style.display = 'none'
});
servicesSectionLeftDescriptionHalloween.addEventListener('click', event => {
    servicesSectionLeftDescriptionHalloweenText.style.display = 'flex';
    servicesSectionLeftDescriptionHalloweenText.style.textAlign = 'center';
    servicesSectionLeftDescriptionHalloween.style.textAlign = 'center';
});
servicesSectionLeftDescriptionHalloweenText.addEventListener('click', event => {
    servicesSectionLeftDescriptionHalloweenText.style.display = 'none'
});
servicesSectionLeftDescriptionHouse.addEventListener('click', event => {
    servicesSectionLeftDescriptionHouseText.style.display = 'flex';
    servicesSectionLeftDescriptionHouseText.style.textAlign = 'center';
    servicesSectionLeftDescriptionHouse.style.textAlign = 'center';
});
servicesSectionLeftDescriptionHouseText.addEventListener('click', event => {
    servicesSectionLeftDescriptionHouseText.style.display = 'none'
});
};