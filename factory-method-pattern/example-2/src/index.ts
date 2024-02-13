import { ConcreteCreator1, ConcreteCreator2, Creator } from './clases/Creator'

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works.",
  )
  console.log(creator.algunaOperacion())
  // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
clientCode(new ConcreteCreator1())

clientCode(new ConcreteCreator2())
