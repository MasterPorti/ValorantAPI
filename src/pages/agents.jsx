import { useEffect, useState } from "react";
import getAgents from "../services/getAgents";

import "../scss/agents.scss";
import agentDefault from "../assets/defaulAgent.png";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [agentsImagen, setImagen] = useState(agentDefault);
  const [agentsName, setAgentsName] = useState("?????");
  const [infoAgent, setInfoAgent] = useState(
    "?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? "
  );
  const [backgroundColo, setBackgroundColor] = useState("#181818");
  useEffect(() => {
    getAgents().then((uuid) => {
      setAgents(uuid);
    });
  }, []);
  return (
    <div>
      <div
        className="containerAgents"
        style={{ backgroundColor: backgroundColo }}
      >
        <p className="AgentName">{agentsName}</p>
        <p className="InfoAgent">{infoAgent}</p>
        <img src={agentsImagen} className="agentImg" />
      </div>

      <ul>
        {agents.map((value) => {
          return (
            <li
              key={value.uuid}
              onClick={() => {
                setImagen(value.fullPortrait);
                setBackgroundColor("#" + value.backgroundGradientColors);
                setAgentsName(value.displayName);
                setInfoAgent(value.description);
              }}
            >
              {value.displayName}
            </li>
          );
        })}
      </ul>
      <audio
        src="https://media.valorant-api.com/sounds/963067082.wav"
        preload="none"
        autoPlay
        controls
      ></audio>
    </div>
  );
}
