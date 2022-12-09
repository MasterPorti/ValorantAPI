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
    <section className="agentContainer">
      <div className="agentImgContainer">
        <img
          src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/background.png"
          className="background"
        />
        <div className="agentfull">
          <img
            className="imgAgent"
            src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png"
          />
        </div>
        <h1>HOLA</h1>
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
    </section>
  );
}
