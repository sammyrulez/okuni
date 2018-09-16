import { describe , it} from 'mocha';
import { Scene } from '../lib/scene';
import { ActorRef, Actor } from '../lib/actor';

class TestActor implements Actor<string> {
    tell: (message: string) => Promise<void> = async (m: String) => {
        console.log('message ' + m);

    }

}

class StateActor implements Actor<string> {
    private readonly guests: string[] = [];
    tell: (message: string) => Promise<void> = async (m: string) => {
        this.guests.push(m);
        console.log('guests ' + this.guests);

    }

}

const scene = new Scene();

describe('An Actor', function () {
    it('should be initialized by a scene', async function () {
       
        const testRef: ActorRef<string> = scene.pullActor(TestActor, null);
        testRef.tell('Ciao');
    });
    it('should keep its state', async function() {
        const stateRef: ActorRef<string> = scene.pullActor(StateActor, null);
        stateRef.tell('Bob');
        stateRef.tell('Alice');
        stateRef.tell('Mike');
    });
});
