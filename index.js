"use strict";
// uwuify
// By BadBoyHaloCat
// 
// Copyright (C) 2020  Logan Devine
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
// Due to the way uwuify is built, we use
// a class called "uwuifier" to store the
// main infrastructure.
var uwuifier = /** @class */ (function () {
    // In here, we have everything that powers uwuify.
    // 
    // First, we have a constructor to create an uwuifier.
    // This constructor takes options, that contain the
    // details on how the uwuifier will behave.
    function uwuifier(opts) {
        var _a, _b, _c;
        var _d, _e;
        // opts will contain the exact uwuifier options.
        // 
        // First, we set defaults where we need them.
        (_a = opts.actions) !== null && _a !== void 0 ? _a : (opts.actions = {});
        (_b = (_d = opts.actions).overrideDefaults) !== null && _b !== void 0 ? _b : (_d.overrideDefaults = false);
        (_c = (_e = opts.actions).custom) !== null && _c !== void 0 ? _c : (_e.custom = []);
        // Now, we parse actions.
        // Actions are basically random inserted text blocks,
        // that interrupt the normal sentence with some specific action.
        // 
        // 
    }
    return uwuifier;
}());
