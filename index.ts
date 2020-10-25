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

// Import Uwuifier
import { Uwuifier } from 'uwuifier'; 

// Due to the way uwuify is built, we use
// a class called "uwuifier" to store the
// main infrastructure.
class uwuifier {
    // Now we have the main constructor used for
    // the actual creation
    public constructor() {
        // Create the uwuifier
        this._uwuifier = new Uwuifier();

        // INSERTIONS
        // Uwuifier has built in items that we want to
        // modify.

        // Place our actions into this uwuifier instance
        this._uwuifier.actions = [
            '*blushes*',
            '*cries*',
            '*screams*',
            '*sweats*',
            '*sees bulge*',
            '*thinks about your bulge*',
            '*runs away*',
            '*hugs*',
            '*huggles tightly*',
            '*boops your nose*',
            '*twerks*',
            '*starts twerking*',
            '*screams*',
            '*walks away*',
            '*looks at you*',
            '*cries*',
            '*screeches*',
            '*pounces on you*',
            '*eats*',
            '*boops self*'
        ];

        // Place in our faces instead of the Uwuifier ones
        this._uwuifier.faces = [
            ':3',
            'x3',
            'owo',
            'OwO',
            'uwu',
            'UwU',
            '^-^',
            '^_^'
        ];

        // Custom exclamations too!
        this._uwuifier.exclamations = [
            '!',
            '!?',
            '?!',
            '!??',
            '??!',
            '?!?',
            '!?!?!?!??!?',
            '??!!',
            '!11!!'
        ];
    }

    public uwuify(text: string) {
        return this._uwuifier.uwuifySentence(text);
    }

    private _uwuifier: Uwuifier;
}

export = uwuifier;