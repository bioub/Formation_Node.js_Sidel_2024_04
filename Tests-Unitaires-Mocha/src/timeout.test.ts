import { expect } from "chai";
import { describe, it } from "mocha";
import { useFakeTimers } from "sinon";
import { timeout } from "./timeout.js";

describe('timeout function', () => {
  it('should resolve when delay expires', async () => {
    await timeout(1000);
  });
  it('should resolve when delay expires with fake', async () => {
    const realSetTimeout = globalThis.setTimeout;

    globalThis.setTimeout = function(cb: Function, delay: number) {
      cb();
    } as any;

    await timeout(1000);

    globalThis.setTimeout = realSetTimeout;
  });
  it('should resolve when delay expires with fake timer from sinon', async () => {
    const fakeTimers = useFakeTimers();

    const promise = timeout(1000);
    fakeTimers.tick(1000);
    await promise;
  });
})
