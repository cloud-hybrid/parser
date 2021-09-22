// #!/bin/env node

// -*- Encoding: UTF-8 -*- //
// -*- System:   Linux -*- //
// -*- Usage:     *.*  -*- //

// Maintainer: Jacob B. Sanders
// Contact:  jacob.sanders@cloudhybrid.io
// License:  BSD 3-Clause License, Open Source

//
// Copyright 2021 Jacob B. Sanders - Cloud Technology LLC. & Affiliates
//
// Redistribution and use in source and binary forms, with or without modification, are permitted
// provided that the following conditions are met:
//
// 1.  Redistributions of source code must retain the above copyright notice, this list of
//     conditions and the following disclaimer.
// 2.  Redistributions in binary form must reproduce the above copyright notice, this list of
//     conditions and the following disclaimer in the documentation and/or other materials
//     provided with the distribution.
// 3.  Neither the name of the copyright holder nor the names of its contributors may be used to
//     endorse or promote products derived from this software without specific prior written
//     permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
// IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

const Process = require("process");

const Arguments = Process.argv.splice(2);

const Mapping = new Map();

Arguments.forEach((Argument, Index) => {
    const Flag = Argument.includes("-", 0) && (
        Arguments.length <= Index + 1 || Arguments[Index + 1].includes("-", 0)
    );

    const Splice = { Enumeration: [... Argument.split("=")] };

    Splice.Trigger = Argument.includes("=") || (
        !Argument.includes("=") && Arguments[Index + 1]
            ?.includes("-", 0)
    );

    if (Flag === true) {
        Mapping[Argument] = true;

        Splice.Trigger = null;
    } /// Fill Mapping with Key := Value, where Key := Value are a Split Enumeration from "="
    else if (Splice.Trigger === true) {
        const Key = Splice.Enumeration[0];
        const Value = Splice.Enumeration[1];

        const Double = (Key.includes("--", 0));
        const Single = (Argument.includes("-", 0));

        (Double) ? Mapping[
                Key.slice(2, Splice.Enumeration[0].length)
                ] = Value
            : (Single === true) ? Mapping[
                    Key.slice(1, 2)
                    ] = Value
                : Mapping[Key] = Value;

        /// ... Treat the Singleton as a Flag
        (!Double && !Single) ? Mapping[Key] = true : () => {};
    } /// Fill Mapping with -[?-]Key := Value Assignments
    else if (Argument.includes("-", 0) && Splice.Trigger === false) {
        const Double = (Argument.includes("--", 0));
        const Flag = Argument.includes("-", 0) && Arguments.length <= Index + 1;

        if (Flag === true) {
            (Double) ? Mapping[
                    Argument.slice(2, Argument.length)
                    ] = true
                : Mapping[Argument.slice(1, 2)]
                    = true
        } else {
            (Double) ? Mapping[
                    Argument.slice(2, Argument.length)
                    ] = Arguments[Index + 1]
                : Mapping[Argument.slice(1, 2)]
                    = Arguments[Index + 1]
        }

        Splice.Trigger = false;
    }
});

module.exports = {
    Arguments, Mapping
};

if (Arguments.includes("--debug")) {
    console.debug(module.exports);
}
