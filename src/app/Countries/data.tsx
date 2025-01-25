import Aus from '../shared/images/Countries/Aus.svg';
import Ru from '../shared/images/Countries/Rus.svg';
import Usa from '../shared/images/Countries/Us.svg';
import Fr from '../shared/images/Countries/Fr.svg';
import Th from '../shared/images/Countries/Th.svg';
import Ic from '../shared/images/Countries/Ice.svg';
import Ne from '../shared/images/Countries/Ne.svg';
import Me from '../shared/images/Countries/Mex.svg';
import Gr from '../shared/images/Countries/Gr.svg';
import Per from '../shared/images/Countries/Peru.png';

import { Countries } from './types';

const countries: Countries[] =[
    {name:"Russia",flag:Ru,capital:"Moscow",Language:"Russian",Population:"144 millions",Currency:"Ruble"},
    {name:"USA",flag:Usa,capital:"Washington, D.C.",Language:"English",Population:"331 millions",Currency:"United States Dollar"},
    {name:"France",flag:Fr,capital:"Paris",Language:"French",Population:"67 millions",Currency:"Euro"},
    {name:"Netherlands",flag:Ne,capital:"Amsterdam",Language:"Dutch",Population:"17 millions",Currency:"Euro"},
    {name:"Thailand",flag:Th,capital:"Bangkok",Language:"Thai",Population:"69 millions",Currency:"Thai Batt"},
    {name:"Mexico",flag:Me,capital:"Mexico City",Language:"Spanish",Population:"128 millions",Currency:"Mexican Peso"},
    {name:"Iceland",flag:Ic,capital:"Reykjavik",Language:"Icelandic",Population:"340 thousands",Currency:"Icelandic Krona"},
    {name:"Peru",flag:Per,capital:"Lima",Language:"Spanish",Population:"33 millions",Currency:"Peruvian Sol"},
    {name:"Australia",flag:Aus,capital:"Canberra",Language:"English",Population:"25 millions",Currency:"Australian Dollar"},
    {name:"Greece",flag:Gr,capital:"Athens",Language:"Greek",Population:"10 millions",Currency:"Euro"},


]
export default countries