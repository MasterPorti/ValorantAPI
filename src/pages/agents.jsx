import { useEffect, useState } from "react";
import getAgents from "../services/getAgents";

import "../scss/agents.scss";
import agentDefault from "../assets/defaulAgent.png";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [agentsImagen, setImagen] = useState(agentDefault);
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
              }}
            >
              {value.displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
