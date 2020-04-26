import {observable} from 'mobx';

export class UiStore {
  @observable text: String = '';
  @observable spelledInput: { key: String, value: String }[] = [];
}

export default new UiStore();
