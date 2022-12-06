const apiURL = "https://valorant-api.com/v1/agents";

export default function getAgents() {
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const uuid = [];
      data.map(function (value) {
        if (value.isPlayableCharacter)
          uuid.push({
            uuid: value.uuid,
            displayName: value.displayName,
            fullPortrait: value.fullPortrait,
            backgroundGradientColors: value.backgroundGradientColors[0],
          });
      });
      return uuid;
    });
}
