import { ActorRef, Actor } from './actor';

export class Scene {

    readonly crew: Map<string, Actor<any>> = new Map<string, Actor<any>>();
    
    public pullActor<T>(type: (new () => Actor<T>),
                                      parent: ActorRef<T>| Actor<T>| null): ActorRef<T> {
        return new ActorRef<T>(this.create(type));
      }

    private create<T>(type: (new () => T)): T {
        return new type();
    }
}