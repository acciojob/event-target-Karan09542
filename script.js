class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		const callArr = this.listeners.get(event) || [];
		
		if(!callback.name){
			Object.defineProperty(callback, "name", {
				value: `${event}-${callArr.length}`,
				configurable: true,
			})
		}
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

const target = new EventTarget();
function ram(){
	console.log("radheshyam")
}
target.addEventListener("strong", () => {console.log("ram")})
target.addEventListener("strong", () => {console.log("sitaram")})
target.addEventListener("sdv", ram)

  
