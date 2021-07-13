import { EventEmitter } from "events"
import { v4 } from "uuid"

class Logger extends EventEmitter {
  log(msg) {
    const data = {
      id: v4(),
      msg
    }
    this.emit("message", data)
    console.log("Logger just emitted.")
  }
}





export default Logger
