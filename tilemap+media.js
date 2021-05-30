//color pallet
const green = 'rgb(144, 217, 111)';
const black = 'rgb(54,58,61)';
const lava = 'rgba(255,60,0,0.4)';
const teal = 'rgb(102,180,180)';
//media
var jumpSound = new Audio('media/whoosh.mp3');
//levels
/*
tile code:
. none
0 tile      []
d stair     /
a stair     \
^ spike up
v spike down
> spike left
< spike right
~ lava
*/
const tilemap = [
[
'00000000000000000000',
'@..................@',
'0000.........d000000',
'0...........da0....0',
'0..........da0.....0',
'0.........da0......0',
'0.....000000.......0',
'0..................0',
'0..................0',
'00000..............0',
'00@0...............0',
'0........0000......0',
'0..................0',
'0..................0',
'0...000............0',
'0.....0............0',
'0000000~~~~~~~~~~~~0',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
'2<',
'1>',
'0^'
],
[
'00000000000000000000',
'@.....0>...........0',
'0000..0>..000000a..0',
'0....d0>........0..0',
'0..00000000*0...0..0',
'0.........0....d0..0',
'0*0^000...0...000..0',
'00....0>..0.....0..@',
'0..da.....0a.....000',
'0..00a...<0000a....0',
'0..000a..d000......0',
'0..0ad00000....d0000',
'0..0ad0......d00..v0',
'0..0ad0a...........0',
'0...0000000000000..0',
'0..................0',
'0000000000*000000000',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
'0<',
'2>'
],
[
'00000000000000000000',
'0..................@',
'0...........d0000000',
'0..........d0......0',
'0.........d0.......0',
'0.....d0000........0',
'0....d0............0',
'@...d0.............0',
'00000..............0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
'0>',
'1<'
],
//template
[
'00000000000000000000',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'0..................0',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
'00000000000000000000',
]
];
