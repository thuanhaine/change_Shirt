import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-contrainer tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={Tab.name} tab={tab} handleClick={() => {}}></Tab>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Trở Lại"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 front-bold text-sm"
            ></CustomButton>
          </motion.div>
          <motion.div className="filtertabs-container" {...slideAnimation}>
            {FilterTabs.map((tab) => (
              <Tab
                key={Tab.name}
                tab={tab}
                isFiltertab
                isActiveTab=""
                handleClick={() => {}}
              ></Tab>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
