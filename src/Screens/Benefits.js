import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { TbSettingsAutomation } from "react-icons/tb";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>Benefits of having a professional web</h2>
      <p>You open up to the world <BsFillDoorOpenFill /></p>
      <p>New costumers <IoIosPeople /></p>
      <p>Much lower costs <MdAttachMoney /></p>
      <p>No shedules <AiFillSchedule /></p>
      <p>Utrasegmented marketing + high conversion <BsGraphUp /></p>
      <p>Automation, less work, more performance <TbSettingsAutomation /></p>
    </div>
  );
};

export default Benefits;
