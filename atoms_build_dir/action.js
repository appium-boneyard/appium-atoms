/* global goog:true, appium, bot */
'use strict';

goog.provide('appium.atoms.inject.action');

goog.require('bot.action');
goog.require('bot.inject');
goog.require('goog.dom.selection');
goog.require('webdriver.atoms.element');

/**
 * Moves the mouse over the given {@code element} with a virtual mouse.
 *
 * @param {!{bot.inject.ELEMENT_KEY:string}} element The element to move to.
 * @param {!{x:number,y:number}} opt_coords Mouse position relative to the element (optional).
 * @return {(string|{status: bot.ErrorCode.<number>, value: *})} A stringified {@link bot.response.ResponseObject}.
 */
appium.atoms.inject.action.moveMouse = function (element, opt_coords) {
  return bot.inject.executeScript(bot.action.moveMouse, [element, opt_coords], true);
};

/**
 * Taps on the given {@code element} with a virtual touch screen.
 *
 * @param {!{bot.inject.ELEMENT_KEY:string}} element The element to tap.
 * @param {!{x:number,y:number}} opt_coords Finger position relative to the target.
 * @return {(string|{status: bot.ErrorCode.<number>, value: *})} A stringified {@link bot.response.ResponseObject}.
 */
appium.atoms.inject.action.tap = function (element, opt_coords) {
  return bot.inject.executeScript(bot.action.tap, [element, opt_coords], true);
};
