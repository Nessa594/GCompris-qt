/* GCompris
 *
 * Copyright (C) 2015 Bruno Coudoin <bruno.coudoin@gcompris.net>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (GTK+ version)
 *   Pulkit Gupta <pulkitgenius@gmail.com> (Qt Quick port)
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
import QtQuick 2.0

QtObject {
   property string instruction: qsTr("Transportation")
   property variant levels: [
      {
          "pixmapfile": "images/st_rocket.png",
          "x": "0.2",
          "y": "0.55",
          "width": 0.4,
          "height": 0.4
      },
      {
          "pixmapfile": "images/Eole.svg",
          "x": "0.5",
          "y": "0.9",
          "width": 0.4,
          "height": 0.2
      },
      {
          "pixmapfile": "images/fardier.png",
          "x": "0.75",
          "y": "0.55",
          "width": 0.4,
          "height": 0.4
      },
      {
		  "text": qsTr("1829 Stephenson's Rocket Steam locomotive"),
		  "x": "0.25",
		  "y": 0.2,
		  "width": "0.4",
		  "type": "DisplayText"
      },
      {
		  "text": qsTr("1880 Clement Ader's Eole"),
		  "x": "0.5",
		  "y": 0.75,
		  "width": "0.4",
		  "type": "DisplayText"
      },
      {
		  "text": qsTr("1769 Cugnot's fardier"),
		  "x": "0.75",
		  "y": 0.21,
		  "width": "0.4",
		  "type": "DisplayText"
      }
   ]
}
