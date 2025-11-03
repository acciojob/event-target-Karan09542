class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		const callArr = this.listeners.get(event) || [];
		callArr.push(callback)
		this.listeners.set(event, callArr)      
    }
  
    removeEventListener(event, callback) {
      const callArr = this.listeners.get(event) || [];
	  this.listeners.set(event, callArr.filter(call => call.name !== callback.name));  
    }
  
    dispatchEvent(event) {
		const callArr = this.listeners.get(event) || [];
	    for(let callback of callArr){
			callback()
		}
    }
    
  }



  
