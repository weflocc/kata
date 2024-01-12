const config = {
  "allTypes": [
  ],
  "buttonTypes": [
  ],
  "allSlices": [
  ]
}

export function getKataConfig() {
  return (import.meta.env.SANITY_STUDIO_KATA && JSON.parse(import.meta.env.SANITY_STUDIO_KATA)) || config
}