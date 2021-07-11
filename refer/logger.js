import { EventEmitter } from "events"
import { v4 } from "uuid"

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", {
      id: v4(),
      msg
    })
    console.log("Logger just emitted.")
  }
}





export default Logger
