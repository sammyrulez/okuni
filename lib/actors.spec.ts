import { Scene } from './scene';
import { ActorRef, Actor } from './actor';

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
    test('should be initialized by a scene', async function () {
       
        const testRef: ActorRef<string> = scene.pullActor(TestActor, null);
        testRef.tell('Ciao');
    });
    test('should keep its state', async function() {
        const stateRef: ActorRef<string> = scene.pullActor(StateActor, null);
        stateRef.tell('Bob');
        stateRef.tell('Alice');
        stateRef.tell('Mike');
    });
});
