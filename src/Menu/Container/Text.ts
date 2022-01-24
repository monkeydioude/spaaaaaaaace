import Context from "../../Canvas/Context";
import Block from "./Block";

export default class Text extends Block {
    protected lines: string[] = []
    
    addLine(text: string): Text {
        this.lines.push(text);
        return this;
    }

    setLines(lines: string[]): Text {
        this.lines = lines;
        return this;
    }

    shouldBreakLine(width: number, line: string, ctx: Context): boolean {
        return ctx.context.measureText(line).width > width;
    }

    breakLine(width: number, line: string, ctx: Context): string[] {
        if (!this.shouldBreakLine(width, line, ctx)) {
            return [];
        }
        let lines: string[] = [];
        // break for /n
        line.split("\n").forEach((l: string) => {
            const textWidth = ctx.context.measureText(l).width;
            // number of lines we should break into.
            // min(n) = 1;
            const n = Math.ceil(textWidth / width);
            const charS = Math.ceil(textWidth / l.length);
            // cycle over number of lines
            for (let i = 0; i < n; i++) {
                lines.push(l.slice(charS*i, charS*(i+1)));
            }
        })

        return lines;
    }

    writeLines(
        lines: string[],
        x: number,
        y: number,
        w: number,
        h: number,
        fs: number,
        iOverload: number,
        ctx: Context
    ) {
        lines.forEach((line: string, i: number) => {
            const bl = this.breakLine(w, line, ctx);
            if (bl.length > 0) {
                this.writeLines(bl, x, y, w, h, fs, iOverload, ctx);
                iOverload += bl.length;
                return;
            }
            const canvasY = y + (fs * (i + iOverload));
            const canvasX = x;
            ctx.write(line, canvasX, canvasY);
        });
    }

    draw(ctx: Context) {
        // canvasTxt.fontSize = this.getFontSize();
        const {x, y} = this.getCoordinates();
        const {x: w, y: h} = this.getSizes();

        this.writeLines(this.lines, x, y, w, h, this.getFontSize(), 0, ctx);
    }
}