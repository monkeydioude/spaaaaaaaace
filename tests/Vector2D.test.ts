import { expect } from 'chai';
import Vector2D from "../src/Physic/Vector2D";

describe('Vector2D', () => {
    it('should compute norm', () => {
        const v = new Vector2D(3, 4);
        expect(v.getNorm()).is.eq(5);
    });
});