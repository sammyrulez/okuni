
export interface Actor<T> {

    readonly tell: (message: T) => Promise<void>;

}

export class ActorRef<T>  implements Actor<T> {

    private readonly actor: Actor<T>;
    
    constructor(_actor: Actor<T>) {
        this.actor = _actor;
    }
    
    tell: (message: T) => Promise<void> =  (async (message: T)  => {
        return this.actor.tell(message);
    });

}

export interface QueryActor<T, Q, R> extends Actor<T> {

    readonly asc: (messageQuery: Q) => Promise<R>;

}
