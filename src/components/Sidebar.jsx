import React from 'react';
import {
  FaUser,
  FaUsers,

  FaChartBar,
  FaFolder
} from "react-icons/fa";
import { GiServerRack } from "react-icons/gi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { PiKanbanLight } from "react-icons/pi";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-image-wrapper">
        <img
          src="./SidebarSymbol1.png" // <== Buraya kendi yolunu yaz
          alt="Sidebar Logo"
          className="sidebar-image"
        />
      </div>


      <ul className="sidebar-menu">
        <li>
          <button onClick={() => onSelect("personal")}>
            <FaUser />
            <span>Personal</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSelect("kunden")}>
            <FaUsers />
            <span>Kunden</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSelect("wetter")}>
            <PiProjectorScreenChart />
            <span>Projekte</span>
          </button>
        </li>
        <li>
          <button onClick={() => onSelect("kanban")}>
            <PiKanbanLight />
            <span>Kanban</span>
          </button>
        </li>
        <li>
          <button onClick={() => onSelect("none")}>
            <FaChartBar />
            <span>Berichte</span>
          </button>
        </li>
    
        <li>
          <button onClick={() => onSelect("none")}>
            <FaFolder />
            <span>Feld 1</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSelect("none")}>
            <GiServerRack />
            <span>Server</span>
          </button>
        </li>

        <li>
          <button onClick={() => onSelect("none")}>
            <AiOutlineCloudServer />
            <span>Cloud</span>
          </button>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
