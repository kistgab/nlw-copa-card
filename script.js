let isIgnite = true
function switchCard(event) {
  const card = event.currentTarget
  const backgroundType = isIgnite ? 'explorer' : 'ignite'
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-card-${backgroundType}.svg)`
}

