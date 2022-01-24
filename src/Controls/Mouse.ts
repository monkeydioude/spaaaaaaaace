export default class Mouse {
    protected clickCb: (x: number, y: number) => void
    onClick(cb: (x: number, y: number) => void) {
        this.clickCb = cb;
    }

    handleMouse(e: MouseEvent) {
        this.clickCb(e.x, e.y);
    }
}