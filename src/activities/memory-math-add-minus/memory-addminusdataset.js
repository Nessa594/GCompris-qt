/* GCompris
 *
 * Copyright (C) 2014 Bruno Coudoin
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

var memory_addminus = [

            "1-0", "1+0", "2-0", "2+0", "2-1", "2+1", "3-0", "3+0", "3-1", "3+1", "3-2", "3+2", "4-0", "4+0", "4-1", "4+1", "4-2", "4+2", "4-3", "4+3",

            "6-5", "6+5", "7-5", "7+5", "7-6", "7+6", "8-5", "8+5", "8-6", "8+6", "8-7", "8+7", "9-5", "9+5", "9-6", "9+6", "9-7", "9+7", "9-8", "9+8",

            "11-10", "11+10", "12-10", "12+10", "12-11", "12+11", "13-10", "13+10", "13-11", "13+11", "13-12", "13+12", "14-10", "14+10", "14-11", "14+11", "14-12", "14+12", "14-13", "14+13",

            "16-15", "16+15", "17-15", "17+15", "17-16", "17+16", "18-15", "18+15", "18-16", "18+16", "18-17", "18+17", "19-15", "19+15", "19-16", "19+16", "19-17", "19+17", "19-18", "19+18",

            "21-20", "21+20", "22-20", "22+20", "22-21", "22+21", "23-20", "23+20", "23-21", "23+21", "23-22", "23+22", "24-20", "24+20", "24-21", "24+21", "24-22", "24+22", "24-23", "24+23",

            "26-25", "26+25", "27-25", "27+25", "27-26", "27+26", "28-25", "28+25", "28-26", "28+26", "28-27", "28+27", "29-25", "29+25", "29-26", "29+26", "29-27", "29+27", "29-28", "29+28",

            "31-30", "31+30", "32-30", "32+30", "32-31", "32+31", "33-30", "33+30", "33-31", "33+31", "33-32", "33+32", "34-30", "34+30", "34-31", "34+31", "34-32", "34+32", "34-33", "34+33",

            "36-35", "36+35", "37-35", "37+35", "37-36", "37+36", "38-35", "38+35", "38-36", "38+36", "38-37", "38+37", "39-35", "39+35", "39-36", "39+36", "39-37", "39+37", "39-38", "39+38",

            "41-40", "41+40", "42-40", "42+40", "42-41", "42+41", "43-40", "43+40", "43-41", "43+41", "43-42", "43+42", "44-40", "44+40", "44-41", "44+41", "44-42", "44+42", "44-43", "44+43",

            "46-45", "46+45", "47-45", "47+45", "47-46", "47+46", "48-45", "48+45", "48-46", "48+46", "48-47", "48+47", "49-45", "49+45", "49-46", "49+46", "49-47", "49+47", "49-48", "49+48",

            "51-50", "51+50", "52-50", "52+50", "52-51", "52+51", "53-50", "53+50", "53-51", "53+51", "53-52", "53+52", "54-50", "54+50", "54-51", "54+51", "54-52", "54+52", "54-53", "54+53",

            "56-55", "56+55", "57-55", "57+55", "57-56", "57+56", "58-55", "58+55", "58-56", "58+56", "58-57", "58+57", "59-55", "59+55", "59-56", "59+56", "59-57", "59+57", "59-58", "59+58",

            "61-60", "61+60", "62-60", "62+60", "62-61", "62+61", "63-60", "63+60", "63-61", "63+61", "63-62", "63+62", "64-60", "64+60", "64-61", "64+61", "64-62", "64+62", "64-63", "64+63",

            "66-65", "66+65", "67-65", "67+65", "67-66", "67+66", "68-65", "68+65", "68-66", "68+66", "68-67", "68+67", "69-65", "69+65", "69-66", "69+66", "69-67", "69+67", "69-68", "69+68",

            "71-70", "71+70", "72-70", "72+70", "72-71", "72+71", "73-70", "73+70", "73-71", "73+71", "73-72", "73+72", "74-70", "74+70", "74-71", "74+71", "74-72", "74+72", "74-73", "74+73",

            "76-75", "76+75", "77-75", "77+75", "77-76", "77+76", "78-75", "78+75", "78-76", "78+76", "78-77", "78+77", "79-75", "79+75", "79-76", "79+76", "79-77", "79+77", "79-78", "79+78",

            "81-80", "81+80", "82-80", "82+80", "82-81", "82+81", "83-80", "83+80", "83-81", "83+81", "83-82", "83+82", "84-80", "84+80", "84-81", "84+81", "84-82", "84+82", "84-83", "84+83",

            "86-85", "86+85", "87-85", "87+85", "87-86", "87+86", "88-85", "88+85", "88-86", "88+86", "88-87", "88+87", "89-85", "89+85", "89-86", "89+86", "89-87", "89+87", "89-88", "89+88",

            "91-90", "91+90", "92-90", "92+90", "92-91", "92+91", "93-90", "93+90", "93-91", "93+91", "93-92", "93+92", "94-90", "94+90", "94-91", "94+91", "94-92", "94+92", "94-93", "94+93",

            "96-95", "96+95", "97-95", "97+95", "97-96", "97+96", "98-95", "98+95", "98-96", "98+96", "98-97", "98+97", "99-95", "99+95", "99-96", "99+96", "99-97", "99+97", "99-98", "99+98"
        ]


function get() {
    return memory_addminus
}