import uiStore from "./store";
import {action} from 'mobx';

const spellingMap: {[key: string]: String} = {
  'A':'Alfa',
  'B':'Bravo',
  'C':'Charlie',
  'D':'Delta',
  'E':'Echo',
  'F':'Foxtrot',
  'G':'Golf',
  'H':'Hotel',
  'I':'India',
  'J':'Juliett',
  'K':'Kilo',
  'L':'Lima',
  'M':'Mike',
  'N':'November',
  'O':'Oscar',
  'P':'Papa',
  'Q':'Quebec',
  'R':'Romeo',
  'S':'Sierra',
  'T':'Tango',
  'U':'Uniform',
  'V':'Victor',
  'W':'Whiskey',
  'X':'X-ray',
  'Y':'Yankee',
  'Z':'Zulu',
  '0':'Zero',
  '1':'One',
  '2':'Two',
  '3':'Three',
  '4':'Four',
  '5':'Five',
  '6':'Six',
  '7':'Seven',
  '8':'Eight',
  '9':'Nine'
};

export class Action {
  @action
  async inputChange(input: String) {
    uiStore.text = input;
    uiStore.spelledInput = input.replace(/\s/g, "")
      .toUpperCase()
      .split('')
      .map((char) => {
        return {
          key: char,
          value: spellingMap[char]
        }
      });
  }
}

export default new Action()
