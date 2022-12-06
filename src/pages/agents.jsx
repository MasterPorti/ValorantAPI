import { useEffect, useState } from "react";
import getAgents from "../services/getAgents";

import "../scss/agents.scss";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [agentsImagen, setImagen] = useState(
    "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png"
  );
  useEffect(() => {
    getAgents().then((uuid) => {
      setAgents(uuid);
    });
  }, []);
  return (
    <div>
      <ul>
        {agents.map((value) => {
          return (
            <li
              key={value.uuid}
              onClick={() => {
                setImagen(value.fullPortrait);
              }}
            >
              {value.displayName}
            </li>
          );
        })}
      </ul>

      <img src={agentsImagen} className="imgAgents" />
    </div>
  );
}
