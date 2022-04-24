import React from "react";
import Particles from "react-tsparticles";

import ParticleConfig from "./config/particle-config.js";

export const ParticleBackground = () => {
  return <Particles params={ParticleConfig}></Particles>;
};
