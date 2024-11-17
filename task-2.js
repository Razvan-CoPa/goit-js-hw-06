class Storage {
  constructor(arr){
    this._arr = arr;
  }

  getItems(){
    return this._arr;
  }

  addItem(newItem){
    this._arr.push(newItem);
  }

  removeItem(itemToRemove){
    this._arr = this._arr.filter(item => item !== itemToRemove);
  }
}