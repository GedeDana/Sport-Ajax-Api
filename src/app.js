import "regenerator-runtime";
import "./style/style.css";
import "./script/component/header-bar-nav.js";
import "./script/component/meaning-league-sport.js";

import { listPlayer, listLeague } from './script/view/main.js';
document.addEventListener("DOMContentLoaded", listPlayer);
document.addEventListener("DOMContentLoaded", listLeague);