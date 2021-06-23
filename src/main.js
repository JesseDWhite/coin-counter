//questions:
//Is react not good for making games if the output needs to stay the same?
//if you do need to change the output, how can you do that within the scope of functional programming?

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.scss';
import processCoinStacks from './js/coin-stacker';

const threeHundredNFifteen = processCoinStacks(1845);

console.log(threeHundredNFifteen);