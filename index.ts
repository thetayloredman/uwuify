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

// This interface indicates uwuifier options.
interface Options {
    actions?: {
        enabled?: boolean,
        overrideDefaults?: boolean,
        custom?: string[]
    }
}

// Due to the way uwuify is built, we use
// a class called "uwuifier" to store the
// main infrastructure.
class uwuifier {
    // In here, we have everything that powers uwuify.
    // 
    // First, we have a constructor to create an uwuifier.
    // This constructor takes options, that contain the
    // details on how the uwuifier will behave.
    public constructor(opts: Options) {
        // opts will contain the exact uwuifier options.
        // 
        // First, we set defaults where we need them.
        opts.actions ??= {};
        opts.actions.enabled ??= true
        opts.actions.overrideDefaults ??= false;
        opts.actions.custom ??= [];

        // Now, we parse actions.
        // Actions are basically random inserted text blocks,
        // that interrupt the normal sentence with some specific action.
        // 
        // Our default actions are wrapped in "*", however not all are.
        // 
        // First, we check if they decided to disable actions...
        if (opts.actions.enabled) {
            // Now, we check if they override our options...
            if (opts.actions.overrideDefaults) {
                // *cries* they overrode us!
                // *see what I did there?*
                // Anyway, we use their custom actions if it's disabled.
                this.actions = opts.actions.custom;
            }
        }
    }

    public actions: string[];
}