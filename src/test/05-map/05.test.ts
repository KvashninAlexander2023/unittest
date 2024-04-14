


import { ManType, createGreetingMessages } from "./05-01";

let people: Array<ManType> =[
  {name:"Andrew Ivanov", age: 33},
  {name:"Alexander Ivanov2", age: 24},
  {name:"Dmitry Ivanov3", age: 18}
]

beforeEach(()=>{
  people = [
    {name:"Andrew Ivanov", age: 33},
    {name:"Alexander Ivanov2", age: 24},
    {name:"Dmitry Ivanov3", age: 18}
  ]
})

test("should get array of greeting messages", ()=>{

  const messages = createGreetingMessages(people)

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe("Hello Andrew. Welcome to Incubator")
  expect(messages[1]).toBe("Hello Alexander. Welcome to Incubator")
  expect(messages[2]).toBe("Hello Dmitry. Welcome to Incubator")
})