import {describe} from 'mocha';
import {Scene} from '../lib/scene';
import { ActorRef, Actor } from '../lib/actor';

class TestActor implements Actor<string> {
    tell: (message: string) => Promise<void> = async (m: String) => {
          console.log('message ' + m);
           
    }

}

describe('A scene could create and Actor', function() {

    const ref: ActorRef<String> = new Scene().pullActor(TestActor, null);
    ref.tell('Ciao');
    });
  