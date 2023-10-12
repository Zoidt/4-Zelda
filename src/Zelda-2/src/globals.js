import Fonts from "../lib/Fonts.js";
import Images from "../lib/Images.js";
import StateMachine from "../lib/StateMachine.js";
import Timer from "../lib/Timer.js";

export const canvas = document.createElement('canvas');
export const context = canvas.getContext('2d') || new CanvasRenderingContext2D();
export const CANVAS_WIDTH = 384;
export const CANVAS_HEIGHT = 208;

export const keys = {};
export const images = new Images(context);
export const fonts = new Fonts();
export const stateMachine = new StateMachine();
export const timer = new Timer();

// If true, render all hitboxes.
export const DEBUG = true;
